(function() {
  'use strict';

  tape('hideOnEscapeOrOutsideClick', function(t) {
    t.test('with a DOM element', function(t) {
      var domElement = createDOMElement('div');

      hideOnEscapeOrOutsideClick(domElement);

      domElement.style.display = 'block';
      document.body.dispatchEvent(new Event('click'));
      t.equal(domElement.style.display, 'none', 'hides it when clicking the body');

      domElement.style.display = 'block';
      simulateEscapeKey();
      t.equal(domElement.style.display, 'none', 'hides it when pressing the Esc key');

      t.end();
    });

    t.test('with a thing that has a `hide` method', function(t) {
      var thing = { hide: createSpy() };

      hideOnEscapeOrOutsideClick(thing);

      document.body.dispatchEvent(new Event('click'));
      t.equal(thing.hide.calls.length, 1, 'calls thing’s hide method when clicking the body');

      simulateEscapeKey();
      t.equal(thing.hide.calls.length, 2, 'calls thing’s hide method when pressing the Esc key');

      t.end();
    });

    t.test('input validation', function(t) {
      t.throws(function() {
        hideOnEscapeOrOutsideClick(42);
      },
        /argument is expected to be a DOM element or a thing that has a hide method/,
        'throws a meaningful error when input is invalid'
      );

      t.end();
    });

    t.end();
  });

  var hideOnEscapeOrOutsideClick = window.App.Utils.hideOnEscapeOrOutsideClick;
  var createDOMElement = window.App.Utils.createDOMElement;

  var simulateEscapeKey = window.TestHelpers.simulateEscapeKey;
  var createSpy = window.TestHelpers.createSpy;

}());
