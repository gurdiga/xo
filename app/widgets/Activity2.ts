import {WidgetRole} from "app/widgets/WidgetRole";
import {LabeledContainer} from "app/widgets/LabeledContainer";
import {DateField} from "app/widgets/DateField";
import {delegateTo} from "app/utils/delegateTo";
import {createDOMElement} from "app/utils/createDOMElement";

export function Activity2(widgetName, labelText) {
  var domElement = createElement(widgetName);
  WidgetRole.apply(this, [domElement]);

  var container = createContainer(labelText);
  var dateField = createDateField();

  container.appendTo(domElement);
  container.appendWidgets([dateField]);

  this.appendWidgets = delegateTo(container, 'appendWidgets');
}

Activity2.createWithData = function(data) {
  return new this(data['widget-name'], data['label-text']);
};

function createElement(widgetName) {
  var style = {};
  var attributes = {
    'widget-name': widgetName
  };

  return createDOMElement('section', style, attributes);
}

function createContainer(labelText) {
  var labelStyle = {
    'font-size': '16px',
    'font-weight': 'bold'
  };
  var container = new LabeledContainer(labelText);

  container.setLabelStyle(labelStyle);

  return container;
}

function createDateField() {
  var dateField = new DateField();
  var style = {
    'width': '6.5em'
  };

  dateField.setStyle(style);

  return dateField;
}
