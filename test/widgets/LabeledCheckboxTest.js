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
  });

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;
});
