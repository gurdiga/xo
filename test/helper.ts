import * as _ from "lodash";
import {createDOMElement} from "app/utils/createDOMElement";

export {assert} from "chai";
export {createDOMElement} from "app/utils/createDOMElement";

export function simulateEscapeKey(domElement) {
  domElement = domElement || document.body;

  simulateKeyDown(domElement, 'Escape');
};

export function simulateKeyDown(domElement, keyName) {
  var keydownEvent = new Event('keydown');
  keydownEvent.code = keyName;
  domElement.dispatchEvent(keydownEvent);
}

export function getOptionTexts(element) {
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
}

export function getLabel(fieldElement) {
  return fieldElement.querySelector('label>span').textContent;
}

export function getDOMValue(fieldElement) {
  return fieldElement.querySelector('input, textarea, select').value;
}

export function createSpy() {
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

export function getWidgetDOMElement(widget) {
  var sandbox = createDOMElement('div');

  widget.appendTo(sandbox);

  return sandbox.firstChild;
};
