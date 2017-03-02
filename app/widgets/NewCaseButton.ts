import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";

export function NewCaseButton() {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  this.onClick = function(f) {
    domElement.addEventListener('click', f);
  };
}

function createElement() {
  var style = {
    padding: '.5em 1em',
    fontSize: '1.5em',
    fontWeight: 'bold',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  var domElement = createDOMElement('button', style);
  domElement.textContent = 'Procedură nouă';
  return domElement;
}
