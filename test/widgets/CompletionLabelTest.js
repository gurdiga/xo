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
    assert.equal(timeElement.getAttribute('datetime'), now.toISOString(),
      '<time>’s “datetime” attribute contains ISO 8601-formatted current date');
  });

  it('can tell its data', function() {
    var data = completionLabel.getData();
    assert.deepEqual(data, '2000-11-23T17:15:28.484Z', 'returns the ISO 8601-formatted timestamp');
  });

  it('can remove its DOM element from its container', function() {
    var container = createDOMElement('div');
    completionLabel.appendTo(container);
    completionLabel.remove();
    assert(container.children.length === 0, 'container is empty');
  });

  var createDOMElement = window.App.Utils.createDOMElement;

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;

  var sinon = window.sinon;
});
