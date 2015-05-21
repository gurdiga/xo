'use strict';

var PersonSection = React.createClass({
  getInitialState: function() {
    return {
      personType: 'juridică'
    };
  },

  render: function() {
    return (
      <Section label={this.props.label}>

        <SelectField label='Gen persoană' id='person-type' onChange={this.onChange}>
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
      <TextField label='Nume' />
    );
  },

  getFieldsForCompany: function() {
    return (
      <TextField label='Denumire' />
    );
  },

  onChange: function(e) {
    this.setState({ personType: e.target.value });
  }
});

module.exports = PersonSection;

var Section = require('./section.jsx');
var SelectField = require('./select-field.jsx');
var TextField = require('./text-field.jsx');
