import * as _ from "lodash";
import {assert} from "app/utils/assert";
import {ifKey} from "app/utils/ifKey";

export function hideOnEscapeOrOutsideClick(thing) {
  assert(_.isElement(thing) || hasHideMethod(thing),
    'hideOnEscapeOrOutsideClick: argument is expected to be a DOM element or a thing that has a hide method');

  if (_.isElement(thing)) thing = new HideableDOMElement(thing);

  document.body.addEventListener('keydown', ifKey('Escape', thing.hide));
  document.body.addEventListener('click', thing.hide);
}

function hasHideMethod(thing) {
  return thing && typeof thing.hide === 'function';
}

function HideableDOMElement(domElement) {
  this.hide = function() {
    domElement.style.display = 'none';
  };
}
