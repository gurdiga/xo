(function() {
  'use strict';

  function ActivitiesSection(additionalStyle) {
    var domElement = createElement(additionalStyle);

    var section = new Section('Acţiuni procedurale');
    var activityListContainer = createActivityListContainer();

    section.appendWidgets([
      activityListContainer,
      createAddActivityButton(activityListContainer)
    ]);

    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(additionalStyle) {
    var style = _.extend({
      display: 'block'
    }, additionalStyle);

    var domElement = createDOMElement('case-activities-section', style);

    return domElement;
  }

  function createActivityListContainer() {
    return createDOMElement('div');
  }

  function createAddActivityButton(activityListContainer) {
    var options = [
      new InstitutionActivity(),
      new RefusalActivity()
    ];

    return new AddActivityButton(options, addActivityTo(activityListContainer));
  }

  function addActivityTo(activityListContainer) {
    return function(activityWidget) {
      activityWidget.appendTo(activityListContainer);
    };
  }

  var Section = window.App.Widgets.Section;
  var AddActivityButton = window.App.Widgets.AddActivityButton;
  var InstitutionActivity = window.App.Widgets.InstitutionActivity;
  var RefusalActivity = window.App.Widgets.RefusalActivity;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
