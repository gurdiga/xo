import * as _ from "lodash";
import {assert} from "app/utils/assert";

export function emptyDOMElement(domElement) {
  assert(_.isElement(domElement), 'emptyDOMElement expects the argument to be a DOM element');

  domElement.innerHTML = '';
}
