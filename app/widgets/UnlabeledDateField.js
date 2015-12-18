(function() {
  'use strict';

  function UnlabeledDateField(defaultFieldValue, additionalStyle) {
    var domElement = createDOMElement('unlabeled-date-field');

    var dateFieldInput = new DateFieldInput(defaultFieldValue, additionalStyle);
    dateFieldInput.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.getValue = delegateTo(dateFieldInput, 'getValue');
  }

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.UnlabeledDateField = UnlabeledDateField;

}());
