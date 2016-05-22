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
    // TODO
  });

  var assert = window.TestHelpers.assert;
});
