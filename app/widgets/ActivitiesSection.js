(function() {
  'use strict';

  function ActivitiesSection(additionalStyle) {
    var domElement = createElement(additionalStyle);

    var section = new Section('Acţiuni procedurale', []);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    var domElement = document.createElement('case-activities-section');
    domElement.style.display = 'block';
    _.extend(domElement.style, additionalStyle);
    return domElement;
  }

  var Section = window.App.Widgets.Section;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
