(function() {
  'use strict';

  var createField = window.App.Utils.createField;

  tape('createField', function(t) {
    var labelText = 'First name';
    var internalName = 'first-name';
    var fieldValues = { 'first-name': 'John' };

    var field = createField(LabeledTextField, labelText, internalName, fieldValues);
    var fieldElement = getDOMElement(field);

    t.ok(field instanceof LabeledTextField, 'creates an instance of the given field');
    t.equal(field.internalName, internalName, 'sets the internalName as given');
    t.equal(field.getValue(), fieldValues['first-name'], 'sets the field value as given');
    t.equal(getLabel(fieldElement), labelText, 'sets the field label as given');

    t.end();

    function getDOMElement(field) {
      var sandbox = document.createElement('div');
      field.appendTo(sandbox);
      return sandbox.firstChild;
    }
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var getLabel = window.TestHelpers.getLabel;

}());
