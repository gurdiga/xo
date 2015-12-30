(function() {
  'use strict';

  var DateField = window.App.Widgets.DateField;

  tape('DateField', function(t) {
    var sandbox = document.createElement('div');
    var defaultFieldValue = 'some date';
    var additionalStyle = {
      width: '100px'
    };

    var dateField = new DateField(defaultFieldValue, additionalStyle);
    dateField.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    t.equal(domElement.tagName, 'DATE-FIELD', 'has the appropriate tag name');

    var input = domElement.querySelector('input');

    t.test('input and its value', function(t) {
      t.ok(input, 'exists');
      t.equal(input.value, defaultFieldValue, 'has the value as passed into constructor');
      t.equal(input.style.width, additionalStyle.width, 'accepts the additional style passed into constructor');

      var newValue = 'some other value';
      input.value = newValue;
      t.equal(dateField.getValue(), newValue, '#getValue() returns input’s value');

      t.end();
    });

    t.test('date picker button', function(t) {
      var button = domElement.querySelector('button');
      t.equal(button.title, 'Deschide calendarul', 'has the appropriate tooltip');

      var datePickerElement;

      button.click();
      datePickerElement = domElement.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      t.ok(datePickerElement, 'displays the date picker on click');

      button.click();
      datePickerElement = domElement.querySelector(DateFieldInput.DATE_PICKER_SELECTOR);
      t.ok(!datePickerElement, 'hides the date picker clicking the second time');

      t.end();
    });

    t.test('focusability', function(t) {
      document.body.appendChild(sandbox);

      dateField.focus();
      t.equal(document.activeElement, input, 'focuses its <input>');

      document.body.removeChild(sandbox);
      t.end();
    });

    t.end();
  });

  var DateFieldInput = window.App.Widgets.DateFieldInput;

}());
