'use strict';

var keepingAtTop = require('utils/keepingAtTop');
var test = tape;

test('keepingAtTop', function(t) {
  var a = [1, 2, 3, 4, 5, 6];

  t.deepEqual(a.sort(keepingAtTop([2, 4])), [2, 4, 1, 3, 5, 6], 'keeps the given items at the top');

  t.end();
});
