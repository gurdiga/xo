import {appendWidgets} from "app/utils/appendWidgets";
import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";
import {getStylerOf} from "app/utils/getStylerOf";
import {resetChildren} from "app/utils/resetChildren";

export function LabeledContainer(labelText) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var label = createLabel(labelText);
  domElement.appendChild(label);

  this.setLabelStyle = getStylerOf(label);

  this.setChildWidgets = function(childWidgets) {
    resetChildren(domElement, [label].concat(childWidgets));
  };

  this.appendWidgets = function(childWidgets) {
    appendWidgets(childWidgets).to(domElement);
  };
}

function createElement() {
  var style = {
    'border': 'none',
    'font': 'inherit',
    'padding': '0px'
  };

  var attributes = {
    'widget-name': 'LabeledContainer'
  };

  return createDOMElement('fieldset', style, attributes);
}

function createLabel(labelText) {
  var style = {
    'font': 'inherit'
  };

  var label = createDOMElement('legend', style);

  label.textContent = labelText;

  return label;
}
