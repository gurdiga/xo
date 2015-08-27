(function() {
  'use strict';

  var FieldLabel = window.App.Widgets.FieldLabel;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var labelText = 'My FieldLabel component';
  var childText = 'Child 1';

  var child = document.createElement('div');
  child.textContent = childText;

  var fieldLabel = new FieldLabel(labelText, {}, [child]);
  fieldLabel.appendTo(sandbox);

  test('FieldLabel DOM', function(t) {
    var label = sandbox.querySelector('label');
    t.ok(label, 'it renders a <label> element');

    var labelSpan = label.querySelector('span');
    t.equal(labelSpan.textContent, labelText, 'the text given in the “text” attribute is rendered in a <span> inside that <label>');
    t.end();
  });

  test('FieldLabel layout CSS', function(t) {
    var css = sandbox.querySelector('label').style;
    t.equal(css.display, 'inline-block', 'it’ll be a block element because there’ll be one per line in most cases');
    t.equal(css.margin, '0px 0px 3px 5px', 'it sets up some spacing');

    t.end();
  });

  test('FieldLabel text CSS', function(t) {
    var css = sandbox.querySelector('label>span').style;
    t.equal(css.color, 'rgb(85, 85, 85)', 'the text color should be a bit dimmed compared to the field’s text color');
    t.equal(css.fontSize, '14px', 'the font size should be 14px');
    t.equal(css.display, 'inline-block', 'the <span> is an inline-block to be able to have a fixed width');
    t.equal(css.width, '11em', 'the <span> has a fixed width of 11em');

    t.end();
  });

  test('FieldLabel contents', function(t) {
    var label = sandbox.querySelector('label');
    t.equal(label.children.length, 2, 'the children count corresponds: 1 for the <span> + 1 for the child');
    t.equal(label.lastElementChild.tagName, 'DIV', 'the child tag name corresponds');
    t.equal(label.lastElementChild.textContent, childText, 'the childText tag text content corresponds');

    document.body.removeChild(sandbox);
    t.end();
  });
}());
