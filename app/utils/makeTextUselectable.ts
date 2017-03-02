import * as _ from "lodash";
import {addStyle} from "app/utils/addStyle";
import {assert} from "app/utils/assert";

export function makeTextUselectable(domElement) {
  assert(_.isElement(domElement), 'makeTextUselectable expects the argument to be a DOM element');

  addStyle(domElement, {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  });
}
