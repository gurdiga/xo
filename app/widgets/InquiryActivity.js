(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = createDOMElement('inquiry-activity');

    addDateField(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function addDateField(domElement) {
    var dateField = new UnlabeledDateField();
    dateField.appendTo(domElement);
  }

  var UnlabeledDateField = window.App.Widgets.UnlabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
