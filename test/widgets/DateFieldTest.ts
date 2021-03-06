import {DateField} from "app/widgets/DateField";
import {DateFieldInput} from "app/widgets/DateFieldInput";
import {assert, getWidgetDOMElement} from "test/helper";

describe('DateField', function() {
  'use strict';

  var defaultValue, dateField, domElement, input;

  before(function() {
    defaultValue = 'some date';
    dateField = new DateField(defaultValue);
    domElement = getWidgetDOMElement(dateField);

    assert.equal(domElement.tagName, 'DATE-FIELD', 'has the appropriate tag name');

    input = domElement.querySelector('input');
  });

  it('accepts and tells its value', function() {
    assert.equal(input.value, defaultValue, 'has the value as passed into constructor');

    var newValue = 'some other value';
    input.value = newValue;
    assert.equal(dateField.getValue(), newValue, '#getValue() returns input’s value');
  });

  it('has a date picker button', function() {
    var button = domElement.querySelector('button');
    assert.equal(button.title, 'Deschide calendarul', 'has the appropriate tooltip');

    var datePickerElement;

    button.click();
    datePickerElement = domElement.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert(datePickerElement, 'displays the date picker on click');

    button.click();
    datePickerElement = domElement.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
    assert(!datePickerElement, 'hides the date picker clicking the second time');
  });

  it('is focusable', function() {
    document.body.appendChild(domElement);

    dateField.focus();
    assert.equal(document.activeElement, input, 'focuses its <input>');

    document.body.removeChild(domElement);
  });

  it('can be asked to setStyle', function() {
    var style = {
      'background-color': 'red'
    };

    dateField.setStyle(style);

    var innerFieldDomElement = domElement.firstChild;

    assert.equal(innerFieldDomElement.style.backgroundColor, style['background-color'],
      'sets the background color appropriately');
  });
});
