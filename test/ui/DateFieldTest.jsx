'use strict';

// TODO: accommodate time?

var DateField = require('../../app/ui/DateField.jsx');
var test = tape;
var DateFormatting = require('utils/DateFormatting.js');

var sandbox = document.createElement('div');
var labelText = 'My date-field component';
var fieldValue = '2015-06-07';

var dateField = React.render(
  <DateField
    label={labelText}
    value={fieldValue}
  />,
  sandbox
);

test('DateField label', function(t) {
  var label = sandbox.querySelector('label');

  t.ok(label, 'it renders a <label> element');

  var labelSpan = label.querySelector('span');

  t.equal(labelSpan.textContent, labelText,
    '<label> contains a <span> with the text given in the “label” attribute');

  t.end();
});

test('DateField label layout CSS', function(t) {
  var css = sandbox.querySelector('label').style;

  t.equal(css.display, 'block', 'is block-styled because it’s always one per line');
  t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

  t.end();
});

test('DateField label text CSS', function(t) {
  var css = sandbox.querySelector('label>span').style;

  t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
  t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
  t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
  t.equal(css.width, '11em', 'is 11em wide');

  t.end();
});

test('DateField value handling', function(t) {
  var input = sandbox.querySelector('label>input[type="text"]');
  var date = DateFormatting.parse(fieldValue, DateField.INTERNAL_DATE_FORMAT);

  t.ok(input, 'is renders <input type="text"> element inside <label> for binding (accessibility)');
  t.equal(
    input.value,
    DateFormatting.format(date, DateField.UI_DATE_FORMAT),
    'the <intput /> has the value given in the DateField “value” attribute formatted according to DateField.UI_DATE_FORMAT');
  t.equal(
    dateField.getValue(),
    DateFormatting.format(date, DateField.INTERNAL_DATE_FORMAT),
    'its getValue() method returns the <input> value formatted according to DateField.INTERNAL_DATE_FORMAT');

  t.end();
});

test('DateField input CSS', function(t) {
  var css = sandbox.querySelector('input').style;
  t.equal(css.color, 'black', 'its text renders in black color');
  t.equal(css.padding, '4px', 'has 4 px padding');
  t.equal(css.font, 'bold 14px sans-serif', 'the text is rendered with “bold 14px sans-serif”');
  t.equal(css.width, '16em', 'is 16em wide');
  t.equal(
    css.backgroundImage,
    'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
    'has the image of a fine dotted line on the background'
  );
  t.equal(css.backgroundPosition, '0px -4px',
    'the background image is vertically positioned -4px to match the input padding');
  t.equal(css.borderRadius, '2px', 'has nice rounded corners');
  t.equal(css.border, 'none', 'it has no border, it’s role is taken on by the background image');
  t.equal(css.outline, 'none', 'it has no outline, it’s role is taken on by the box-shadow');

  t.end();
});

test('DateField outlines <input/> on focus', function(t) {
  var sandbox = document.createElement('div');

  React.render(
    <DateField
      label='Some label'
      value='2015-07-06'
    />,
    sandbox
  );

  var input = sandbox.querySelector('input');

  t.equal(input.style.boxShadow, 'none', 'does not have the CSS box-shadow property set');

  React.addons.TestUtils.Simulate.focus(input);
  t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

  React.addons.TestUtils.Simulate.blur(input);
  t.equal(input.style.boxShadow, 'none', 'has CSS box-shadow property removed when loses focus');

  t.end();
});

test('DateField input editability', function(t) {
  var input = sandbox.querySelector('label>input[type="text"]');
  var newFieldValue = '20/10/2010';

  input.value = newFieldValue;
  React.addons.TestUtils.Simulate.change(input);

  t.equal(newFieldValue, input.value, 'it is editable');
  t.equal(dateField.getValue(), '2010-10-20',
    'its getValue() method returns the changed <input> value');

  t.end();
});

test.skip('DateField value validation', function(t) {
  var sandbox = document.createElement('div');

  t.throws(function() {
    React.render(
      <DateField
        label='Some label'
        value={undefined}
      />,
      sandbox
    );
  },
    /DateField: “value” attribute is expected to be a date formatted as #{DateField.INTERNAL_DATE_FORMAT}/,
    'shows a meaningful error message');

  t.end();
});
