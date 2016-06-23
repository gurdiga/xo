describe('LabeledCheckbox', function() {
  'use strict';

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  var labeledCheckbox, labelText, domElement, label, checkbox;

  beforeEach(function() {
    labelText = 'I do agree';
    labeledCheckbox = new LabeledCheckbox(labelText);

    domElement = getWidgetDOMElement(labeledCheckbox);
    label = domElement.firstChild;
    checkbox = label.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LABELED-CHECKBOX', 'has the appropriate tag name');

    assert.equal(label.tagName, 'LABEL', 'it has an implicitly bound label');
    assert.equal(label.textContent, labelText, 'label has the appropriate text');

    assert.equal(checkbox.tagName, 'INPUT', 'it has an input inside the label');
    assert.equal(checkbox.type, 'checkbox', 'the input inside the label has the type of checkbox');
  });

  it('can tell its value', function() {
    assert.equal(labeledCheckbox.getValue(), checkbox.checked);
  });

  it('can be setValue()', function() {
    labeledCheckbox.setValue(true);
    assert.equal(checkbox.checked, true, 'can be checked');

    labeledCheckbox.setValue(false);
    assert.equal(checkbox.checked, false, 'can be unchecked');
  });

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;
});
