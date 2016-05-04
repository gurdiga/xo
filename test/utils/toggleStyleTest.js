(function() {
  'use strict';

  tape('toggleStyle', function(t) {
    var domElement = document.createElement('div');
    var initialStyle = {
      'borderColor': 'black'
    };

    addStyle(domElement, initialStyle);

    var style = {
      borderColor: 'blue'
    };

    var onEventName = 'focusin';
    var offEventName = 'focusout';

    toggleStyle(domElement, style, onEventName, offEventName);

    domElement.dispatchEvent(new Event(onEventName));
    t.equal(domElement.style.borderColor, style.borderColor, 'applies the given style on the “on” event');

    domElement.dispatchEvent(new Event(offEventName));
    t.equal(domElement.style.borderColor, initialStyle.borderColor, 'returns the initial style on the “off” event');

    t.end();
  });

  var toggleStyle = window.App.Utils.toggleStyle;
  var addStyle = window.App.Utils.addStyle;

}());
