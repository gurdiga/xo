(function() {
  'use strict';

  var LargeTextField = window.App.LargeTextField;
  var test = tape;

  var sandbox = document.createElement('div');
  var labelText = 'My large-text-field component';
  var fieldValue = 'Hi!';

  var largeTextField = React.render(
    e(LargeTextField, {
      label: labelText,
      value: fieldValue
    }),
    sandbox
  );

  document.body.appendChild(sandbox);

  test('LargeTextField label', function(t) {
    var label = sandbox.querySelector('label');

    t.ok(label, 'it renders a <label> element');

    var labelSpan = label.querySelector('span');

    t.equal(labelSpan.textContent, labelText,
      '<label> contains a <span> with the text given in the “label” attribute');

    t.end();
  });

  test('LargeTextFieldTest label layout CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('label'));

    t.equal(css.display, 'block', 'is block-styled because it’s always one per line');
    t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

    t.end();
  });

  test('LargeTextFieldTest label text CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('label>span'));

    t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
    t.equal(css.fontSize, '14px', 'has the same font size as the TextField input');
    t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
    t.equal(css.width, '154px', 'is 11em wide');

    t.end();
  });

  test('LargeTextField textarea value', function(t) {
    var textarea = sandbox.querySelector('label>textarea');

    t.ok(textarea, 'it renders <textarea> element inside the <label> for binding (accessibility)');
    t.equal(textarea.value, fieldValue,
      'the <textarea> has the value given in the LargeTextField “value” attribute');
    t.equal(largeTextField.getValue(), textarea.value,
      'its getValue() method returns the <textarea> value');

    var newFieldValue = 'I have changed';

    textarea.value = newFieldValue;
    React.addons.TestUtils.Simulate.change(textarea);

    t.equal(newFieldValue, textarea.value, 'it is editable');
    t.equal(largeTextField.getValue(), newFieldValue,
      'its getValue() method returns the changed <textarea> value');

    t.end();
  });

  test('LargeTextField textarea CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('textarea'));

    t.equal(css.color, 'rgb(0, 0, 0)', 'its text renders in black color');
    t.equal(css.padding, '4px', 'has 4px of padding, as the TextField input does');
    t.equal(css.marginLeft, '14px', 'has 1em of margin at the left, to stand out of the label vertical alignment');
    t.equal(css.fontWeight, 'bold', 'has bold text as the TextField input does');
    t.equal(css.fontSize, '14px', 'has 14px font size as the TextField input does');
    t.equal(css.fontFamily, 'sans-serif', 'has sans-serif font-family as the TextField input does');
    t.equal(css.lineHeight, '24.5px', 'has a 1.75 line height to accommodate the lines on the background');
    t.equal(css.width, '364px', 'is 26em wide to wrap to the next line and right align with the TextField input');
    t.equal(css.height, '81.1875px', 'is 5.8em high to neatly accommodate 3 lines of text');
    t.equal(
      css.backgroundImage,
      'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
      'has the image of a fine dotted line on the background');
    t.equal(css.borderRadius, '2px', 'has a subtle 2px border-radius as the TextField input does');
    t.equal(css.border, '0px none rgb(0, 0, 0)',
      'has no border because it’s replaced by the dotted line on the background image and the artificial outline');
    t.equal(css.outline, 'rgb(0, 0, 0) none 0px',
      'has the built-in outline disabled because it’s replaces by the nicer artificial outline');
    t.equal(css.resize, 'none', 'has the built-in resize control disabled because it will be made elastic');

    var textarea = sandbox.querySelector('textarea');

    React.addons.TestUtils.Simulate.focus(textarea);
    t.equal(textarea.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

    React.addons.TestUtils.Simulate.blur(textarea);
    t.equal(textarea.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

    document.body.removeChild(sandbox);
    t.end();
  });
}());
