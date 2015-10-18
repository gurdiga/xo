(function() {
  'use strict';

  function CaseActivitiesSection() {
    var domElement = createDomElement();

    var section = new Section('Acţiuni procedurale', []);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    function createDomElement() {
      var domElement = document.createElement('case-activities-section');
      domElement.style.display = 'block';
      return domElement;
    }
  }

  var Section = window.App.Widgets.Section;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CaseActivitiesSection = CaseActivitiesSection;

}());