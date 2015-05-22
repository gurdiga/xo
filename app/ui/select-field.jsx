'use strict';

var Styled = require('mixins/styled');
var OutlinedOnFocus = require('mixins/outlined-on-focus.js');
var InheritProps = require('mixins/inherit-props.js');

var FieldContainer = require('./field-container.jsx');
var FieldLabel = require('./field-label.jsx');

var SelectField = React.createClass({
  mixins: [Styled, OutlinedOnFocus, InheritProps],

  render: function() {
    return (
      <FieldContainer>
        <FieldLabel htmlFor={this.props.id}>{this.props.label}</FieldLabel>

        <select
          {...this.makeInheritProps('id', 'value', 'onChange')}
          {...this.makeStyled()}
          {...this.makeOutlinedOnFocus()}
        >
          {this.props.children}
        </select>
      </FieldContainer>
    );
  },

  style: {
    font: 'bold 14px sans-serif',
    width: '16em'
  }
});

module.exports = SelectField;
