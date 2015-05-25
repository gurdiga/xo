'use strict';

var Styled = require('mixins/styled.js');
var Editable = require('mixins/editable.js');
var OutlinedOnFocus = require('mixins/outlined-on-focus.js');

var FieldLabel = require('./field-label.jsx');

var TextField = React.createClass({
  mixins: [Styled, Editable, OutlinedOnFocus],

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  render: function() {
    return (
      <FieldLabel label={this.props.label}>
        <input
          value={this.props.value}
          {...this.makeStyled()}
          {...this.makeEditable()}
          {...this.makeOutlinedOnFocus()}
        />
      </FieldLabel>
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
