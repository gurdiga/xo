'use strict';

var DateFormatting = require('utils/date-formatting.js');
var TextField = require('./text-field.jsx');

var DateField = React.createClass({
  render: function() {
    return (
      <TextField
        label={this.props.label}
        id={this.props.id}
        defaultValue={this.getDefaultValue()}
        style={{ width: '5.8em' }}
      />
    );
  },

  getDefaultValue: function() {
    if (this.props.defaultValue === 'currentDate') return getCurrentDateFormatted();
    else return this.props.defaultValue;

    function getCurrentDateFormatted() {
      return DateFormatting.format(new Date(), 'dd.mm.yyyy');
    }
  }
});

module.exports = DateField;
