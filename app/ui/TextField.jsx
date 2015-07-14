'use strict';

var TextField = React.createClass({
  render: function() {
    return (
      <FieldLabel text={this.props.label}>
        <TextFieldInput
          ref='input'
          value={this.props.value}
          style={this.props.style}
        />
      </FieldLabel>
    );
  },

  getValue: function() {
    return this.refs.input.getValue();
  }
});

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');

module.exports = TextField;
