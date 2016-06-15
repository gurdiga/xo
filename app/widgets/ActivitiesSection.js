(function() {
  'use strict';

  function ActivitiesSection() {
    var domElement = createElement();
    var section = new Section('Acţiuni procedurale');
    var activityListContainer = createActivityListContainer();
    var addActivity = addActivityTo(activityListContainer);

    section.appendWidgets([
      activityListContainer,
      createAddActivityButton(addActivity)
    ]);

    section.appendTo(domElement);

    this.setActivities = function(activitiesArray) {
      activitiesArray.forEach(addActivityFromData);
    };

    this.setStyle = function(additionalStyle) {
      addStyle(domElement, additionalStyle);
    };

    this.appendTo = getAppenderOf(domElement);

    function addActivityFromData(activityData) {
      var ActivityWidgetClass = ActivityWidgetClasses[activityData.type];
      var activityWidget = ActivityWidgetClass.createWithData(activityData);

      addActivity(activityWidget);
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

  function addActivityTo(activityListContainer) {
    return function(activityWidget) {
      activityWidget.appendTo(activityListContainer);
    };
  }

  var Section = window.App.Widgets.Section;
  var AddActivityButton = window.App.Widgets.AddActivityButton;

  var ActivityWidgetClasses = window.App.Widgets.Activities;
  var InstitutionActivity = ActivityWidgetClasses.InstitutionActivity;
  var RefusalActivity = ActivityWidgetClasses.RefusalActivity;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var addStyle = window.App.Utils.addStyle;

  window.App.Widgets.ActivitiesSection = ActivitiesSection;

}());
