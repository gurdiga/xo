'use strict';

var TextField = {};

TextField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <TextFieldInput
        ref='input'
        value={this.props.value}
        style={this.props.style}
      />
    </FieldLabel>
  );
};

TextField.getValue = function() {
  return this.refs.input.getValue();
};

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');

module.exports = React.createClass(TextField);
