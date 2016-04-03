(function() {
  'use strict';

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  tape('LabeledTextField label', function(t) {
    var sandbox = document.createElement('div');
    var labelText = 'My LabeledTextField component';
    var fieldValue = 'Hi!';
    var additionalStyle = {
      backgroundColor: 'rgb(255, 0, 0)'
    };

    var textField = new LabeledTextField(labelText, fieldValue, additionalStyle);
    textField.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    var label = domElement.firstChild;
    var input = label.querySelector('input');

    t.test('label', function(t) {
      t.equal(label.getAttribute('widget-name'), 'FieldLabel',
        'has the appropriate “widget-name” attribute');
      t.equal(label.textContent, labelText, 'has the appropriate text');

      t.end();
    });

    t.test('value', function(t) {
      t.equal(input.value, fieldValue, 'the <input /> has the value given in the LabeledTextField “value” attribute');
      t.equal(textField.getValue(), fieldValue, 'its getValue() method returns the <input/> value');

      t.end();
    });

    t.test('focusability', function(t) {
      document.body.appendChild(sandbox);

      textField.focus();
      t.equal(document.activeElement, input, 'focuses its <input>');

      document.body.removeChild(sandbox);
      t.end();
    });

    t.test('styling', function(t) {
      var css = input.style;
      t.equal(css.color, 'black', 'its text renders in black color');
      t.equal(css.padding, '4px', 'has 4 px padding');
      t.equal(css.fontWeight, 'bold', 'the text is rendered with bold');
      t.equal(css.fontSize, '14px', 'the text is rendered with 14px');
      t.equal(css.fontFamily, 'sans-serif', 'the text is rendered with sans-serif');
      t.equal(css.width, '200px', 'is 200px wide');
      t.equal(
        css.backgroundImage,
        'url("data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7")',
        'has the image of a fine dotted line on the background'
      );
      t.equal(css.backgroundPosition, '0px -4px',
        'the background image is vertically positioned -4px to match the input padding');
      t.equal(css.borderRadius, '2px', 'has nice rounded corners');
      t.equal(css.borderWidth, '0px', 'it has no border, it’s role is taken on by the background image');
      t.equal(css.outlineWidth, '0px', 'it has no outline, it’s role is taken on by the box-shadow');
      t.equal(css.backgroundColor, additionalStyle.backgroundColor, 'accepts additional style');

      t.ok(input.hasAttribute('outline-on-focus'), 'is outlined on focus');

      t.end();
    });

    t.end();
  });

}());
