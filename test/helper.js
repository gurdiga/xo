(function() {
  'use strict';

  /*eslint new-cap:0*/
  window.TapeBrowserConsoleDotReporter(window.tape);

  window.TestHelpers = {};

  window.TestHelpers.simulateEscapeKey = function(domElement) {
    domElement = domElement || document.body;

    var keydownEvent = new Event('keydown');
    keydownEvent.keyCode = 27;
    domElement.dispatchEvent(keydownEvent);
  };

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

  window.TestHelpers.getValue = function(fieldElement) {
    return fieldElement.querySelector('input, textarea, select').value;
  };

  window.TestHelpers.getTagName = function(fieldElement) {
    return fieldElement.tagName.toLowerCase();
  };

  window.TestHelpers.assertSectionField = function(sandbox, fieldValues, t) {
    var fieldElements = sandbox.querySelectorAll('fieldset>:not(legend)');

    return function(field, i) {
      var fieldElement = fieldElements[i];

      var expectedLabel   = field[0];
      var expectedTagName = field[1];
      var internalName    = field[2];
      var expectedValue   = fieldValues[internalName];

      var orderNo = i + 1;
      var messagePrefix = 'field #' + orderNo + ' — ' + internalName + ' — ';

      t.equal(getLabel(fieldElement),   expectedLabel,   messagePrefix + 'has the appropriate label');
      t.equal(getTagName(fieldElement), expectedTagName, messagePrefix + 'is of the appropriate kind');
      t.equal(getValue(fieldElement),   expectedValue,   messagePrefix + 'is prefilled with the appropriate value');
    };
  };

  var getLabel = window.TestHelpers.getLabel;
  var getTagName = window.TestHelpers.getTagName;
  var getValue = window.TestHelpers.getValue;

}());
