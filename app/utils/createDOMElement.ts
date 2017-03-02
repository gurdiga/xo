import * as _ from "lodash";
import {addStyle} from "app/utils/addStyle";
import {assert} from "app/utils/assert";

export function createDOMElement(tagName, style, attributes) {
  /* eslint complexity:0 */
  assert(_.isString(tagName), 'createDOMElement expects the first argument, tagName, to be a DOM element');
  if (style) assert(_.isPlainObject(style), 'createDOMElement expects the second argument, style, to be a hash');
  if (attributes) assert(_.isPlainObject(attributes), 'createDOMElement expects the third argument, attributes, to be a hash');

  var domElement = document.createElement(tagName);

  if (style) addStyle(domElement, style);
  if (attributes) _.each(attributes, setAttribute(domElement));

  return domElement;
}

function setAttribute(domElement) {
  return function(value, name) {
    domElement.setAttribute(name, value);
  };
}
