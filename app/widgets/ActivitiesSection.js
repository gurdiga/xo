(function() {
  'use strict';

  function ActivitiesSection(additionalStyle) {
    var domElement = createElement(additionalStyle);

    createSection(domElement, [
      new InstitutionActivity()
    ]);

    this.appendTo = getAppenderOf(domElement);
  }

  function createSection(domElement, childWidgets) {
    var section = new Section('Acţiuni procedurale', childWidgets);
    section.appendTo(domElement);
  }

  function createElement(additionalStyle) {
    var style = _.extend({
      display: 'block'
    }, additionalStyle);

    var domElement = createDOMElement('case-activities-section', style);

    return domElement;
  }

  var Section = window.App.Widgets.Section;
  var InstitutionActivity = window.App.Widgets.InstitutionActivity;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
