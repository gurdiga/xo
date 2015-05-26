'use strict';

var Styled = require('mixins/styled.js');
var Editable = require('mixins/editable.js');
var Valuable = require('mixins/valuable.js');
var OutlinedOnFocus = require('mixins/outlined-on-focus.js');

var FieldLabel = require('./field-label.jsx');

var a = React.PropTypes;
var an = a;

var SelectField = React.createClass({
  mixins: [Styled, OutlinedOnFocus, Editable, Valuable],

  propTypes: {
    label: a.string.isRequired,
    value: a.string,
    onChange: a.func,
    children: an.arrayOf(an.element).isRequired,
    style: an.object
  },

  getInitialState: function() {
    return { value: this.props.value };
  },

  render: function() {
    return (
      <FieldLabel label={this.props.label}>
        <select
          value={this.state.value}
          {...this.makeEditable()}
          {...this.makeStyled()}
          {...this.makeOutlinedOnFocus()}
        >
          {this.props.children}
        </select>
      </FieldLabel>
    );
  },

  style: {
    position: 'absolute',
    marginTop: '-2px',
    fontSize: '14px',
    width: '16em'
  }
});

module.exports = SelectField;
