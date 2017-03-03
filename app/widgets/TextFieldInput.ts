import {WidgetRole} from "app/widgets/WidgetRole";
import {createDOMElement} from "app/utils/createDOMElement";
import {delegateTo} from "app/utils/delegateTo";
import {addFocusEffect} from "app/utils/addFocusEffect";

export function TextFieldInput(value) {
  var domElement = createElement(value);
  WidgetRole.apply(this, [domElement]);

  this.getValue = delegateTo(domElement, 'value');

  this.setValue = function(value) {
    domElement.value = value;
  };

  this.focus = delegateTo(domElement, 'focus');

  this.precedeWith = function(elementToInsert) {
    domElement.parentNode.insertBefore(elementToInsert, domElement);
  };
}

function createElement(value) {
  var domElement = createDOMElement('input', TextFieldInput.STYLE);

  if (value) domElement.value = value;

  addFocusEffect(domElement, {
    boxShadow: '0 0 3px 2px #b5d5ff'
  });

  return domElement;
}

TextFieldInput.STYLE = {
  color: 'black',
  padding: '4px',
  font: 'bold 14px sans-serif',
  width: '200px',
  backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
  backgroundPosition: '0 -4px',
  borderRadius: '2px',
  borderWidth: '0px',
  outlineWidth: '0px'
};
