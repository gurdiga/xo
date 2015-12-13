(function() {
  'use strict';

  function UnlabeledDateField() {
    var domElement = createDOMElement('unlabeled-date-field');

    var input = new DateFieldInput();
    input.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.UnlabeledDateField = UnlabeledDateField;

}());
