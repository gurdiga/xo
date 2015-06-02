'use strict';

var SelectField = require('../../app/ui/SelectField.jsx');
var test = tape;

var sandbox = document.createElement('div');
var labelText = 'My SelectField component';
var fieldValue = 'The second option';
var selectField = React.render(
  <SelectField
    label={labelText}
    value={fieldValue}
  />,
  sandbox
);

test('SelectField label', function(t) {
  var label = sandbox.querySelector('label');
  t.ok(label, 'it renders a <label>');

  var labelSpan = label.querySelector('span');
  t.equal(labelSpan.textContent, labelText,
    '<label> contains a <span> with the text given in the “label” attribute');

  t.ok(selectField, 'TODO');
  t.end();
});

test('SelectField label layout CSS', function(t) {
  var css = sandbox.querySelector('label').style;
  t.equal(css.display, 'block', 'is block-styled because it’s always one per line');
  t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

  t.end();
});

test('SelectField label text CSS', function(t) {
  var css = sandbox.querySelector('label>span').style;
  t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
  t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
  t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
  t.equal(css.width, '11em', 'is 11em wide');

  t.end();
});
