'use strict';

var TextField = {};

TextField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <input
        type='text'
        value={this.state.value}
        {...this.makeEditable()}
        {...this.makeStyled()}
        {...this.makeOutlinedOnFocus()}
      />
    </FieldLabel>
  );
};

TextField.style = {
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

TextField.getInitialState = function() {
  return {
    value: this.props.value
  };
};

TextField.getValue = function() {
  return this.state.value;
};

TextField.mixins = [
  require('mixins/editable.js'),
  require('mixins/styled.js'),
  require('mixins/outlined-on-focus.js')
];

var FieldLabel = require('./FieldLabel.jsx');

module.exports = React.createClass(TextField);
