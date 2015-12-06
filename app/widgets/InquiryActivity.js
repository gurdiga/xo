(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = document.createElement('inquiry-activity');

    // TODO: figure out what to do for real
    domElement.textContent = 'Cererea de la creditor';

    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
