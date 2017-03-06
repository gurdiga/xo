import {FieldLabel} from "app/widgets/FieldLabel";
import {assert, getWidgetDOMElement} from "test/helper";

describe('FieldLabel', function() {
  'use strict';

  var labelText, childText, child, fieldLabel, domElement;

  before(function() {
    labelText = 'My FieldLabel component';
    childText = 'Child 1';

    child = document.createElement('div');
    child.textContent = childText;

    fieldLabel = new FieldLabel(labelText, [child]);
    domElement = getWidgetDOMElement(fieldLabel);
  });


  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LABEL', 'has the appropriate tag name');
    assert.equal(domElement.getAttribute('widget-name'), 'FieldLabel',
      'has the appropriate “widget-name” attribute');
  });

  it('has the appropriate layout', function() {
    var css = domElement.style;
    assert.equal(css.display, 'inline-block', 'it’ll be a block element because there’ll be one per line in most cases');
    assert.equal(css.margin, '0px 0px 3px', 'it sets up some spacing');
  });

  it('has the appropriate caption', function() {
    var labelSpan = domElement.firstChild;
    assert.equal(labelSpan.textContent, labelText, 'the text given in the “text” attribute is rendered in a <span> inside that <domElement>');

    var css = labelSpan.style;
    assert.equal(css.color, 'rgb(85, 85, 85)', 'the text color should be a bit dimmed compared to the field’s text color');
    assert.equal(css.fontSize, '14px', 'the font size should be 14px');
    assert.equal(css.display, 'inline-block', 'the <span> is an inline-block to be able to have a fixed width');
    assert.equal(css.width, '11em', 'the <span> has a fixed width of 11em');
  });

  it('handles children appropriately', function() {
    assert.equal(domElement.children.length, 2, 'the children count corresponds: 1 for the <span> + 1 for the child');
    assert.equal(domElement.lastElementChild.tagName, 'DIV', 'the child tag name corresponds');
    assert.equal(domElement.lastElementChild.textContent, childText, 'the childText tag text content corresponds');
  });

  it('can be setStyle', function() {
    fieldLabel.setStyle({
      'color': 'red'
    });

    assert.equal(domElement.style.color, 'red', 'the color is set appropriately');
  });
});
