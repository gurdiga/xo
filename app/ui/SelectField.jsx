'use strict';

var SelectField = {};

SelectField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <select>
        <option>option</option>
      </select>
    </FieldLabel>
  );
};

var FieldLabel = require('./FieldLabel.jsx');

module.exports = React.createClass(SelectField);
