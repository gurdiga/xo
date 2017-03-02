import {WidgetRole} from "app/widgets/WidgetRole";
import {FieldLabel} from "app/widgets/FieldLabel";
import {DateField} from "app/widgets/DateField";
import {createDOMElement} from "app/utils/createDOMElement";
import {delegateTo} from "app/utils/delegateTo";

export function LabeledDateField(labelText, value) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var input = new DateField(value);
  var label = new FieldLabel(labelText, [input]);
  label.appendTo(domElement);

  this.getValue = delegateTo(input, 'getValue');
  this.focus = delegateTo(input, 'focus');
  this.setStyle = delegateTo(input, 'setStyle');
}

function createElement() {
  var style = {
    display: 'block'
  };

  return createDOMElement('labeled-date-field', style);
}
