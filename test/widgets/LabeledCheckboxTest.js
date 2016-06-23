describe('LabeledCheckbox', function() {
  'use strict';

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  var labeledCheckbox, labelText, domElement;

  beforeEach(function() {
    labelText = 'I do agree';
    labeledCheckbox = new LabeledCheckbox(labelText);
    domElement = getWidgetDOMElement(labeledCheckbox);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LABELED-CHECKBOX', 'has the appropriate tag name');

    var label = domElement.firstChild;
    assert.equal(label.tagName, 'LABEL', 'it has an implicitly bound label');
    assert.equal(label.textContent, labelText, 'label has the appropriate text');

    var checkbox = label.firstChild;
    assert.equal(checkbox.tagName, 'INPUT', 'it has an input inside the label');
    assert.equal(checkbox.type, 'checkbox', 'the input inside the label has the type of checkbox');
  });

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;
});
