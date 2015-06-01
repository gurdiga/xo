'use strict';

var TextField = require('../../app/ui/TextField.jsx');
var test = tape;

var sandbox = document.createElement('div');
var labelText = 'My text-field component';
var fieldValue = 'Hi!';
var textField = React.render(
  <TextField
    label={labelText}
    value={fieldValue}
  />,
  sandbox
);

test('TextField label', function(t) {
  var label = sandbox.querySelector('label');
  t.ok(label, 'It renders a <label> element');

  var labelSpan = label.querySelector('span');
  t.equal(labelSpan.textContent, labelText,
    '<label> contains a <span> with the text given in the “label” attribute');
  t.end();
});

test('TextField label layout CSS', function(t) {
  var css = sandbox.querySelector('label').style;
  t.equal(css.display, 'block', 'is block-styled because it’s always one per line');
  t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

  t.end();
});

test('TextField label text CSS', function(t) {
  var css = sandbox.querySelector('label>span').style;
  t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
  t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
  t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
  t.equal(css.width, '11em', 'is 11em wide');

  t.end();
});

test('TextField input', function(t) {
  var input = sandbox.querySelector('input[type="text"]');

  t.ok(input, 'it renders an <input type="text"/> element');
  t.equal(input.value, fieldValue,
    'the <intput /> has the value given in the TextField “value” attribute');
  t.equal(textField.getValue(), input.value,
    'its getValue() method returns the <input> value');

  var newFieldValue = 'I have changed';
  input.value = newFieldValue;
  React.addons.TestUtils.Simulate.change(input);

  t.equal(newFieldValue, input.value, 'it is editable');
  t.equal(textField.getValue(), newFieldValue,
    'its getValue() method returns the changed <input> value');
  t.end();
});

test('TextField input CSS', function(t) {
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

test('TextField accepts custom input CSS through the “style” attribute', function(t) {
  var customCSS = {
    color: 'red',
    width: '20em'
  };

  var sandbox = document.createElement('div');
  React.render(
    <TextField
      label='Some label'
      value=''
      style={customCSS}
    />,
    sandbox
  );

  var input = sandbox.querySelector('input');
  t.deepEqual(_.pick(input.style, passedCustomPorperties), customCSS, 'applies the given CSS properties to <input/>');
  t.end();

  function passedCustomPorperties(propertyValue, propertyName) {
    return _.has(customCSS, propertyName);
  }
});

test('TextField outlines <input/> on focus', function(t) {
  var sandbox = document.createElement('div');
  React.render(
    <TextField
      label='Some label'
      value=''
    />,
    sandbox
  );

  var input = sandbox.querySelector('input');
  t.equal(input.style.boxShadow, '', 'does not have the CSS box-shadow property set');

  React.addons.TestUtils.Simulate.focus(input);
  t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

  React.addons.TestUtils.Simulate.blur(input);
  t.equal(input.style.boxShadow, 'none', 'has CSS box-shadow property removed when loses focus');

  t.end();
});

test('TextField propTypes?', function(t) {
  t.pass('TODO?');
  t.end();
});
