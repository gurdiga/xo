(function() {
  'use strict';

  window.TapeBrowserConsoleDotReporter(window.tape);

  window.TestHelpers = {};

  window.TestHelpers.simulateEscapeKey = function(domElement) {
    domElement = domElement || document.body;

    var keydownEvent = new Event('keydown');
    keydownEvent.keyCode = 27;
    domElement.dispatchEvent(keydownEvent);
  };

  window.TestHelpers.getOptionTexts = function(selectDomElement) {
    var optionDomElements = selectDomElement.querySelectorAll('select option');

    return [].map.call(optionDomElements, function(option) {
      return option.textContent;
    });
  };

  window.TestHelpers.getLabel = function(field) {
    return field.querySelector('label>span').textContent;
  };

  window.TestHelpers.getValue = function(field) {
    return field.querySelector('input, textarea, select').value;
  };

  window.TestHelpers.getTagName = function(field) {
    return field.tagName.toLowerCase();
  };

}());
