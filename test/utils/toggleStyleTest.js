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

  var addStyle = window.App.Utils.addStyle;

  var assert = window.TestHelpers.assert;

});
