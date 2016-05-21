describe('toggleStyle', function() {
  'use strict';

  var toggleStyle = window.App.Utils.toggleStyle;
  var domElement, initialStyle;

  beforeEach(function() {
    domElement = document.createElement('div');
    initialStyle = {
      'borderColor': 'black'
    };

    addStyle(domElement, initialStyle);
  });

  it('works', function() {
    var style = {
      borderColor: 'blue'
    };

    var onEventName = 'focusin';
    var offEventName = 'focusout';

    toggleStyle(domElement, style, onEventName, offEventName);

    domElement.dispatchEvent(new Event(onEventName));
    assert.equal(domElement.style.borderColor, style.borderColor, 'applies the given style on the “on” event');

    domElement.dispatchEvent(new Event(offEventName));
    assert.equal(domElement.style.borderColor, initialStyle.borderColor, 'returns the initial style on the “off” event');
  });

  it('validates input', function() {
    var domElement = createDOMElement('div');
    var style = { color: 'red' };

    assert.throws(function() {
      toggleStyle(42);
    },
      /toggleStyle expects the first argument to be a DOM element/,
      'Throws a meaningful error when the first argument is not a DOM element'
    );

    assert.throws(function() {
      toggleStyle(domElement, 42);
    },
      /toggleStyle expects the second argument, style, to be a hash/,
      'Throws a meaningful error when the second argument, style, is not a hash'
    );

    assert.throws(function() {
      toggleStyle(domElement, style, 42);
    },
      /toggleStyle expects the third argument, onEventName, to be a string/,
      'Throws a meaningful error when the third argument, onEventName, is not a string'
    );

    assert.throws(function() {
      toggleStyle(domElement, style, 'mouseenter', 42);
    },
      /toggleStyle expects the third argument, offEventName, to be a string/,
      'Throws a meaningful error when the third argument, offEventName, is not a string'
    );
  });

  var addStyle = window.App.Utils.addStyle;
  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;

});
