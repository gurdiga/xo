import {createDOMElement} from "app/utils/createDOMElement";
import {simulateEscapeKey, createSpy, assert} from "test/helper";

describe('hideOnEscapeOrOutsideClick', function() {
  'use strict';

  var hideOnEscapeOrOutsideClick = window.App.Utils.hideOnEscapeOrOutsideClick;

  it('works with a DOM element', function() {
    var domElement = createDOMElement('div');

    hideOnEscapeOrOutsideClick(domElement);

    domElement.style.display = 'block';
    document.body.dispatchEvent(new Event('click'));
    assert.equal(domElement.style.display, 'none', 'hides it when clicking the body');

    domElement.style.display = 'block';
    simulateEscapeKey();
    assert.equal(domElement.style.display, 'none', 'hides it when pressing the Esc key');
  });

  it('works with a thing that has a `hide` method', function() {
    var thing = { hide: createSpy() };

    hideOnEscapeOrOutsideClick(thing);

    document.body.dispatchEvent(new Event('click'));
    assert.equal(thing.hide.calls.length, 1, 'calls thing’s hide method when clicking the body');

    simulateEscapeKey();
    assert.equal(thing.hide.calls.length, 2, 'calls thing’s hide method when pressing the Esc key');
  });

  it('validates input', function() {
    assert.throws(function() {
      hideOnEscapeOrOutsideClick(42);
    },
      'argument is expected to be a DOM element or a thing that has a hide method'
    );
  });
});
