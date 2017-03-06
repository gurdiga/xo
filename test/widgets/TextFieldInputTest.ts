import {TextFieldInput} from "app/widgets/TextFieldInput";
import {assert, getWidgetDOMElement} from "test/helper";

describe('TextFieldInput', function() {
  'use strict';

  var fieldValue, textFieldInput, domElement;

  before(function() {
    fieldValue = 'some text';
    textFieldInput = new TextFieldInput(fieldValue);
    domElement = getWidgetDOMElement(textFieldInput);
  });

  it('reflects the initial value', function() {
    assert.equal(domElement.value, fieldValue, 'getValue() returns <input/>’s value');
    assert.equal(domElement.value, textFieldInput.getValue(), 'getValue() returns <input/>’s value');

    textFieldInput.setValue('new value');
    assert.equal(domElement.value, 'new value', 'setValue() sets <input/>’s value');
    assert.equal(textFieldInput.getValue(), 'new value', 'getValue() returns the new value');
  });

  it('can be focused', function() {
    document.body.appendChild(domElement);

    textFieldInput.focus();
    assert.equal(document.activeElement, domElement, 'it focuses the <input>');

    document.body.removeChild(domElement);
  });

  it('gets an outline on focus', function() {
    assert.isTrue(domElement.hasAttribute('has-on-focus-effect'), 'is outlined on focus');
  });

  it('can be asked to setStyle', function() {
    var style = {
      'color': 'red'
    };

    textFieldInput.setStyle(style);
    assert.equal(domElement.style.color, style.color, 'has the color appropriately set');
  });
});
