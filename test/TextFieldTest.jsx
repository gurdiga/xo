'use strict';

var TextField = require('../app/ui/TextField.jsx');

tape('TextField', function(t) {
  var sandbox = document.createElement('div');
  var labelText = 'My text-field component';
  var fieldValue = 'Hi!';
  var textField = React.render(
    <TextField
      label={labelText}
      value={fieldValue}
    />,
    sandbox
  );

  t.ok(true, 'Can render the TextField to a DOM sandbox');

  var label = sandbox.querySelector('label');
  t.ok(label, 'It renders a <label> element');
  t.equal(label.textContent, labelText,
    'The <label> element contains the text given in the “label” attribute');

  var input = sandbox.querySelector('input[type="text"]');
  t.ok(input, 'It renders an <input type="text"/> element');
  t.equal(input.value, fieldValue,
    'The <intput /> has the value given in the TextField “value” attribute');
  t.equal(textField.getValue(), input.value,
    'Its getValue() method returns the <input> value');

  var newFieldValue = 'I have changed';
  input.value = newFieldValue;
  React.addons.TestUtils.Simulate.change(input);

  t.equal(newFieldValue, input.value, 'The <input> is editable');
  t.equal(textField.getValue(), newFieldValue,
    'Its getValue() method returns the changed <input> value');

  t.end();
});
