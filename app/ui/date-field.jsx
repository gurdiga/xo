'use strict';

var Styled = require('mixins/styled.js');
var InheritProps = require('mixins/inherit-props.js');

var DateFormatting = require('utils/date-formatting.js');

var TextField = require('./text-field.jsx');

var DateField = React.createClass({
  mixins: [Styled, InheritProps],

  render: function() {
    return (
      <TextField
        value={this.getValue()}
        {...this.makeInheritProps('label', 'id')}
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
