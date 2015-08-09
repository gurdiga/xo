(function() {
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

  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  window.App.Widgets.TextField = TextField;
}());
