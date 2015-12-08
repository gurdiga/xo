(function() {
  'use strict';

  var TextFieldInput = window.App.Widgets.TextFieldInput;
  var test = tape;

  var sandbox = document.createElement('div');
  var fieldValue = 'some text';

  var textFieldInput = new TextFieldInput(fieldValue);
  textFieldInput.appendTo(sandbox);

  test('TextFieldInput', function(t) {
    t.test('behavior', function(t) {
      var input = sandbox.querySelector('input');
      t.equal(input.value, textFieldInput.getValue(), 'getValue() returns <input/>’s value');

      var newValue = 'new value';
      textFieldInput.setValue(newValue);
      t.equal(input.value, newValue, 'setValue() sets <input/>’s value');

      t.end();
    });

    t.end();
  });

}());
