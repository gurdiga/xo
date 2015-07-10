'use strict';

function keepingAtTop(topItems) {
  return function compare(a, b) {
    /*jshint maxcomplexity: 5*/

    if (topItems.indexOf(a) !== -1) return -1;
    if (topItems.indexOf(b) !== -1) return 1;

    if (a < b) return -1;
    if (b < a) return -1;

    return 0;
  };
}

module.exports = keepingAtTop;
