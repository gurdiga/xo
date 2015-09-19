(function() {
  'use strict';

  window.TapeBrowserConsoleDotReporter(window.tape);

  window.simulateEscapeKey = function simulateEscapeKey(domElement) {
    domElement = domElement || document.body;

    var keydownEvent = new Event('keydown');
    keydownEvent.keyCode = 27;
    domElement.dispatchEvent(keydownEvent);
  };

}());
