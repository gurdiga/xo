(function() {
  'use strict';

  var SelectFieldRaw = window.App.Widgets.SelectFieldRaw;
  var test = tape;

  var sandbox = document.createElement('div');
  var labelText = 'My SelectFieldRaw component';
  var optionValues = [
    'option 1',
    'option 2'
  ];
  var selectField = new SelectFieldRaw(labelText, optionValues, optionValues[1]);
  selectField.onChange(onChange);
  selectField.appendTo(sandbox);

  function onChange(argument) {
    onChange.called = true;
    onChange.argument = argument;
  }

  document.body.appendChild(sandbox);

  test('SelectFieldRaw label', function(t) {
    var label = sandbox.querySelector('label');
    t.ok(label, 'it renders a <label>');

    var labelSpan = label.querySelector('span');
    t.equal(labelSpan.textContent, labelText,
      '<label> contains a <span> with the text given in the “label” attribute');

    t.end();
  });

  test('SelectFieldRaw label layout CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('label'));
    t.equal(css.display, 'block', 'is block-styled because it’s always one per line');
    t.equal(css.margin, '0px 0px 3px 5px', 'has some air to breath at the left and below');

    t.end();
  });

  test('SelectFieldRaw label text CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('label>span'));
    t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
    t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
    t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
    t.equal(css.width, '154px', 'is 11em wide');

    t.end();
  });

  test('SelectFieldRaw options', function(t) {
    var options = sandbox.querySelector('label>select').children;
    t.equal(options.length, 2, 'the option count corresponds');
    t.equal(options[0].tagName, 'OPTION', 'the first child is an <option>');
    t.equal(options[0].textContent, optionValues[0], 'the first <option> has the corresponding text');
    t.equal(options[1].tagName, 'OPTION', 'the second child is an <option>');
    t.equal(options[1].textContent, optionValues[1], 'the second <option> has the corresponding text');

    t.end();
  });

  test('SelectFieldRaw select CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('select'));
    t.equal(css.width, '224px', 'is 16em wide too (as TextField input is)');
    t.equal(css.fontSize, '11px', 'has 11px font size (unlike TextField input does, because selects are funky)');
    t.equal(css.position, 'absolute', 'is absolutely-positioned to allow for precise vertical alignment without bothering the <label>');
    t.equal(css.marginTop, '-2px', 'is shifted up 2px to vertically align with the <label>');

    t.end();
  });

  test('SelectFieldRaw getValue()', function(t) {
    var select = sandbox.querySelector('label>select');
    t.equal(selectField.getValue(), optionValues[1], 'its getValue() method returns the selected option');

    select.value = optionValues[0];
    t.equal(selectField.getValue(), optionValues[0], 'getValue() reflects the selected option');

    t.end();
  });

  test('SelectFieldRaw onChange callback', function(t) {
    var select = sandbox.querySelector('label>select');

    onChange.called = false;
    select.dispatchEvent(new Event('change'));

    t.equal(onChange.called, true, 'triggers the onChange callback when changing');
    t.equal(onChange.argument, select.value, 'onChange callback was passed the new field value');

    document.body.removeChild(sandbox);
    t.end();
  });
}());