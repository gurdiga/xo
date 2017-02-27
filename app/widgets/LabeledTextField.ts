(function() {
  'use strict';

  function LabeledTextField(labelText, value) {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    var input = new TextFieldInput(value);
    addLabel(domElement, labelText, input);

    this.getValue = delegateTo(input, 'getValue');

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

  var WidgetRole = window.App.Widgets.WidgetRole;
  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.LabeledTextField = LabeledTextField;

}());
