'use strict';

var Valuable = require('mixins/valuable.js');

var Section = require('./Section.js');
var SelectField = require('./SelectField.js');
var DateField = require('./DateField.js');
var TextField = require('./TextField.jsx');
var LargeTextField = require('./LargeTextField.js');

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
      e(Section, {label: this.props.label, ref: 'section'},

        e(SelectField, _.merge({
          label: 'Gen persoană',
          onChange: this.onPersonTypeChange
        },
          this.makeValuable('gen-persoană')
        ),
          this.personTypeOptions()
        ),

        this.getSectionFields()
      )
    );
  },

  personTypeOptions: function() {
    return PERSON_TYPES.map(function(personType) {
      return e('option', {key: personType}, personType);
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
      e(TextField, _.merge({label: 'Nume'}, this.makeValuable('nume'))),
      e(TextField, _.merge({label: 'IDNP'}, this.makeValuable('idnp'))),
      e(DateField, _.merge({label: 'Data naşterii'}, this.makeValuable('data-naşterii'))),
      e(LargeTextField, _.merge({label: 'Domiciliu'}, this.makeValuable('domiciliu'))),
      e(LargeTextField, _.merge({label: 'Note'}, this.makeValuable('note')))
    ];
  },

  getFieldsForCompany: function() {
    return [
      e(TextField, _.merge({label: 'Denumire'}, this.makeValuable('denumire'))),
      e(TextField, _.merge({label: 'IDNO'}, this.makeValuable('idno'))),
      e(LargeTextField, _.merge({label: 'Sediu'}, this.makeValuable('sediu'))),
      e(TextField, _.merge({label: 'Persoană de contact'}, this.makeValuable('persoană-de-contact'))),
      e(LargeTextField, _.merge({label: 'Note'}, this.makeValuable('note')))
    ];
  },

  onPersonTypeChange: function(e) {
    this.setState({ value: { 'gen-persoană': e.target.value }});
  }
});

module.exports = PersonSection;