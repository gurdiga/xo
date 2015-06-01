'use strict';

var Valuable = require('mixins/valuable.js');

var Section = require('./section.jsx');
var SelectField = require('./select-field.jsx');
var DateField = require('./date-field.jsx');
var TextField = require('./TextField.jsx');
var LargeTextField = require('./large-text-field.jsx');

var a = React.PropTypes;
var anObjectOfShape = React.PropTypes.shape;

var COMPANY = 'juridică';
var INDIVIDUAL = 'fizică';
var PERSON_TYPES = [COMPANY, INDIVIDUAL];
PERSON_TYPES.COMPANY = COMPANY;
PERSON_TYPES.INDIVIDUAL = INDIVIDUAL;

var PersonSection = React.createClass({
  mixins: [Valuable],

  statics: {
    PERSON_TYPES: PERSON_TYPES
  },

  propTypes: {
    label: a.string.isRequired,
    value: anObjectOfShape({
      'gen-persoană': a.oneOf(PERSON_TYPES)
    })
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  render: function() {
    return (
      <Section label={this.props.label}>

        <SelectField label='Gen persoană' onChange={this.onPersonTypeChange} {...this.makeValuable('gen-persoană')}>
          {this.personTypeOptions()}
        </SelectField>

        {this.getSectionFields()}
      </Section>
    );
  },

  personTypeOptions: function() {
    return PERSON_TYPES.map(function(personType) {
      return <option key={personType}>{personType}</option>;
    });
  },

  getSectionFields: function() {
    if (this.state.value['gen-persoană'] === INDIVIDUAL) {
      return this.getFieldsForIndividual();
    } else {
      return this.getFieldsForCompany();
    }
  },

  getFieldsForIndividual: function() {
    return [
      <TextField label='Nume' {...this.makeValuable('nume')} />,
      <TextField label='IDNP' {...this.makeValuable('idnp')} />,
      <DateField label='Data naşterii' {...this.makeValuable('data-naşterii')} />,
      <LargeTextField label='Domiciliu' {...this.makeValuable('domiciliu')} />,
      <LargeTextField label='Note' {...this.makeValuable('note')} />
    ];
  },

  getFieldsForCompany: function() {
    return [
      <TextField label='Denumire' {...this.makeValuable('denumire')} />,
      <TextField label='IDNO' {...this.makeValuable('idno')} />,
      <LargeTextField label='Sediu' {...this.makeValuable('sediu')} />,
      <TextField label='Persoană de contact' {...this.makeValuable('persoană-de-contact')} />,
      <LargeTextField label='Note' {...this.makeValuable('note')} />
    ];
  },

  onPersonTypeChange: function(e) {
    this.setState({ value: { 'gen-persoană': e.target.value }});
  }
});

module.exports = PersonSection;
