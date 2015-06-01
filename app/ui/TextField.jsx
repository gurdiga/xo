'use strict';

var TextField = {};

TextField.render = function() {
  return (
    <label style={labelLayoutStyle}>
      <span style={labelTextStyle}>{ this.props.label }</span>
      <input
        type='text'
        value={this.state.value}
        {...this.makeEditable()}
        {...this.makeStyled()}
        {...this.makeOutlinedOnFocus()}
      />
    </label>
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

var labelLayoutStyle = {
  display: 'block',
  margin: '0 0 3px 5px'
};

var labelTextStyle = {
  color: '#555',
  fontSize: '14px',
  display: 'inline-block',
  width: '11em'
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

module.exports = React.createClass(TextField);
