(function() {
  'use strict';

  function ActivitiesSection() {
    var domElement = createElement();
    var activityListContainer = createActivityListContainer();
    var addActivityButton = createAddActivityButton(addActivity);

    var section = new Section('Acţiuni procedurale');

    section.appendWidgets([
      activityListContainer,
      addActivityButton
    ]);

    section.appendTo(domElement);

    this.setActivities = function(activitiesArray) {
      activitiesArray.forEach(addActivityFromData);
    };

    this.setStyle = getStylerOf(domElement);
    this.appendTo = getAppenderOf(domElement);

    function addActivityFromData(activityData) {
      var ActivityWidgetClass = ActivityWidgetClasses[activityData.widgetClassName];
      var activityWidget = ActivityWidgetClass.createWithData(activityData);

      addActivity(activityWidget);
    }

    function addActivity(activityWidget) {
      activityWidget.appendTo(activityListContainer);
    }
  }

  function createElement() {
    var style = {
      'display': 'block'
    };

    return createDOMElement('case-activities-section', style);
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

  var Section = window.App.Widgets.Section;
  var AddActivityButton = window.App.Widgets.AddActivityButton;

  var ActivityWidgetClasses = window.App.Widgets.Activities;
  var InstitutionActivity = ActivityWidgetClasses.InstitutionActivity;
  var RefusalActivity = ActivityWidgetClasses.RefusalActivity;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getStylerOf = window.App.Utils.getStylerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
