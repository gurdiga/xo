'use strict';

var Section = require('./section.jsx');
var SelectField = require('./select-field.jsx');
var DateField = require('./date-field.jsx');
var TextField = require('./text-field.jsx');
var LargeTextField = require('./large-text-field.jsx');

var a = React.PropTypes;

var PersonSection = React.createClass({
  propTypes: {
    label: a.string.isRequired,
    personType: a.oneOf(['juridică', 'fizică']).isRequired
  },

  getInitialState: function() {
    return {
      personType: this.props.personType
    };
  },

  render: function() {
    return (
      <Section label={this.props.label}>

        <SelectField
          label='Gen persoană'
          value={this.state.personType}
          onChange={this.onChange}
        >
          <option>juridică</option>
          <option>fizică</option>
        </SelectField>

        {this.getSectionFields()}

      </Section>
    );
  },

  getSectionFields: function() {
    if (this.state.personType === 'fizică') return this.getFieldsForIndividual();
    else return this.getFieldsForCompany();
  },

  getFieldsForIndividual: function() {
    return (
      <div>
        <TextField label='Nume' />
        <TextField label='IDNP' />
        <DateField label='Data naşterii' />
        <LargeTextField label='Domiciliu' />
        <LargeTextField label='Note' />
      </div>
    );
  },

  getFieldsForCompany: function() {
    return (
      <div>
        <TextField label='Denumire' />
        <TextField label='IDNO' />
        <LargeTextField label='Sediu' />
        <TextField label='Persoană de contact' />
        <LargeTextField label='Note' />
      </div>
    );
  },

  onChange: function(e) {
    this.setState({ personType: e.target.value });
  }
});

module.exports = PersonSection;
