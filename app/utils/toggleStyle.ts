import * as _ from "lodash";
import {addStyle} from "app/utils/addStyle";
import {assert} from "app/utils/assert";

function toggleStyle(domElement, style, onEventName, offEventName) {
  assert(_.isElement(domElement), 'toggleStyle expects the first argument to be a DOM element');
  assert(_.isPlainObject(style), 'toggleStyle expects the second argument, style, to be a hash');
  assert(_.isString(onEventName), 'toggleStyle expects the third argument, onEventName, to be a string');
  assert(_.isString(offEventName), 'toggleStyle expects the third argument, offEventName, to be a string');

  var initialStyle = {};

  for (var propertyName in style) initialStyle[propertyName] = domElement.style[propertyName];

  domElement.addEventListener(onEventName, applyStyle(domElement, style));
  domElement.addEventListener(offEventName, applyStyle(domElement, initialStyle));
}

function applyStyle(domElement, style) {
  return function() {
    addStyle(domElement, style);
  };
}
