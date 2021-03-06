import * as _ from "lodash";
import {TextFieldInput} from "app/widgets/TextFieldInput";
import {WidgetRole} from "app/widgets/WidgetRole";
import {FieldLabel} from "app/widgets/FieldLabel";
import {delegateTo} from "app/utils/delegateTo";
import {createDOMElement} from "app/utils/createDOMElement";

export function LabeledSelectField(labelText, options, defaultValue) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var select = createSelect(options, defaultValue);

  var label = createLabel(labelText, select);
  label.appendTo(domElement);

  this.focus = delegateTo(select, 'focus');
  this.getValue = delegateTo(select, 'value');

  this.setValue = function(value) {
    select.value = value;
  };

  this.onChange = function(callback) {
    select.addEventListener('change', function(event) {
      callback(event.target.value);
    });
  };
}

function createElement() {
  var style = {
    display: 'block'
  };

  return createDOMElement('labeled-select-field', style);
}

function createSelect(options, defaultValue) {
  var style = {
    width: TextFieldInput.STYLE.width,
    font: TextFieldInput.STYLE.font,
    position: 'absolute',
    marginTop: '-2px'
  };

  var select = createDOMElement('select', style);

  options.forEach(appendOptionTo(select));

  if (defaultValue !== undefined) select.value = defaultValue;

  return select;
}

function createLabel(labelText, select) {
  var style = {
    marginBottom: '6px'
  };

  var label = new FieldLabel(labelText, [select]);

  label.setStyle(style);

  return label;
}

function appendOptionTo(domElement) {
  return function(optionText) {
    var item = _.isPlainObject(optionText) ?
      createOptgroup(optionText) :
      createOption(optionText);

    domElement.appendChild(item);
  };
}

function createOptgroup(group) {
  var optgroup = createDOMElement('optgroup');
  optgroup.label = group.optgroupLabel;
  group.options.forEach(appendOptionTo(optgroup));
  return optgroup;
}

function createOption(optionText) {
  var option = createDOMElement('option');
  option.textContent = optionText;
  return option;
}
