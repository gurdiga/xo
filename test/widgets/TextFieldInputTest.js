describe('TextFieldInput', function() {
  'use strict';

  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var sandbox, fieldValue, textFieldInput, input;

  before(function() {
    sandbox = document.createElement('div');
    fieldValue = 'some text';

    textFieldInput = new TextFieldInput(fieldValue);
    textFieldInput.appendTo(sandbox);

    input = sandbox.querySelector('input');
  });

  it('works', function() {
    assert.equal(input.value, textFieldInput.getValue(), 'getValue() returns <input/>’s value');

    var newValue = 'new value';
    textFieldInput.setValue(newValue);
    assert.equal(input.value, newValue, 'setValue() sets <input/>’s value');
  });

  describe('focusability', function() {
    beforeEach(function() {
      document.body.appendChild(sandbox);
    });

    it('can be focused', function() {
      textFieldInput.focus();
      assert.equal(document.activeElement, input, 'it focuses the <input>');
    });

    afterEach(function() {
      document.body.removeChild(sandbox);
    });
  });

  it('gets an outline on focus', function() {
    assert.equal(input.hasAttribute('has-on-focus-effect'), true,
      'is outlined on focus');
  });

  var assert = window.TestHelpers.assert;
});
