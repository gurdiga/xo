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

  it('has the checkbox appropriately styled', function() {
    assert.equal(checkbox.style.verticalAlign, '1px', 'vertically aligns perfectly with the label');
  });

  it('can tell its value', function() {
    assert.equal(labeledCheckbox.getValue(), checkbox.checked, 'returns the checked state of its checkbox');
  });

  it('can be setValue()', function() {
    labeledCheckbox.setValue(true);
    assert.equal(checkbox.checked, true, 'can be checked');

    labeledCheckbox.setValue(false);
    assert.equal(checkbox.checked, false, 'can be unchecked');
  });

  it('announces its changes', function() {
    var callback = sinon.spy();

    labeledCheckbox.setValue(false);
    labeledCheckbox.onChange(callback);
    checkbox.click();

    assert(callback.called, 'calls the given callback');
    assert(callback.calledWith(true), 'the callback is passed the current state of the checkbox');
  });

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;
  var sinon = window.sinon;
});
