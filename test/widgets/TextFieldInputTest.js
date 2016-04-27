(function() {
  'use strict';

  var TextFieldInput = window.App.Widgets.TextFieldInput;

  tape('TextFieldInput', function(t) {
    var sandbox = document.createElement('div');
    var fieldValue = 'some text';

    var textFieldInput = new TextFieldInput(fieldValue);
    textFieldInput.appendTo(sandbox);

    var input = sandbox.querySelector('input');

    t.test('behavior', function(t) {
      t.equal(input.value, textFieldInput.getValue(), 'getValue() returns <input/>’s value');

      var newValue = 'new value';
      textFieldInput.setValue(newValue);
      t.equal(input.value, newValue, 'setValue() sets <input/>’s value');

      t.end();
    });

    t.test('focusability', function(t) {
      document.body.appendChild(sandbox);

      textFieldInput.focus();
      t.equal(document.activeElement, input, 'it focuses the <input>');

      document.body.removeChild(sandbox);
      t.end();
    });

    t.test('outline', function(t) {
      t.equal(input.hasAttribute('has-on-focus-effect'), true,
        'is outlined on focus');

      t.end();
    });

    t.end();
  });

}());
