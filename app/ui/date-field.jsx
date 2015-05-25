'use strict';

var Styled = require('mixins/styled.js');

var DateFormatting = require('utils/date-formatting.js');

var TextField = require('./text-field.jsx');

var a = React.PropTypes;
var an = a;

var DateField = React.createClass({
  mixins: [Styled],

  propTypes: {
    label: a.string.isRequired,
    value: a.oneOfType([
      //a.number, // UNIX timestamp
      //a.string, // 2015-05-25 14:54:31
      a.oneOf(['<today>'])
    ]),
    style: an.object
  },

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
    if (this.props.value === '<today>') return getCurrentDateFormatted();
    else return this.props.value;

    function getCurrentDateFormatted() {
      return DateFormatting.format(new Date(), 'dd.mm.yyyy');
    }
  }
});

module.exports = DateField;
