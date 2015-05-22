'use strict';

var InheritProps = require('mixins/inherit-props.js');

var Section = require('./section.jsx');
var SelectField = require('./select-field.jsx');
var DateField = require('./date-field.jsx');
var TextField = require('./text-field.jsx');
var LargeTextField = require('./large-text-field.jsx');

var PersonSection = React.createClass({
  mixins: [InheritProps],

  getInitialState: function() {
    return {
      personType: this.props.personType || 'juridică'
    };
  },

  render: function() {
    return (
      <Section {...this.makeInheritProps('label')}>

        <SelectField
          label='Gen persoană'
          id='person-type'
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
        <TextField label='Nume' id='name' />
        <TextField label='IDNP' id='personal-id' />
        <DateField label='Data naşterii' id='birth-date' />
        <LargeTextField label='Domiciliu' id='address' />
        <LargeTextField label='Note' id='notes' />
      </div>
    );
  },

  getFieldsForCompany: function() {
    return (
      <div>
        <TextField label='Denumire' id='name' />
        <TextField label='IDNO' id='registration-id' />
        <LargeTextField label='Sediu' id='address' />
        <TextField label='Persoană de contact' id='contact-person' />
        <LargeTextField label='Note' id='notes' />
      </div>
    );
  },

  onChange: function(e) {
    this.setState({ personType: e.target.value });
  }
});

module.exports = PersonSection;
