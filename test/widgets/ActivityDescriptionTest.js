describe('ActivityDescription', function() {
  'use strict';

  var ActivityDescription = window.App.Widgets.ActivityDescription;

  var sandbox, text, activityDescription, domElement;

  before(function() {
    sandbox = document.createElement('div');

    text = 'Inquiry';
    activityDescription = new ActivityDescription(text);
    activityDescription.appendTo(sandbox);
    domElement = sandbox.firstChild;
  });

  it('has the appropiate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropiate tag name');
    assert.equal(domElement.textContent, text, 'has the text content passed into the constructor');
  });

  it('has the appropiate style', function() {
    var css = domElement.style;

    assert.equal(css.display, 'inline', 'it’s expected to be on the same line with other elements');
    assert.equal(css.fontSize, '16px', 'has just a bit larger font size to stand out');
    assert.equal(css.fontWeight, 'bold', 'is bolded to stand out');
    assert.equal(css.marginLeft, '0.5em', 'keeps some space at the left');
    assert.equal(css.verticalAlign, '-1px', 'align vertically with the text in the field');
  });

  var assert = window.TestHelpers.assert;
});
