(function() {
  'use strict';

  function InstitutionActivity() {
    var domElement = createDOMElement('institution-activity');

    this.appendTo = getAppenderOf(domElement);
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
