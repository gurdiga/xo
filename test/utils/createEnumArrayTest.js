(function() {
  'use strict';

  var createEnumArray = window.App.Utils.createEnumArray;

  tape.test('createEnumArray', function(t) {
    var hash = {
      K1: 'v1',
      K2: 'v2',
      K3: 'v3'
    };

    var ENUM = createEnumArray(hash);

    t.ok(ENUM instanceof Array, 'returns an array');
    t.deepEqual(ENUM, _.values(hash), 'the returned array contains values from the given hash');

    t.equal(ENUM.K1, 'v1', 'the array gets properties as per hash');
    t.equal(ENUM.K2, 'v2', 'the array gets properties as per hash');
    t.equal(ENUM.K3, 'v3', 'the array gets properties as per hash');
    t.deepEqual(Object.keys(ENUM), ['0', '1', '2'], 'the additional properties are not enumerable');

    t.end();
  });

}());
