describe('CompletionLabel', function() {
  'use strict';

  var CompletionLabel = window.App.Widgets.CompletionLabel;

  var completionLabel, domElement;

  beforeEach(function() {
    completionLabel = new CompletionLabel();
    domElement = getWidgetDOMElement(completionLabel);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'COMPLETION-LABEL', 'has the appropriate tag name');

    var timeElement = domElement.querySelector('time');
    assert(timeElement, 'has a <time> element');
    assert(timeElement.getAttribute('timestamp'), 'there is a “timestamp” attribute on the <time> element');
  });

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;
});
