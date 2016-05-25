(function() {
  'use strict';

  /*eslint new-cap:0*/
  window.TapeBrowserConsoleDotReporter(window.tape);

  window.TestHelpers = {};

  window.TestHelpers.simulateEscapeKey = function(domElement) {
    domElement = domElement || document.body;

    simulateKeyDown(domElement, 'Escape');
  };

  function simulateKeyDown(domElement, keyName) {
    var keydownEvent = new Event('keydown');
    keydownEvent.code = keyName;
    domElement.dispatchEvent(keydownEvent);
  }

  window.TestHelpers.simulateKeyDown = simulateKeyDown;

  window.TestHelpers.getOptionTexts = function getOptionTexts(element) {
    var tagName = element.tagName;
    var elements = element.querySelectorAll(tagName + '>option, ' + tagName + '>optgroup');

    return [].map.call(elements, function(element) {
      if (element.tagName === 'OPTION') {
        return element.text;
      } else if (element.tagName === 'OPTGROUP') {
        return {
          optgroupLabel: element.label,
          options: getOptionTexts(element)
        };
      } else {
        throw new Error('TestHelpers.getOptionTexts: found unknown element: ' + element.tagName);
      }
    });
  };

  window.TestHelpers.getLabel = function(fieldElement) {
    return fieldElement.querySelector('label>span').textContent;
  };

  window.TestHelpers.getDOMValue = function getDOMValue(fieldElement) {
    return fieldElement.querySelector('input, textarea, select').value;
  };

  window.TestHelpers.createSpy = function() {
    return function spy() {
      spy.calls = spy.calls || [];
      spy.calls.push({ args: _.toArray(arguments) });
      spy.executed = true;

      spy.reset = function() {
        spy.calls = [];
        spy.executed = false;
      };
    };
  };

  window.TestHelpers.assert = window.chai.assert;

}());
