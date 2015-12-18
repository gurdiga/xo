(function() {
  'use strict';

  function LabeledTextField(labelText, value, additionalStyle) {
    var domElement = createElement();

    var input = new TextFieldInput(value, additionalStyle);
    var label = new FieldLabel(labelText, {}, [input]);
    label.appendTo(domElement);

    this.getValue = function() {
      return input.getValue();
    };

    this.appendTo = getAppenderOf(domElement);
    this.destroy = getDestroyerOf(domElement);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('text-field', style);
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledTextField = LabeledTextField;

}());
