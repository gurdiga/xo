(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = createDOMElement('inquiry-activity');

    addDateField(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function addDateField(domElement) {
    var dateField = new DateField();
    dateField.appendTo(domElement);
  }

  var DateField = window.App.Widgets.DateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
