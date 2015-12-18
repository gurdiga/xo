(function() {
  'use strict';

  function LabeledDateField(labelText, value, additionalStyle) {
    var domElement = createElement();

    var input = new DateFieldInput(value, additionalStyle);
    var label = new FieldLabel(labelText, {}, [input]);
    label.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.destroy = getDestroyerOf(domElement);

    this.getValue = function() {
      return input.getValue();
    };
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-date-field', style);
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledDateField = LabeledDateField;

}());
