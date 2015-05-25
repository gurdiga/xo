'use strict';

var Styled = require('mixins/styled.js');
var Editable = require('mixins/editable.js');
var OutlinedOnFocus = require('mixins/outlined-on-focus.js');

var FieldLabel = require('./field-label.jsx');

var LargeTextField = React.createClass({
  mixins: [Styled, Editable, OutlinedOnFocus],

  getInitialState: function() {
    return {
      value: ''
    };
  },

  render: function() {
    return (
      <FieldLabel label={this.props.label}>
        <textarea
          value={this.props.value}
          {...this.makeStyled()}
          {...this.makeEditable()}
          {...this.makeOutlinedOnFocus()}
        >
        </textarea>
      </FieldLabel>
    );
  },

  style: {
    color: 'black',
    padding: '3px 4px 4px',
    margin: '0 0 0 1em',
    font: 'bold 14px sans-serif',
    lineHeight: '1.75',
    width: '26em',
    height: '5.8em',
    backgroundImage: 'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
    backgroundPosition: '0 -1px',
    borderRadius: '2px',
    border: 'none',
    outline: 'none',
    resize: 'none'
  }
});

module.exports = LargeTextField;
