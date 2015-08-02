'use strict';

var TextField = React.createClass({
  displayName: 'TextField',

  render: function() {
    return (
      e(FieldLabel, {text: this.props.label},
        e(TextFieldInput, {
          ref: 'input',
          value: this.props.value,
          style: this.props.style
        })
      )
    );
  },

  getValue: function() {
    return this.refs.input.getValue();
  }
});

var FieldLabel = require('./FieldLabel.js');
var TextFieldInput = require('./TextFieldInput.js');

module.exports = TextField;
