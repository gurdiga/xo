import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";

export function ActivityTitle(text) {
  var domElement = createElement(text);
  WidgetRole.apply(this, [domElement]);
}

function createElement(text) {
  var style = {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '16px',
    verticalAlign: '-1px'
  };

  var attributes = {
    role: 'heading'
  };

  var domElement = createDOMElement('activity-title', style, attributes);

  domElement.textContent = text;

  return domElement;
}
