import * as _ from "lodash";
import {makeShy} from "app/utils/makeShy";
import {createDOMElement} from "app/utils/createDOMElement";
import {assert} from "app/utils/assert";

export function makeRemovable(domElement, onRemove, additionalButtonStyle) {
  assert(_.isElement(domElement), 'makeRemovable: the first argument is required to be a DOM element');
  assert(_.isFunction(onRemove), 'makeRemovable: the second argument is required to be a function to call back on remove');

  domElement.setAttribute('removable', '');
  domElement.style.position = 'relative';

  var button = createButton(additionalButtonStyle);

  button.addEventListener('click', function() {
    domElement.parentNode.removeChild(domElement);
    onRemove();
  });

  domElement.appendChild(button);
}

function createButton(additionalStyle) {
  var style = _.extend({}, buttonStyle, additionalStyle);
  var button = createDOMElement('button', style);
  button.style.left = '-' + (parseInt(button.style.fontSize, 10) + 2);

  button.textContent = '×';
  button.title = 'Elimină';
  button.setAttribute('type', 'remove');

  makeShy(button);

  return button;
}

var buttonStyle = {
  position: 'absolute',
  top: '0px',
  padding: '2px 5px',
  borderWidth: '0px',
  backgroundColor: 'transparent',
  fontSize: '14px',
  fontFamily: 'sans-serif'
};
