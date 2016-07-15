(function() {
  'use strict';

  function LabeledTextField(labelText, value, additionalStyle) {
    var domElement = createElement();

    var input = new TextFieldInput(value, additionalStyle);
    addLabel(domElement, labelText, input);

    this.getValue = delegateTo(input, 'getValue');

    this.appendTo = getAppenderOf(domElement);
    this.remove = getRemoverOf(domElement);
    this.focus = delegateTo(input, 'focus');
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-text-field', style);
  }

  function addLabel(domElement, labelText, input) {
    var label = new FieldLabel(labelText, [input]);
    label.appendTo(domElement);
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.LabeledTextField = LabeledTextField;

}());
