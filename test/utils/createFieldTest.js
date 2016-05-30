describe('createField', function() {
  'use strict';

  var createField = window.App.Utils.createField;

  var labelText, internalName, fieldValues, field, fieldElement;

  before(function() {
    labelText = 'First name';
    internalName = 'first-name';
    fieldValues = { 'first-name': 'John' };

    field = createField(LabeledTextField, labelText, internalName, fieldValues);
    fieldElement = getDOMElement(field);
  });

  it('works', function() {
    assert(field instanceof LabeledTextField, 'creates an instance of the given field');
    assert.equal(field.internalName, internalName, 'sets the internalName as given');
    assert.equal(field.getValue(), fieldValues['first-name'], 'sets the field value as given');
    assert.equal(getLabel(fieldElement), labelText, 'sets the field label as given');
  });

  function getDOMElement(field) {
    var sandbox = document.createElement('div');
    field.appendTo(sandbox);
    return sandbox.firstChild;
  }

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var getLabel = window.TestHelpers.getLabel;
  var assert = window.TestHelpers.assert;
});
