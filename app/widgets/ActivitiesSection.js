(function() {
  'use strict';

  function ActivitiesSection(additionalStyle) {
    var domElement = createElement(additionalStyle);

    var section = new Section('Acţiuni procedurale');
    var activityListContainer = createActivityListContainer();
    var addActivity = addActivityTo(activityListContainer);

    section.appendWidgets([
      activityListContainer,
      createAddActivityButton(addActivity)
    ]);

    section.appendTo(domElement);

    this.setData = function(activitiesArray) {
      activitiesArray.forEach(addActivityFromData);
    };

    this.appendTo = getAppenderOf(domElement);

    function addActivityFromData(activityData) {
      var WidgetClass = ActivityWidgetClasses[activityData.type];
      var activityWidget = new WidgetClass(activityData);

      addActivity(activityWidget);
    }
  }

  function createElement(additionalStyle) {
    var style = _.extend({
      display: 'block'
    }, additionalStyle);

    var domElement = createDOMElement('case-activities-section', style);

    return domElement;
  }

  function createActivityListContainer() {
    var style = {};
    var attributes = {
      'name': 'activity-list-container'
    };

    return createDOMElement('div', style, attributes);
  }

  function createAddActivityButton(action) {
    var options = [
      new InstitutionActivity(),
      new RefusalActivity()
    ];

    return new AddActivityButton(options, action);
  }

  function addActivityTo(activityListContainer) {
    return function(activityWidget) {
      activityWidget.appendTo(activityListContainer);
    };
  }

  var Section = window.App.Widgets.Section;
  var AddActivityButton = window.App.Widgets.AddActivityButton;

  var ActivityWidgetClasses = _.pick(window.App.Widgets, [
    'InstitutionActivity',
    'RefusalActivity'
  ]);

  var InstitutionActivity = ActivityWidgetClasses.InstitutionActivity;
  var RefusalActivity = ActivityWidgetClasses.RefusalActivity;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
