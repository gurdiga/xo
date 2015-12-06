(function() {
  'use strict';

  function ActivitiesSection(additionalStyle) {
    var domElement = createElement(additionalStyle);

    createSection(domElement, [
      new InquiryActivity()
    ]);

    this.appendTo = getAppenderOf(domElement);
  }

  function createSection(domElement, childWidgets) {
    var section = new Section('Acţiuni procedurale', childWidgets);
    section.appendTo(domElement);
  }

  function createElement(additionalStyle) {
    var domElement = document.createElement('case-activities-section');
    domElement.style.display = 'block';
    _.extend(domElement.style, additionalStyle);
    return domElement;
  }

  var Section = window.App.Widgets.Section;
  var InquiryActivity = window.App.Widgets.InquiryActivity;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
