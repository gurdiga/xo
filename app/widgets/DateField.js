(function() {
  'use strict';

  function DateField(labelText, value, additionalStyle) {
    var domElement = createDOMElement('date-field', {
      display: 'block'
    });

    var input = new DateFieldInput(value, additionalStyle);
    var label = new FieldLabel(labelText, {}, [input]);
    label.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.destroy = getDestroyerOf(domElement);

    this.getValue = function() {
      return input.getValue();
    };
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.DateField = DateField;

}());
