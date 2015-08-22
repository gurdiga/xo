(function() {
  'use strict';

  function TextFieldRaw(labelText, value, additionalStyle) {
    var domElement = document.createElement('text-field');
    domElement.style.display = 'block';

    var input = new TextFieldInput(value, additionalStyle);
    var label = new FieldLabel(labelText, {}, [input]);
    label.appendTo(domElement);

    this.getValue = function() {
      return input.getValue();
    };

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.destroy = function() {
      domElement.parentNode.removeChild(domElement);
    };
  }

  var FieldLabel = window.App.Widgets.FieldLabelRaw;
  var TextFieldInput = window.App.Widgets.TextFieldInputRaw;

  window.App.Widgets.TextFieldRaw = TextFieldRaw;

}());
