describe('DateField', function() {
  'use strict';

  var DateField = window.App.Widgets.DateField;

  var sandbox, defaultFieldValue, additionalStyle, dateField, domElement, input;

  before(function() {
    sandbox = document.createElement('div');
    defaultFieldValue = 'some date';
    additionalStyle = {
      width: '100px'
    };

    dateField = new DateField(defaultFieldValue, additionalStyle);
    dateField.appendTo(sandbox);

    domElement = sandbox.firstChild;
    assert.equal(domElement.tagName, 'DATE-FIELD', 'has the appropriate tag name');

    input = domElement.querySelector('input');
  });

  it('accepts and tells its value', function() {
    assert.equal(input.value, defaultFieldValue, 'has the value as passed into constructor');
    assert.equal(input.style.width, additionalStyle.width, 'accepts the additional style passed into constructor');

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
    document.body.appendChild(sandbox);

    dateField.focus();
    assert.equal(document.activeElement, input, 'focuses its <input>');

    document.body.removeChild(sandbox);
  });

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var assert = window.TestHelpers.assert;
});
