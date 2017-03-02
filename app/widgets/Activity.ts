import * as _ from "lodash";
import {appendWidgets} from "app/utils/appendWidgets";
import {WidgetRole} from "app/widgets/WidgetRole";
import {ActivityDateField} from "app/widgets/ActivityDateField";
import {ActivityTitle} from "app/widgets/ActivityTitle";
import {ActivityDetailsSection} from "app/widgets/ActivityDetailsSection";
import {createDOMElement} from "app/utils/createDOMElement";
import {assert} from "app/utils/assert";

export function Activity(widgetName, descriptionText) {
  var domElement = createElement(widgetName);
  WidgetRole.apply(this, [domElement]);

  var detailsSection = new ActivityDetailsSection();

  appendWidgets([
    new ActivityTitle(descriptionText),
    new ActivityDateField(),
    detailsSection
  ]).to(domElement);

  this.getDescription = function() {
    return descriptionText;
  };

  this.setDetailWidgets = function(detailWidgets) {
    detailsSection.setChildWidgets(detailWidgets);
  };
}

Activity.createWithData = function(data) {
  assert(_.isPlainObject(data), 'Activity.createWithData expects the argument to be a plain JS object');

  var activity = new this();

  activity.setData(data);

  return activity;
};

function createElement(widgetName) {
  var style = {
    marginTop: '5px',
    marginBottom: '10px',
    borderWidth: '0',
    padding: '0'
  };

  var attributes = {
    'widget-name': widgetName
  };

  return createDOMElement('fieldset', style, attributes);
}
