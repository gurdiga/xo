describe('FieldLabel', function() {
  'use strict';

  var FieldLabel = window.App.Widgets.FieldLabel;

  var sandbox, labelText, childText, child, fieldLabel, label;

  before(function() {
    sandbox = document.createElement('div');

    labelText = 'My FieldLabel component';
    childText = 'Child 1';

    child = document.createElement('div');
    child.textContent = childText;

    fieldLabel = new FieldLabel(labelText, {}, [child]);
    fieldLabel.appendTo(sandbox);

    label = sandbox.firstChild;
  });


  it('has the appropriate DOM structure', function() {
    assert.equal(label.tagName, 'LABEL', 'has the appropriate tag name');
    assert.equal(label.getAttribute('widget-name'), 'FieldLabel',
      'has the appropriate “widget-name” attribute');
  });

  it('has the appropriate layout', function() {
    var css = label.style;
    assert.equal(css.display, 'inline-block', 'it’ll be a block element because there’ll be one per line in most cases');
    assert.equal(css.margin, '0px 0px 3px', 'it sets up some spacing');
  });

  it('has the appropriate caption', function() {
    var labelSpan = label.firstChild;
    assert.equal(labelSpan.textContent, labelText, 'the text given in the “text” attribute is rendered in a <span> inside that <label>');

    var css = labelSpan.style;
    assert.equal(css.color, 'rgb(85, 85, 85)', 'the text color should be a bit dimmed compared to the field’s text color');
    assert.equal(css.fontSize, '14px', 'the font size should be 14px');
    assert.equal(css.display, 'inline-block', 'the <span> is an inline-block to be able to have a fixed width');
    assert.equal(css.width, '11em', 'the <span> has a fixed width of 11em');
  });

  it('handles children appropriately', function() {
    assert.equal(label.children.length, 2, 'the children count corresponds: 1 for the <span> + 1 for the child');
    assert.equal(label.lastElementChild.tagName, 'DIV', 'the child tag name corresponds');
    assert.equal(label.lastElementChild.textContent, childText, 'the childText tag text content corresponds');
  });

  var assert = window.TestHelpers.assert;
});
