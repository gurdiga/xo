(function() {
  'use strict';

  function TextField(labelText, value, additionalStyle) {
    var domElement = document.createElement('text-field');
    domElement.style.display = 'block';

    var input = new TextFieldInput(value, additionalStyle);
    var label = new FieldLabel(labelText, {}, [input]);
    label.appendTo(domElement);

    this.getValue = function() {
      return input.getValue();
    };

    this.appendTo = getAppenderOf(domElement);
    this.destroy = getDestroyerOf(domElement);
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;

  window.App.Widgets.TextField = TextField;

}());
