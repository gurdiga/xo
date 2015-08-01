'use strict';

var TextField = React.createClass({
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

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');

module.exports = TextField;
