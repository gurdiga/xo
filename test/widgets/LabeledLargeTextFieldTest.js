(function() {
  'use strict';
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var labelText = 'My LabeledLargeTextField component';
  var fieldValue = 'Hi!';

  var largeLabeledTextField = new LabeledLargeTextField(labelText, fieldValue);
  largeLabeledTextField.appendTo(sandbox);

  test('LabeledLargeTextField label', function(t) {
    var label = sandbox.querySelector('label');

    t.ok(label, 'it renders a <label> element');

    var labelSpan = label.querySelector('span');

    t.equal(labelSpan.textContent, labelText,
      '<label> contains a <span> with the text given in the “label” attribute');

    t.end();
  });

  test('LargeTextFieldTest label layout CSS', function(t) {
    var css = sandbox.querySelector('label').style;

    t.equal(css.display, 'inline-block', 'is block-styled because it’s always one per line');
    t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

    t.end();
  });

  test('LargeTextFieldTest label text CSS', function(t) {
    var css = sandbox.querySelector('label>span').style;

    t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
    t.equal(css.fontSize, '14px', 'has the same font size as the LabeledTextField input');
    t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
    t.equal(css.width, '11em', 'is 11em wide');

    t.end();
  });

  test('LabeledLargeTextField textarea value', function(t) {
    var textarea = sandbox.querySelector('label>textarea');

    t.ok(textarea, 'it renders <textarea> element inside the <label> for binding (accessibility)');
    t.equal(textarea.value, fieldValue,
      'the <textarea> has the value given in the LabeledLargeTextField “value” attribute');
    t.equal(largeLabeledTextField.getValue(), textarea.value,
      'its getValue() method returns the <textarea> value');

    t.end();
  });

  test('LabeledLargeTextField textarea CSS', function(t) {
    var css = sandbox.querySelector('textarea').style;

    t.equal(css.color, 'black', 'its text renders in black color');
    t.equal(css.padding, '4px', 'has 4px of padding, as the LabeledTextField input does');
    t.equal(css.marginLeft, '1em', 'has 1em of margin at the left, to stand out of the label vertical alignment');
    t.equal(css.marginBottom, '5px', 'a bit of space at the bottom not to stick to the next select');
    t.equal(css.fontWeight, 'bold', 'has bold text as the LabeledTextField input does');
    t.equal(css.fontSize, '14px', 'has 14px font size as the LabeledTextField input does');
    t.equal(css.fontFamily, 'sans-serif', 'has sans-serif font-family as the LabeledTextField input does');
    t.equal(css.lineHeight, '1.75', 'has a 1.75 line height to accommodate the lines on the background');
    t.equal(css.width, '340px', 'is 340px wide to wrap to the next line and right align with the LabeledTextField input');
    t.equal(css.height, '5.8em', 'is 5.8em high to neatly accommodate 3 lines of text');
    t.equal(
      css.backgroundImage,
      'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
      'has the image of a fine dotted line on the background');
    t.equal(css.borderRadius, '2px', 'has a subtle 2px border-radius as the LabeledTextField input does');
    t.equal(css.borderWidth, '0px',
      'has no border because it’s replaced by the dotted line on the background image and the artificial outline');
    t.equal(css.outlineWidth, '0px',
      'has the built-in outline disabled because it’s replaces by the nicer artificial outline');
    t.equal(css.resize, 'none', 'has the built-in resize control disabled because it will be made elastic');

    var textarea = sandbox.querySelector('textarea');

    textarea.dispatchEvent(new Event('focus'));
    t.equal(textarea.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

    textarea.dispatchEvent(new Event('blur'));
    t.equal(textarea.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

    document.body.removeChild(sandbox);
    t.end();
  });
}());
