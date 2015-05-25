'use strict';

var Styled = require('mixins/styled');
var OutlinedOnFocus = require('mixins/outlined-on-focus.js');

var FieldLabel = require('./field-label.jsx');

var SelectField = React.createClass({
  mixins: [Styled, OutlinedOnFocus],

  render: function() {
    return (
      <FieldLabel label={this.props.label}>
        <select
          value={this.props.value}
          onChange={this.props.onChange}
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
