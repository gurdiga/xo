(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = createDOMElement('inquiry-activity');

    var dateField = createDateField();
    dateField.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createDateField() {
    var dateField = new UnlabeledDateField();
    return dateField;
  }

  var UnlabeledDateField = window.App.Widgets.UnlabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
