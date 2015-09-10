(function() {
  'use strict';

  tape('Array#remove', function(t) {
    var o = {'an': 'object'};
    var array = [1, 2, '3', o];

    array.remove(2);
    t.deepEqual(array, [1, '3', o], 'can remove a number');

    array.remove('3');
    t.deepEqual(array, [1, o], 'can remove a string');

    array.remove(o);
    t.deepEqual(array, [1], 'can remove an object');

    t.end();
  });

}());
