'use strict';

var Styled = require('mixins/styled.js');

var DateFormatting = require('utils/date-formatting.js');

var TextField = require('./text-field.jsx');

var DateField = React.createClass({
  mixins: [Styled],

  render: function() {
    return (
      <TextField
        value={this.getValue()}
        label={this.props.label}
        {...this.makeStyled()}
      />
    );
  },

  getValue: function() {
    if (this.props.value === '<current date>') return getCurrentDateFormatted();
    else return this.props.value;

    function getCurrentDateFormatted() {
      return DateFormatting.format(new Date(), 'dd.mm.yyyy');
    }
  }
});

module.exports = DateField;
