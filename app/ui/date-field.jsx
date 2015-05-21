'use strict';

var DateFormatting = require('utils/date-formatting.js');
var TextField = require('./text-field.jsx');

var DateField = React.createClass({
  render: function() {
    return (
      <TextField
        label={this.props.label}
        id='data-intentării'
        defaultValue={this.getDefaultValue()}
        className='date-field'
      />
    );
  },

  getDefaultValue: function() {
    if (this.props.defaultValue === 'currentDate') return currentDate();
    else return this.props.defaultValue;

    function currentDate() {
      return DateFormatting.format(new Date(), 'dd/mm/yyyy');
    }
  }
});

module.exports = DateField;
