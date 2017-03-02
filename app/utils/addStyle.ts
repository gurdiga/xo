import * as _ from "lodash";
import {assert} from "app/utils/assert";

export function addStyle(domElement, style) {
  assert(_.isElement(domElement), 'addStyle expects the first argument to be a DOM element');
  assert(_.isPlainObject(style), 'addStyle expects the second argument to be a hash');

  _.extend(domElement.style, style);
}
