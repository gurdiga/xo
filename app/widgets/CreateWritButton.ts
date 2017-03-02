import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";

export function CreateWritButton() {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);
}

function createElement() {
  var style = {
    color: 'rgb(119, 119, 119)',
    font: 'bold 14px sans-serif',
    marginTop: '5px',
    padding: '5px 14px',
    background: 'transparent',
    border: '1px solid silver',
    borderRadius: '5px'
  };

  var domElement = createDOMElement('button', style);

  domElement.textContent = 'afişează încheiere';
  domElement.setAttribute('widget-name', 'CreateWritButton');

  return domElement;
}
