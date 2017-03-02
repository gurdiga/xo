import {WidgetRole} from "app/widgets/WidgetRole";
import {DateFieldInput} from "app/widgets/DateFieldInput";
import {createDOMElement} from "app/utils/createDOMElement";
import {delegateTo} from "app/utils/delegateTo";

export function DateField(defaultValue) {
  var domElement = createDOMElement('date-field');
  WidgetRole.apply(this, [domElement]);

  var dateFieldInput = new DateFieldInput(defaultValue);
  dateFieldInput.appendTo(domElement);

  this.getValue = delegateTo(dateFieldInput, 'getValue');
  this.focus = delegateTo(dateFieldInput, 'focus');
  this.setStyle = delegateTo(dateFieldInput, 'setStyle');
}
