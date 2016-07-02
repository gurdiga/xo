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

    assertRendered(domElement, now);
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.fontSize, '12px', 'has a smaller font-size than the main content');
    assert.equal(style.color, 'gray', 'is a little dimmed compared to the main content');
  });

  it('can tell its data', function() {
    var data = completionLabel.getData();
    assert.deepEqual(data, '2000-11-23T17:15:28.484Z', 'returns the ISO 8601-formatted timestamp');
  });

  it('can toggle itself', function() {
    completionLabel.toggle();
    assert(domElement.children.length === 0, 'empties itself on the first call');

    var FIVE_MINUTES = 1000 * 60 * 5;
    clock.tick(FIVE_MINUTES);

    var later = new Date(now.getTime() + FIVE_MINUTES);

    completionLabel.toggle();
    assertRendered(domElement, later);
    assert.equal(completionLabel.getData(), later.toISOString(), 'data reflects the later time');
  });

  function assertRendered(domElement, dateObject) {
    var preposition = domElement.childNodes[0];
    assert.equal(preposition.nodeType, Element.TEXT_NODE, 'the preposition is a text node');
    assert.equal(preposition.textContent, 'completat la ', 'the preposition has the appropriate text');

    var timeElement = domElement.childNodes[1];
    assert.equal(timeElement.tagName, 'TIME', 'the second child is a <time> element');

    var humanlyReadableDate = moment(dateObject).format('DD.MM.YYYY HH:mm');
    assert.equal(timeElement.textContent, humanlyReadableDate, '<time> has the appropriate text content');
    assert.equal(timeElement.getAttribute('datetime'), dateObject.toISOString(),
      '<time>’s “datetime” attribute contains ISO 8601-formatted current date');
  }

  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var assert = window.TestHelpers.assert;

  var sinon = window.sinon;
  var moment = window.moment;
});
