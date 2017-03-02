import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";

export function LabeledCheckbox(labelText) {
  var checkbox = createCheckbox();
  var domElement = createElement(labelText, checkbox);
  WidgetRole.apply(this, [domElement]);

  this.getValue = function() {
    return checkbox.checked;
  };

  this.setValue = function(isChecked) {
    checkbox.checked = isChecked;
  };

  this.onChange = function(callback) {
    checkbox.addEventListener('click', function() {
      callback(checkbox.checked);
    });
  };
}

function createCheckbox() {
  var style = {
    'vertical-align': '1px'
  };

  var attributes = {
    'type': 'checkbox'
  };

  return createDOMElement('input', style, attributes);
}

function createElement(labelText, checkbox) {
  var span = createDOMElement('span');
  span.textContent = labelText;

  var label = createDOMElement('label');
  label.appendChild(checkbox);
  label.appendChild(span);

  var domElement = createDOMElement('labeled-checkbox');
  domElement.appendChild(label);

  return domElement;
}
