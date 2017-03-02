import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";
import {resetChildren} from "app/utils/resetChildren";

export function ActivityDetailsSection() {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  this.setChildWidgets = function(childWidgets) {
    resetChildren(domElement, childWidgets);
  };
}

function createElement() {
  var style = {};
  var attributes = {
    role: 'region'
  };

  return createDOMElement('ACTIVITY-DETAILS-SECTION', style, attributes);
}
