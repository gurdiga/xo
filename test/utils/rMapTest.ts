import {rMap} from "app/utils/rMap";
import {assert} from "test/helper";

describe('rMap', function() {
  'use strict';

  it('works for non structured values', function() {
    assert.equal(rMap('toString', 42), '42', 'returns the result of the given method call');
    assert.equal(rMap('trim', '  ABC  '), 'ABC', 'returns the result of the given method call');
  });

  it('works for arrays', function() {
    assert.deepEqual(
      rMap('toString', [42, 'A', true]),
      ['42', 'A', 'true'],
      'returns an array containing the results of the given method call applied to each member'
    );
  });

  it('works for NodeList', function() {
    var div = document.createElement('div');

    div.innerHTML =
      '<span>one</span>' +
      '<div>two</div>' +
      '<span>three</span>';

    assert.deepEqual(
      rMap('textContent', div.childNodes),
      ['one', 'two', 'three'],
      'returns an array containing the results of the given method call applied to each child'
    );

    var queryResult = div.querySelectorAll('span, div');

    assert.deepEqual(
      rMap('textContent', queryResult),
      ['one', 'two', 'three'],
      'returns an array containing the results of the given method call applied to each node'
    );
  });

  it('works for plain JS object', function() {
    assert.deepEqual(rMap('toString', {
      'a-number': 42,
      'a-string': 'A',
      'a-boolean': true
    }), {
      'a-number': '42',
      'a-string': 'A',
      'a-boolean': 'true'
    }, 'returns a plain JS object with the same keys, ' +
      'but with values replaced by calling the given method on the original values');
  });

  it('works for nested structures', function() {
    assert.deepEqual(rMap('toString', [{
      'a-number': 42,
      'a-string': 'A',
      'a-boolean': true,
      'an-array': [function() {}, 0x12, false]
    }]), [{
      'a-number': '42',
      'a-string': 'A',
      'a-boolean': 'true',
      'an-array': ['function () {}', '18', 'false']
    }], 'recurses');
  });
});
