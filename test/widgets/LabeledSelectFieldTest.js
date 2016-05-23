describe('LabeledSelectField', function() {
  'use strict';

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;

  var sandbox, labelText, optionValues, onChange, selectField, domElement, label, select;

  beforeEach(function() {
    sandbox = document.createElement('div');
    labelText = 'My LabeledSelectField component';
    optionValues = [
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

    onChange = createSpy();
    selectField = new LabeledSelectField(labelText, optionValues, optionValues[1]);
    selectField.onChange(onChange);
    selectField.appendTo(sandbox);

    domElement = sandbox.firstChild;
    label = domElement.firstChild;
    select = label.querySelector('select');
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LABELED-SELECT-FIELD', 'has the appropriate tag name');
  });

  it('has a label', function() {
    assert.equal(label.getAttribute('widget-name'), 'FieldLabel',
      'has the appropriate “widget-name” attribute');
    assert.equal(label.firstChild.textContent, labelText, 'has the appropriate text');
  });

  it('has the appropriate options', function() {
    var options = select.querySelectorAll('option');
    assert.equal(options.length, 4, 'the option count corresponds');
    assert.equal(options[0].tagName, 'OPTION', 'the first option is an <option>');
    assert.equal(options[0].textContent, optionValues[0], 'the first <option> has the corresponding text');
    assert.equal(options[1].tagName, 'OPTION', 'the second option is an <option>');
    assert.equal(options[1].textContent, optionValues[1], 'the second <option> has the corresponding text');

    var group = optionValues[2];
    var optgroup = select.querySelector('optgroup');
    assert.equal(optgroup.label, group.optgroupLabel, 'the <optgroup> has the appropriate label');

    var optgroupOptions = optgroup.querySelectorAll('option');
    assert.equal(optgroupOptions.length, 2, '<optgroup> has the appropriate number of <option>s');

    assert.equal(optgroupOptions[0].tagName, 'OPTION', 'the third option is an <option>');
    assert.equal(optgroupOptions[0].textContent, group.options[0],
      'the third <option> has the corresponding text');
    assert.equal(optgroupOptions[1].tagName, 'OPTION', 'the fourth option is an <option>');
    assert.equal(optgroupOptions[1].textContent, group.options[1],
      'the fourth <option> has the corresponding text');
  });

  it('is styled appropriately', function() {
    var css = select.style;
    assert.equal(css.width, '200px', 'is 200px wide too (as LabeledTextField input is)');
    assert.equal(css.fontSize, '14px', 'has 14px font size');
    assert.equal(css.position, 'absolute', 'is absolutely-positioned to allow for precise vertical alignment without bothering the <label>');
    assert.equal(css.marginTop, '-2px', 'is shifted up 2px to vertically align with the <label>');
  });

  it('accepts and tells its value', function() {
    assert.equal(selectField.getValue(), optionValues[1], 'its getValue() method returns the selected option');
    select.value = optionValues[0];
    assert.equal(selectField.getValue(), optionValues[0], 'getValue() reflects the selected option');
  });

  it('can handle missing default value', function() {
    var selectField = new LabeledSelectField(labelText, optionValues);
    assert.equal(selectField.getValue(), optionValues[0], 'selects the first option if none specified');
  });

  it('is focusable', function() {
    document.body.appendChild(sandbox);

    selectField.focus();
    assert.equal(document.activeElement, select, 'focuses its <select>');

    document.body.removeChild(sandbox);
  });

  it('honors its callback', function() {
    select.dispatchEvent(new Event('change'));

    assert.equal(onChange.calls.length, 1, 'triggers the onChange callback when changing');
    assert.deepEqual(onChange.calls[0].args, [select.value], 'onChange callback was passed the new field value');
  });

  var createSpy = window.TestHelpers.createSpy;
  var assert = window.TestHelpers.assert;
});
