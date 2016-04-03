(function() {
  'use strict';

  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;

  tape('LabeledLargeTextField', function(t) {
    var sandbox = document.createElement('div');
    var labelText = 'My LabeledLargeTextField component';
    var fieldValue = 'Hi!';

    var largeLabeledTextField = new LabeledLargeTextField(labelText, fieldValue);
    largeLabeledTextField.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    var label = domElement.firstChild;
    var textarea = label.children[1];

    t.equal(domElement.tagName, 'LABELED-LARGE-TEXT-FIELD', 'has the appropriate tag name');

    t.test('label', function(t) {
      t.equal(label.getAttribute('widget-name'), 'FieldLabel',
        'has the appropriate “widget-name” attribute');
      t.equal(label.textContent, labelText, 'has the appropriate text');

      t.end();
    });

    t.test('value', function(t) {
      t.equal(textarea.value, fieldValue,
        'the <textarea> has the value given in the LabeledLargeTextField “value” attribute');
      t.equal(largeLabeledTextField.getValue(), fieldValue,
        'its getValue() method returns the <textarea> value');

      t.end();
    });

    t.test('focusability', function(t) {
      document.body.appendChild(sandbox);

      largeLabeledTextField.focus();
      t.equal(document.activeElement, textarea, 'focuses its <textarea>');

      document.body.removeChild(sandbox);
      t.end();
    });

    t.test('textarea styling', function(t) {
      var css = textarea.style;

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
      t.equal(css.display, 'block', 'is block because needs to place under the label');

      t.ok(textarea.hasAttribute('outline-on-focus'), 'is outlined on focus');

      t.end();
    });

    t.end();
  });

}());
