import * as _ from "lodash";
import {WidgetRole} from "app/widgets/WidgetRole";
import {FieldLabel} from "app/widgets/FieldLabel";
import {TextFieldInput} from "app/widgets/TextFieldInput";
import {delegateTo} from "app/utils/delegateTo";
import {createDOMElement} from "app/utils/createDOMElement";
import {addFocusEffect} from "app/utils/addFocusEffect";

export function LabeledLargeTextField(labelText, value) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var textarea = createTextareaElement(value);
  var label = new FieldLabel(labelText, [textarea]);
  label.appendTo(domElement);

  this.focus = delegateTo(textarea, 'focus');
  this.getValue = delegateTo(textarea, 'value');
}

function createElement() {
  var style = {
    display: 'block'
  };

  return createDOMElement('labeled-large-text-field', style);
}

function createTextareaElement(value) {
  var textFieldStyle = _.pick(TextFieldInput.STYLE,
    'color', 'padding', 'font', 'backgroundImage',
    'borderRadius', 'borderWidth', 'outlineWidth'
  );

  var style = _.extend(textFieldStyle, {
    display: 'block',
    marginLeft: '1em',
    marginBottom: '5px',
    lineHeight: '1.75',
    width: '340px',
    height: '5.8em',
    resize: 'none'
  });

  var textarea = createDOMElement('textarea', style);

  if (value) textarea.value = value;

  addFocusEffect(textarea, {
    boxShadow: '0 0 3px 2px #b5d5ff'
  });

  return textarea;
}
