import {WidgetRole} from "app/widgets/WidgetRole";
import {LabeledContainer} from "app/widgets/LabeledContainer";
import {LabeledCheckbox} from "app/widgets/LabeledCheckbox";
import {createDOMElement} from "app/utils/createDOMElement";

export function ActivityStep(stepId, description) {
  var domElement = createElement(stepId);
  WidgetRole.apply(this, [domElement]);

  var container = createContainer(description);
  var checkbox = new LabeledCheckbox('completat');

  container.setChildWidgets([checkbox]);
  container.appendTo(domElement);

  this.getValue = function() {
    return {
      'step-id': stepId,
      'is-completed': checkbox.getValue()
    };
  };

  this.setValue = function(value) {
    checkbox.setValue(value['is-completed']);
  };
}

function createElement(stepId) {
  var style = {};
  var attributes = {
    'step-id': stepId
  };

  return createDOMElement('activity-step', style, attributes);
}

function createContainer(label) {
  return new LabeledContainer(label);
}
