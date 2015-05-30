'use strict';

var TextField = {};

TextField.render = function render() {
  return (
    <FieldLabel label={this.props.label}>
      <input
        value={this.state.value}
        {...this.makeStyled()}
        {...this.makeEditable()}
        {...this.makeOutlinedOnFocus()}
      />
    </FieldLabel>
  );
};

var a, an;
a = an = React.PropTypes;

TextField.propTypes = {
  label: a.string.isRequired,
  value: a.string,
  style: an.object
};

TextField.getInitialState = function getInitialState() {
  return {
    value: this.props.value
  };
};

TextField.style = {
  color: 'black',
  padding: '4px',
  font: 'bold 14px sans-serif',
  width: '16em',
  backgroundImage: 'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
  backgroundPosition: '0 -4px',
  borderRadius: '2px',
  border: 'none',
  outline: 'none'
};

TextField.mixins = [
  require('mixins/styled.js'),
  require('mixins/editable.js'),
  require('mixins/valuable.js'),
  require('mixins/outlined-on-focus.js')
];

var FieldLabel = require('./field-label.jsx');

module.exports = React.createClass(TextField);
