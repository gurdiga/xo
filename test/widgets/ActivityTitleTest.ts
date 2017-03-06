import {ActivityTitle} from "app/widgets/ActivityTitle";
import {assert, getWidgetDOMElement} from "test/helper";

describe('ActivityTitle', function() {
  'use strict';

  var text, activityDescription, domElement;

  before(function() {
    text = 'Inquiry';
    activityDescription = new ActivityTitle(text);
    domElement = getWidgetDOMElement(activityDescription);
  });

  it('has the appropiate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-TITLE', 'has the appropiate tag name');
    assert.equal(domElement.textContent, text, 'has the text content passed into the constructor');
    assert.equal(domElement.getAttribute('role'), 'heading', 'has the role of heading for accessibility');
  });

  it('has the appropiate style', function() {
    var css = domElement.style;

    assert.equal(css.display, 'block', 'it takes the whole line by itself');
    assert.equal(css.fontSize, '16px', 'has just a bit larger font size to stand out');
    assert.equal(css.fontWeight, 'bold', 'is bolded to stand out');
    assert.equal(css.verticalAlign, '-1px', 'align vertically with the text in the field');
  });
});
