(function() {
  'use strict';

  function TextFieldRaw(label, value, additionalStyle) {
    var domElement = document.createElement('text-field');
    domElement.style.display = 'block';

    var inputWidget = new TextFieldInput(value, additionalStyle);
    var labelWidget = new FieldLabel(label, {}, [inputWidget]);
    labelWidget.appendTo(domElement);

    this.getValue = function() {
      return inputWidget.getValue();
    };

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
  }

  window.App.Widgets.TextFieldRaw = TextFieldRaw;

  var FieldLabel = window.App.Widgets.FieldLabelRaw;
  var TextFieldInput = window.App.Widgets.TextFieldInputRaw;

}());
