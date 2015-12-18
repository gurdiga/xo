(function() {
  'use strict';

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var test = tape;

  var sandbox = document.createElement('div');
  var labelText = 'My text-field component';
  var fieldValue = 'Hi!';

  var textField = new LabeledTextField(labelText, fieldValue);
  textField.appendTo(sandbox);

  document.body.appendChild(sandbox);

  test('LabeledTextField label', function(t) {
    var label = sandbox.querySelector('label');
    t.ok(label, 'it renders a <label> element');

    var labelSpan = label.querySelector('span');
    t.equal(labelSpan.textContent, labelText,
      '<label> contains a <span> with the text given in the “label” attribute');

    t.end();
  });

  test('LabeledTextField label layout CSS', function(t) {
    var css = sandbox.querySelector('label').style;
    t.equal(css.display, 'inline-block', 'is block-styled because it’s always one per line');
    t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

    t.end();
  });

  test('LabeledTextField label text CSS', function(t) {
    var css = sandbox.querySelector('label>span').style;
    t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
    t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
    t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
    t.equal(css.width, '11em', 'is 11em wide');

    t.end();
  });

  test('LabeledTextField input', function(t) {
    var input = sandbox.querySelector('label>input');

    t.ok(input, 'is renders <input/> element inside <label> for accessibility');
    t.equal(input.value, fieldValue,
      'the <input /> has the value given in the LabeledTextField “value” attribute');
    t.equal(textField.getValue(), input.value,
      'its getValue() method returns the <input/> value');

    t.end();
  });

  test('LabeledTextField input CSS', function(t) {
    var css = sandbox.querySelector('input').style;
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

    t.end();
  });

  test('LabeledTextField accepts custom input CSS through the “style” attribute', function(t) {
    var customCSS = {
      color: 'rgb(255, 0, 0)',
      width: '280px'
    };

    var sandbox = document.createElement('div');
    document.body.appendChild(sandbox);

    var textField = new LabeledTextField('Some label', '', customCSS);
    textField.appendTo(sandbox);

    var input = sandbox.querySelector('input');
    var css = input.style;
    t.deepEqual(_.pick(css, passedCustomPorperties), customCSS, 'applies the given CSS properties to <input/>');

    document.body.removeChild(sandbox);
    t.end();

    function passedCustomPorperties(propertyValue, propertyName) {
      return _.has(customCSS, propertyName);
    }
  });

  test('LabeledTextField outlines <input/> on focus', function(t) {
    var input = sandbox.querySelector('input');
    t.equal(input.style.boxShadow, '', 'does not have the CSS box-shadow property set');

    input.dispatchEvent(new Event('focus'));
    t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

    input.dispatchEvent(new Event('blur'));
    t.equal(input.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

    document.body.removeChild(sandbox);
    t.end();
  });

}());
