import {WidgetRole} from "app/widgets/WidgetRole";
import {LabeledDateField} from "app/widgets/LabeledDateField";
import {createDOMElement} from "app/utils/createDOMElement";

export function ActivityDateField() {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  addDateFieldInputTo(domElement);
}

function createElement() {
  return createDOMElement('activity-date-field');
}

function addDateFieldInputTo(domElement) {
  var labelText = 'Data intentării';
  var style = {
    'width': '6.5em'
  };

  var dateFieldInput = new LabeledDateField(labelText);
  dateFieldInput.setStyle(style);
  dateFieldInput.appendTo(domElement);
}
