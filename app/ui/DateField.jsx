'use strict';

var DateField = {};

DateField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <TextFieldInput
        ref='input'
        value={this.props.value}
      />
    </FieldLabel>
  );
};

DateField.getValue = function() {
  return this.refs.input.getValue();
};

var DATE_FORMAT = 'dd.mm.yyyy';

DateField.statics = {
  DATE_FORMAT: DATE_FORMAT
};

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');

module.exports = React.createClass(DateField);
