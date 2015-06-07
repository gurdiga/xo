'use strict';

var Styled = require('mixins/styled.js');
var Valuable = require('mixins/valuable.js');

var DateFormatting = require('utils/DateFormatting.js');

var TextField = require('./TextField.jsx');

var a = React.PropTypes;
var an = a;
var aDate = require('utils/proptype-a-date.js');

var DateField = React.createClass({
  mixins: [Styled, Valuable],

  propTypes: {
    label: a.string.isRequired,
    value: aDate,
    style: an.object
  },

  getInitialState: function() {
    return { value: getDateFromProps(this) };
  },

  render: function() {
    return (
      <TextField
        value={this.state.value}
        label={this.props.label}
        {...this.makeStyled()}
      />
    );
  },
});

function getDateFromProps(component) {
  if (component.props.value === '<today>') return getCurrentDateFormatted();
  else return component.props.value;
}

function getCurrentDateFormatted() {
  return DateFormatting.format(new Date(), 'dd.mm.yyyy');
}

module.exports = DateField;
