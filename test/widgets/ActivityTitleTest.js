describe('ActivityTitle', function() {
  'use strict';

  var ActivityTitle = window.App.Widgets.ActivityTitle;

  var text, activityDescription, domElement;

  before(function() {
    text = 'Inquiry';
    activityDescription = new ActivityTitle(text);
    domElement = getWidgetDOMElement(activityDescription);
  });

  it('has the appropiate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-TITLE', 'has the appropiate tag name');
    assert.equal(domElement.textContent, text, 'has the text content passed into the constructor');
  });

  it('has the appropiate style', function() {
    var css = domElement.style;

    assert.equal(css.display, 'block', 'it takes the whole line by itself');
    assert.equal(css.fontSize, '16px', 'has just a bit larger font size to stand out');
    assert.equal(css.fontWeight, 'bold', 'is bolded to stand out');
    assert.equal(css.verticalAlign, '-1px', 'align vertically with the text in the field');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
