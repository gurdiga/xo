import {WidgetRole} from "app/widgets/WidgetRole";
import {FieldLabel} from "app/widgets/FieldLabel";
import {TextFieldInput} from "app/widgets/TextFieldInput";
import {createDOMElement} from "app/utils/createDOMElement";
import {delegateTo} from "app/utils/delegateTo";

export function LabeledTextField(labelText, value) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var input = new TextFieldInput(value);
  addLabel(domElement, labelText, input);

  this.getValue = delegateTo(input, 'getValue');

  this.focus = delegateTo(input, 'focus');
}

function createElement() {
  var style = {
    display: 'block'
  };

  return createDOMElement('labeled-text-field', style);
}

function addLabel(domElement, labelText, input) {
  var label = new FieldLabel(labelText, [input]);
  label.appendTo(domElement);
}
