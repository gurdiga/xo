describe('createEnumArray', function() {
  'use strict';

  var createEnumArray = window.App.Utils.createEnumArray;

  it('works', function() {
    var hash = {
      K1: 'v1',
      K2: 'v2',
      K3: 'v3'
    };

    var ENUM = createEnumArray(hash);

    assert(ENUM instanceof Array, 'returns an array');
    assert.deepEqual(ENUM, _.values(hash), 'the returned array contains values from the given hash');

    assert.equal(ENUM.K1, 'v1', 'the array gets properties as per hash');
    assert.equal(ENUM.K2, 'v2', 'the array gets properties as per hash');
    assert.equal(ENUM.K3, 'v3', 'the array gets properties as per hash');
    assert.deepEqual(Object.keys(ENUM), ['0', '1', '2'], 'the additional properties are not enumerable');
  });

  var assert = window.TestHelpers.assert;
});
