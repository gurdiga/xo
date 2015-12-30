(function() {
  'use strict';

  var LabeledDateField = window.App.Widgets.LabeledDateField;

  tape('LabeledDateField', function(t) {
    var sandbox = document.createElement('div');

    var labelText = 'My LabeledDateField component';
    var fieldValue = '22.03.2015';

    var labeledDateField = new LabeledDateField(labelText, fieldValue);
    labeledDateField.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    var label = domElement.firstChild;
    var input = domElement.querySelector('input');

    t.equal(domElement.tagName, 'LABELED-DATE-FIELD', 'has the appropriate tag name');

    t.test('label', function(t) {
      t.equal(label.getAttribute('widget'), 'FieldLabel', 'is a FieldLabel');
      t.equal(label.textContent, labelText, 'has the appropriate text');

      t.end();
    });

    t.test('field', function(t) {
      var field = label.children[1];
      t.equal(field.tagName, 'DATE-FIELD', 'is a <date-field/>');

      t.end();
    });

    t.test('value', function(t) {
      t.equal(input.value, fieldValue, 'has the passed in value');
      t.equal(labeledDateField.getValue(), fieldValue, 'getValue() returns the appropriate value');

      t.end();
    });

    t.test('focusability', function(t) {
      document.body.appendChild(sandbox);

      labeledDateField.focus();
      t.equal(document.activeElement, input);

      document.body.removeChild(sandbox);
      t.end();
    });

    t.end();
  });

}());
