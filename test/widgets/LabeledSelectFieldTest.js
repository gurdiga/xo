(function() {
  'use strict';

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var test = tape;

  var sandbox = document.createElement('div');
  var labelText = 'My LabeledSelectField component';
  var optionValues = [
    'option 1',
    'option 2',
    {
      optgroupLabel: 'An optgroup',
      options: [
        'option 3',
        'option 4'
      ]
    }
  ];
  var selectField = new LabeledSelectField(labelText, optionValues, optionValues[1]);
  selectField.onChange(onChange);
  selectField.appendTo(sandbox);

  function onChange(argument) {
    onChange.called = true;
    onChange.argument = argument;
  }

  document.body.appendChild(sandbox);

  test('LabeledSelectField label', function(t) {
    var label = sandbox.querySelector('label');
    t.ok(label, 'it renders a <label>');

    var labelSpan = label.querySelector('span');
    t.equal(labelSpan.textContent, labelText,
      '<label> contains a <span> with the text given in the “label” attribute');

    t.end();
  });

  test('LabeledSelectField label layout CSS', function(t) {
    var css = sandbox.querySelector('label').style;
    t.equal(css.display, 'inline-block', 'is block-styled because it’s always one per line');
    t.equal(css.margin, '0px 0px 6px 5px', 'has some air to breath at the left and below');

    t.end();
  });

  test('LabeledSelectField label text CSS', function(t) {
    var css = sandbox.querySelector('label>span').style;
    t.equal(css.color, 'rgb(85, 85, 85)', 'is a bit dimmed compared to the input text because it’s less important');
    t.equal(css.fontSize, '14px', 'has the same font size as the <input/>');
    t.equal(css.display, 'inline-block', 'is inline-block to be able to have it’s own width');
    t.equal(css.width, '11em', 'is 11em wide');

    t.end();
  });

  test('LabeledSelectField options', function(t) {
    var select = sandbox.querySelector('label>select');
    var options = select.querySelectorAll('option');
    t.equal(options.length, 4, 'the option count corresponds');
    t.equal(options[0].tagName, 'OPTION', 'the first option is an <option>');
    t.equal(options[0].textContent, optionValues[0], 'the first <option> has the corresponding text');
    t.equal(options[1].tagName, 'OPTION', 'the second option is an <option>');
    t.equal(options[1].textContent, optionValues[1], 'the second <option> has the corresponding text');

    var group = optionValues[2];
    var optgroup = select.querySelector('optgroup');
    t.ok(optgroup, 'an <optgroup> is added for the POJSO item');
    t.equal(optgroup.label, group.optgroupLabel, 'the <optgroup> has the appropriate label');

    var optgroupOptions = optgroup.querySelectorAll('option');
    t.equal(optgroupOptions.length, 2, '<optgroup> has the appropriate number of <option>s');

    t.equal(optgroupOptions[0].tagName, 'OPTION', 'the third option is an <option>');
    t.equal(optgroupOptions[0].textContent, group.options[0],
      'the third <option> has the corresponding text');
    t.equal(optgroupOptions[1].tagName, 'OPTION', 'the fourth option is an <option>');
    t.equal(optgroupOptions[1].textContent, group.options[1],
      'the fourth <option> has the corresponding text');

    t.end();
  });

  test('LabeledSelectField select CSS', function(t) {
    var css = sandbox.querySelector('select').style;
    t.equal(css.width, '200px', 'is 200px wide too (as LabeledTextField input is)');
    t.equal(css.fontSize, '14px', 'has 14px font size');
    t.equal(css.position, 'absolute', 'is absolutely-positioned to allow for precise vertical alignment without bothering the <label>');
    t.equal(css.marginTop, '-2px', 'is shifted up 2px to vertically align with the <label>');

    t.end();
  });

  test('LabeledSelectField getValue()', function(t) {
    var select = sandbox.querySelector('label>select');
    t.equal(selectField.getValue(), optionValues[1], 'its getValue() method returns the selected option');

    select.value = optionValues[0];
    t.equal(selectField.getValue(), optionValues[0], 'getValue() reflects the selected option');

    t.end();
  });

  test('LabeledSelectField onChange callback', function(t) {
    var select = sandbox.querySelector('label>select');

    onChange.called = false;
    select.dispatchEvent(new Event('change'));

    t.equal(onChange.called, true, 'triggers the onChange callback when changing');
    t.equal(onChange.argument, select.value, 'onChange callback was passed the new field value');

    document.body.removeChild(sandbox);
    t.end();
  });
}());
