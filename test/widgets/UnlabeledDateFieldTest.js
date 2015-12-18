(function() {
  'use strict';

  var UnlabeledDateField = window.App.Widgets.UnlabeledDateField;
  var test = tape;

  var sandbox = document.createElement('div');
  var defaultFieldValue = 'some date';
  var additionalStyle = {
    width: '100px'
  };
  var unlabeledDateField = new UnlabeledDateField(defaultFieldValue, additionalStyle);
  unlabeledDateField.appendTo(sandbox);

  test('UnlabeledDateField', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'UNLABELED-DATE-FIELD', 'has the appropriate tag name');

    t.test('input and its value', function(t) {
      var input = domElement.querySelector('input');

      t.ok(input, 'exists');
      t.equal(input.value, defaultFieldValue, 'has the value as passed into constructor');
      t.equal(input.style.width, additionalStyle.width, 'accepts the additional style passed into constructor');

      var newValue = 'some other value';
      input.value = newValue;
      t.equal(unlabeledDateField.getValue(), newValue, '#getValue() returns input’s value');

      t.end();
    });

    t.test('date picker button', function(t) {
      var button = domElement.querySelector('button');

      t.ok(button, 'exists');
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

    t.end();
  });

  var DateFieldInput = window.App.Widgets.DateFieldInput;

}());
