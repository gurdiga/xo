'use strict';

var Styled = require('mixins/styled');
var DateFormatting = require('utils/date-formatting.js');
var TextField = require('./text-field.jsx');

var DateField = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <TextField
        label={this.props.label}
        id={this.props.id}
        defaultValue={this.getDefaultValue()}
        style={this.getStyle()}
      />
    );
  },

  style: {
    width: '5.8em'
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
