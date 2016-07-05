describe('emptyDOMElement', function() {
  'use strict';

  var emptyDOMElement = window.App.Utils.emptyDOMElement;

  it('removes all the children from the given DOM element', function() {
    var domElement = document.createElement('div');

    domElement.innerHTML = '<br/><p>Hello <b>world</b>!</p>';
    emptyDOMElement(domElement);

    assert.equal(domElement.children.length, 0, 'removed all the children');
  });

  it('throws a meaningful error when called with a non-element argument', function() {
    assert.throws(function callingWithNonElement() {
      emptyDOMElement(42);
    },
      'emptyDOMElement expects the argument to be a DOM element'
    );

  });

  var assert = window.TestHelpers.assert;

});
