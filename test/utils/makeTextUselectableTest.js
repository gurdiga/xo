describe('makeTextUselectable', function() {
  'use strict';

  var makeTextUselectable = window.App.Utils.makeTextUselectable;

  var domElement;

  beforeEach(function() {
    domElement = document.createElement('button');
  });

  it('works', function() {
    makeTextUselectable(domElement);

    assert.equal(domElement.style['-webkit-touch-callout'], 'none', 'Webkit touch covered');
    assert.equal(domElement.style['-webkit-user-select'], 'none', 'Webkit covered');
    assert.equal(domElement.style['-moz-user-select'], 'none', 'Mozilla covered');
    assert.equal(domElement.style['-ms-user-select'], 'none', 'IE covered');
    assert.equal(domElement.style['user-select'], 'none', 'W3C covered');
  });

  it('validates input', function() {
    assert.throws(function() {
      makeTextUselectable(42);
    },
      /makeTextUselectable expects the argument to be a DOM element/,
      'Throws a meaningful error when the argument is not a DOM element'
    );
  });

  var assert = window.TestHelpers.assert;
});
