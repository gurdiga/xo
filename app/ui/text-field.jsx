'use strict';

var Styled = require('mixins/styled.js');
var Editable = require('mixins/editable.js');
var OutlinedOnFocus = require('mixins/outlined-on-focus.js');
var InheritProps = require('mixins/inherit-props.js');

var FieldContainer = require('./field-container.jsx');
var FieldLabel = require('./field-label.jsx');

var TextField = React.createClass({
  mixins: [Styled, Editable, OutlinedOnFocus, InheritProps],

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  render: function() {
    return (
      <FieldContainer>
        <FieldLabel htmlFor={this.props.id}>{this.props.label}</FieldLabel>

        <input
          {...this.makeInheritProps('id', 'value')}
          {...this.makeStyled()}
          {...this.makeEditable()}
          {...this.makeOutlinedOnFocus()}
        />
      </FieldContainer>
    );
  },

  style: {
    color: 'black',
    padding: '4px',
    font: 'bold 14px sans-serif',
    width: '16em',
    backgroundImage: 'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
    backgroundPosition: '0 -4px',
    borderRadius: '2px',
    border: 'none',
    outline: 'none'
  }
});

module.exports = TextField;
