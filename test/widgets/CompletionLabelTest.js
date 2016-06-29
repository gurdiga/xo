describe('CompletionLabel', function() {
  'use strict';

  var CompletionLabel = window.App.Widgets.CompletionLabel;

  var completionLabel, domElement, now, clock;

  beforeEach(function() {
    now = new Date('2000-11-23T17:15:28.484Z');
    clock = sinon.useFakeTimers(now.getTime());

    completionLabel = new CompletionLabel();
    domElement = getWidgetDOMElement(completionLabel);
  });

  afterEach(function() {
    clock.restore();
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'COMPLETION-LABEL', 'has the appropriate tag name');

    var timeElement = domElement.querySelector('time');
    assert(timeElement, 'has a <time> element');
    assert.equal(timeElement.textContent, '23.11.2000 19:15', 'has the appropriate text content');
    assert.equal(timeElement.getAttribute('timestamp'), now.toISOString(),
      '<time>’s “timestamp” attribute contains ISO 8601-formatted current date');
  });

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;

  var sinon = window.sinon;
});
