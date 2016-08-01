describe('LabeledContainer', function() {
  'use strict';

  var LabeledContainer = window.App.Widgets.LabeledContainer;

  var labeledContainer, domElement, label, labelText;

  beforeEach(function() {
    labelText = 'A generic container';
    labeledContainer = new LabeledContainer(labelText);
    domElement = getWidgetDOMElement(labeledContainer);
    label = domElement.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'FIELDSET', 'has the appropriate tag name');
    assert.equal(label.textContent, labelText, 'has the appropriate label text');
  });

  it('has the appropriate default style', function() {
    assert.equal(domElement.style.border, 'none', 'has no border');
    assert.equal(domElement.style.font, 'inherit', 'inherits its font');
    assert.equal(domElement.style.padding, '0px', 'has no padding');

    assert.equal(label.style.font, 'inherit', 'label inherits its font');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
