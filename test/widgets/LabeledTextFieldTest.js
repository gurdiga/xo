describe('LabeledTextField', function() {
  'use strict';

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var labelText, fieldValue, additionalStyle, textField, domElement, label, input;

  before(function() {
    labelText = 'My LabeledTextField component';
    fieldValue = 'Hi!';
    additionalStyle = {
      backgroundColor: 'rgb(255, 0, 0)'
    };

    textField = new LabeledTextField(labelText, fieldValue, additionalStyle);

    domElement = getWidgetDOMElement(textField);
    label = domElement.firstChild;
    input = label.querySelector('input');
  });

  it('has a FieldLabel', function() {
    assert.equal(label.getAttribute('widget-name'), 'FieldLabel',
      'has the appropriate “widget-name” attribute');
    assert.equal(label.textContent, labelText, 'has the appropriate text');
  });

  it('accepts and tells its value', function() {
    assert.equal(input.value, fieldValue, 'the <input /> has the value given in the LabeledTextField “value” attribute');
    assert.equal(textField.getValue(), fieldValue, 'its getValue() method returns the <input/> value');
  });

  it('is focusable', function() {
    var sandbox = domElement.parentNode;
    document.body.appendChild(sandbox);

    textField.focus();
    assert.equal(document.activeElement, input, 'focuses its <input>');

    document.body.removeChild(sandbox);
  });

  it('is styled appropriately', function() {
    var css = input.style;
    assert.equal(css.color, 'black', 'its text renders in black color');
    assert.equal(css.padding, '4px', 'has 4 px padding');
    assert.equal(css.fontWeight, 'bold', 'the text is rendered with bold');
    assert.equal(css.fontSize, '14px', 'the text is rendered with 14px');
    assert.equal(css.fontFamily, 'sans-serif', 'the text is rendered with sans-serif');
    assert.equal(css.width, '200px', 'is 200px wide');
    assert.equal(
      css.backgroundImage,
      'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
      'has the image of a fine dotted line on the background'
    );
    assert.equal(css.backgroundPosition, '0px -4px',
      'the background image is vertically positioned -4px to match the input padding');
    assert.equal(css.borderRadius, '2px', 'has nice rounded corners');
    assert.equal(css.borderWidth, '0px', 'it has no border, it’s role is taken on by the background image');
    assert.equal(css.outlineWidth, '0px', 'it has no outline, it’s role is taken on by the box-shadow');
    assert.equal(css.backgroundColor, additionalStyle.backgroundColor, 'accepts additional style');

    assert(input.hasAttribute('has-on-focus-effect'), 'is outlined on focus');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
