(function() {
  'use strict';

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;

  tape('LabeledSelectField label', function(t) {
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

    var domElement = sandbox.firstChild;
    var label = domElement.firstChild;
    var select = label.querySelector('select');

    t.equal(domElement.tagName, 'LABELED-SELECT-FIELD', 'has the appropriate tag name');

    t.test('label', function(t) {
      t.equal(label.getAttribute('widget'), 'FieldLabel', 'is a FieldLabel');
      t.equal(label.firstChild.textContent, labelText, 'has the appropriate text');

      t.end();
    });

    t.test('options', function(t) {
      var options = select.querySelectorAll('option');
      t.equal(options.length, 4, 'the option count corresponds');
      t.equal(options[0].tagName, 'OPTION', 'the first option is an <option>');
      t.equal(options[0].textContent, optionValues[0], 'the first <option> has the corresponding text');
      t.equal(options[1].tagName, 'OPTION', 'the second option is an <option>');
      t.equal(options[1].textContent, optionValues[1], 'the second <option> has the corresponding text');

      var group = optionValues[2];
      var optgroup = select.querySelector('optgroup');
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

    t.test('styling', function(t) {
      var css = select.style;
      t.equal(css.width, '200px', 'is 200px wide too (as LabeledTextField input is)');
      t.equal(css.fontSize, '14px', 'has 14px font size');
      t.equal(css.position, 'absolute', 'is absolutely-positioned to allow for precise vertical alignment without bothering the <label>');
      t.equal(css.marginTop, '-2px', 'is shifted up 2px to vertically align with the <label>');

      t.end();
    });

    t.test('value', function(t) {
      t.equal(selectField.getValue(), optionValues[1], 'its getValue() method returns the selected option');
      select.value = optionValues[0];
      t.equal(selectField.getValue(), optionValues[0], 'getValue() reflects the selected option');

      t.test('default', function(t) {
        var selectField = new LabeledSelectField(labelText, optionValues);
        t.equal(selectField.getValue(), optionValues[0], 'selects the first option if none specified');

        t.end();
      });

      t.end();
    });

    t.test('focusability', function(t) {
      document.body.appendChild(sandbox);

      selectField.focus();
      t.equal(document.activeElement, select, 'focuses its <select>');

      document.body.removeChild(sandbox);
      t.end();
    });

    t.test('onChange callback', function(t) {
      onChange.called = false;
      select.dispatchEvent(new Event('change'));

      t.equal(onChange.called, true, 'triggers the onChange callback when changing');
      t.equal(onChange.argument, select.value, 'onChange callback was passed the new field value');

      t.end();
    });

    t.end();
  });
}());
