(function() {
  'use strict';

  function CaseActivitiesSection() {
    var domElement = createDomElement();

    this.appendTo = getAppenderOf(domElement);

    function createDomElement() {
      var domElement = document.createElement('case-activities-section');
      return domElement;
    }
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CaseActivitiesSection = CaseActivitiesSection;

}());
