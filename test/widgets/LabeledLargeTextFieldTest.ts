import {LabeledLargeTextField} from "app/widgets/LabeledLargeTextField";
import {assert, getWidgetDOMElement} from "test/helper";

describe('LabeledLargeTextField', function() {
  'use strict';

  var labelText, fieldValue, largeLabeledTextField, domElement, label, textarea;

  before(function() {
    labelText = 'My LabeledLargeTextField component';
    fieldValue = 'Hi!';

    largeLabeledTextField = new LabeledLargeTextField(labelText, fieldValue);

    domElement = getWidgetDOMElement(largeLabeledTextField);
    label = domElement.firstChild;
    textarea = label.children[1];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LABELED-LARGE-TEXT-FIELD', 'has the appropriate tag name');
  });

  it('has the appropriate label', function() {
    assert.equal(label.getAttribute('widget-name'), 'FieldLabel',
      'has the appropriate “widget-name” attribute');
    assert.equal(label.textContent, labelText, 'has the appropriate text');
  });

  it('accepts and tells its value', function() {
    assert.equal(textarea.value, fieldValue,
      'the <textarea> has the value given in the LabeledLargeTextField “value” attribute');
    assert.equal(largeLabeledTextField.getValue(), fieldValue,
      'its getValue() method returns the <textarea> value');
  });

  it('is focusable', function() {
    var sandbox = domElement.parentNode;
    document.body.appendChild(sandbox);

    largeLabeledTextField.focus();
    assert.equal(document.activeElement, textarea, 'focuses its <textarea>');

    document.body.removeChild(sandbox);
  });

  it('is styled appropriately', function() {
    var css = textarea.style;

    assert.equal(css.color, 'black', 'its text renders in black color');
    assert.equal(css.padding, '4px', 'has 4px of padding, as the LabeledTextField input does');
    assert.equal(css.marginLeft, '1em', 'has 1em of margin at the left, to stand out of the label vertical alignment');
    assert.equal(css.marginBottom, '5px', 'a bit of space at the bottom not to stick to the next select');
    assert.equal(css.fontWeight, 'bold', 'has bold text as the LabeledTextField input does');
    assert.equal(css.fontSize, '14px', 'has 14px font size as the LabeledTextField input does');
    assert.equal(css.fontFamily, 'sans-serif', 'has sans-serif font-family as the LabeledTextField input does');
    assert.equal(css.lineHeight, '1.75', 'has a 1.75 line height to accommodate the lines on the background');
    assert.equal(css.width, '340px', 'is 340px wide to wrap to the next line and right align with the LabeledTextField input');
    assert.equal(css.height, '5.8em', 'is 5.8em high to neatly accommodate 3 lines of text');
    assert.equal(
      css.backgroundImage,
      'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
      'has the image of a fine dotted line on the background');
    assert.equal(css.borderRadius, '2px', 'has a subtle 2px border-radius as the LabeledTextField input does');
    assert.equal(css.borderWidth, '0px',
      'has no border because it’s replaced by the dotted line on the background image and the artificial outline');
    assert.equal(css.outlineWidth, '0px',
      'has the built-in outline disabled because it’s replaces by the nicer artificial outline');
    assert.equal(css.resize, 'none', 'has the built-in resize control disabled because it will be made elastic');
    assert.equal(css.display, 'block', 'is block because needs to place under the label');

    assert(textarea.hasAttribute('has-on-focus-effect'), 'is outlined on focus');
  });
});
