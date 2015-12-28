(function() {
  'use strict';

  var rMap = window.App.Utils.rMap;

  tape('rMap', function(t) {
    t.test('for non structured values', function(t) {
      t.equal(rMap('toString', 42), '42', 'returns the result of the given method call');
      t.equal(rMap('trim', '  ABC  '), 'ABC', 'returns the result of the given method call');

      t.end();
    });

    t.test('for arrays', function(t) {
      t.deepEqual(rMap('toString', [
        42,
        new Date(1441744405280),
        true
      ]), [
        '42',
        'Tue Sep 08 2015 23:33:25 GMT+0300 (EEST)',
        'true'
      ], 'returns an array containing the results of the given method call applied to each member');

      t.end();
    });

    t.test('for plain JS object', function(t) {
      t.deepEqual(rMap('toString', {
        'a-number': 42,
        'a-date': new Date(1441744405280),
        'a-boolean': true
      }), {
        'a-number': '42',
        'a-date': 'Tue Sep 08 2015 23:33:25 GMT+0300 (EEST)',
        'a-boolean': 'true'
      }, 'returns a plain JS object with the same keys, ' +
        'but with values replaced by calling the given method on the original values');

      t.end();
    });

    t.test('for nested structures', function(t) {
      t.deepEqual(rMap('toString', [{
        'a-number': 42,
        'a-date': new Date(1441744405280),
        'a-boolean': true,
        'an-array': [function() {}, 0x12, false]
      }]), [{
        'a-number': '42',
        'a-date': 'Tue Sep 08 2015 23:33:25 GMT+0300 (EEST)',
        'a-boolean': 'true',
        'an-array': ['function () {}', '18', 'false']
      }], 'recurses');

      t.end();
    });

    t.end();
  });

}());
