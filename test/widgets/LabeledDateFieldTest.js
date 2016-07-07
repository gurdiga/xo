describe('LabeledDateField', function() {
  'use strict';

  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var labelText, fieldValue, labeledDateField, domElement, label, input;

  before(function() {
    labelText = 'My LabeledDateField component';
    fieldValue = '22.03.2015';

    labeledDateField = new LabeledDateField(labelText, fieldValue);

    domElement = getWidgetDOMElement(labeledDateField);
    label = domElement.firstChild;
    input = domElement.querySelector('input');
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LABELED-DATE-FIELD', 'has the appropriate tag name');
  });

  it('has the appropriate label', function() {
    assert.equal(label.getAttribute('widget-name'), 'FieldLabel',
      'has the appropriate “widget-name” attribute');
    assert.equal(label.textContent, labelText, 'has the appropriate text');
  });

  it('has the appropriate field', function() {
    var field = label.children[1];
    assert.equal(field.tagName, 'DATE-FIELD', 'is a <date-field/>');
  });

  it('accepts and tells its value', function() {
    assert.equal(input.value, fieldValue, 'has the passed in value');
    assert.equal(labeledDateField.getValue(), fieldValue, 'getValue() returns the appropriate value');
  });

  it('is cousable', function() {
    var sandbox = domElement.parentNode;
    document.body.appendChild(sandbox);

    labeledDateField.focus();
    assert.equal(document.activeElement, input);

    document.body.removeChild(sandbox);
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
