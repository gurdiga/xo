'use strict';

var LargeTextField = {};

LargeTextField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <textarea
        value={this.state.value}
        onChange={this.onChange}
        style={this.style}
        {...this.makeOutlinedOnFocus()}
      />
    </FieldLabel>
  );
};

LargeTextField.getValue = function() {
  return this.state.value;
};

LargeTextField.onChange = function(e) {
  this.setState({ value: e.target.value });
};

LargeTextField.getInitialState = function() {
  return {
    value: this.props.value
  };
};

LargeTextField.style = {
  color: 'black',
  padding: '4px',
  marginLeft: '1em',
  font: 'bold 14px/1.75 sans-serif',
  width: '26em',
  height: '5.8em',
  backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
  borderRadius: '2px',
  border: 'none',
  outline: 'none',
  resize: 'none'
};

LargeTextField.mixins = [
  require('mixins/outlined-on-focus.js')
];

var FieldLabel = require('./FieldLabel.jsx');

module.exports = React.createClass(LargeTextField);
