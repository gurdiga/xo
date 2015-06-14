'use strict';

var TextFieldInput = {};

TextFieldInput.render = function() {
  return (
    <input
      type='text'
      value={this.state.value}
      {...this.makeEditable()}
      {...this.makeStyled()}
      {...this.makeOutlinedOnFocus()}
    />
  );
};

TextFieldInput.style = {
  color: 'black',
  padding: '4px',
  font: 'bold 14px sans-serif',
  width: '16em',
  backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
  backgroundPosition: '0 -4px',
  borderRadius: '2px',
  border: 'none',
  outline: 'none'
};

TextFieldInput.getInitialState = function() {
  return {
    value: this.props.value
  };
};

TextFieldInput.getValue = function() {
  return this.state.value;
};

TextFieldInput.mixins = [
  require('mixins/editable.js'),
  require('mixins/styled.js'),
  require('mixins/outlined-on-focus.js')
];

module.exports = React.createClass(TextFieldInput);
module.exports.style = TextFieldInput.style;
