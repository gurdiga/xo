(function() {
  'use strict';

  function UnlabeledDateField(defaultFieldValue, additionalStyle) {
    var domElement = createDOMElement('unlabeled-date-field');

    addDateFieldInput(domElement, defaultFieldValue, additionalStyle);

    this.appendTo = getAppenderOf(domElement);
  }

  function addDateFieldInput(domElement, defaultFieldValue, additionalStyle) {
    var input = new DateFieldInput(defaultFieldValue, additionalStyle);
    input.appendTo(domElement);
  }

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.UnlabeledDateField = UnlabeledDateField;

}());
