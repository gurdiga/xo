(function() {
  'use strict';

  function InquiryActivity() {
    var domElement = document.createElement('inquiry-activity');

    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
