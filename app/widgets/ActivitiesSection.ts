import {WidgetRole} from "app/widgets/WidgetRole";
import {Section} from "app/widgets/Section";
import {AddActivityButton} from "app/widgets/AddActivityButton";
import {ActivityWidgetClasses} from "app/widgets/Activities";
import {createDOMElement} from "app/utils/createDOMElement";

var InstitutionActivity = ActivityWidgetClasses.InstitutionActivity;
var RefusalActivity = ActivityWidgetClasses.RefusalActivity;

export function ActivitiesSection() {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

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
