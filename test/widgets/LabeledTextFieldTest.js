(function() {
  'use strict';

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var test = tape;

  var sandbox = document.createElement('div');
  var labelText = 'My LabeledTextField component';
  var fieldValue = 'Hi!';
  var additionalStyle = {
    backgroundColor: 'rgb(255, 0, 0)'
  };

  var textField = new LabeledTextField(labelText, fieldValue, additionalStyle);
  textField.appendTo(sandbox);

  test('LabeledTextField label', function(t) {
    var domElement = sandbox.firstChild;
    var label = domElement.firstChild;
    var input = label.querySelector('input');

    t.test('label', function(t) {
      t.equal(label.getAttribute('widget'), 'FieldLabel', 'is a FieldLabel');
      t.equal(label.textContent, labelText, 'has the appropriate text');

      t.end();
    });

    t.test('field', function(t) {
      t.equal(input.value, fieldValue, 'the <input /> has the value given in the LabeledTextField “value” attribute');
      t.equal(textField.getValue(), fieldValue, 'its getValue() method returns the <input/> value');

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

      t.end();
    });

    t.test('focus', function(t) {
      t.equal(input.style.boxShadow, '', 'does not have the CSS box-shadow property set');

      input.dispatchEvent(new Event('focus'));
      t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

      input.dispatchEvent(new Event('blur'));
      t.equal(input.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

      t.end();
    });

    t.end();
  });

}());
