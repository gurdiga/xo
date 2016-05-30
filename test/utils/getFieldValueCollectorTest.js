describe('getFieldValueCollector', function() {
  'use strict';

  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  var field1, field2, getValue;

  before(function() {
    field1 = new LabeledTextField('Name', 'John Doe');
    field1.internalName = 'name';

    field2 = new LabeledDateField('Date of birth', '01.01.1970');
    field2.internalName = 'date-of-birth';
  });

  it('works with an array of fields', function() {
    getValue = getFieldValueCollector([field1, field2]);

    assert.deepEqual(getValue(), {
      'name': 'John Doe',
      'date-of-birth': '01.01.1970'
    }, 'the returned function returns the values of the fields keyed by their internalName');
  });

  it('works when input is a function that returns an array of fields', function() {
    getValue = getFieldValueCollector(getFields);

    assert.deepEqual(getValue(), {
      'name': 'John Doe',
      'date-of-birth': '01.01.1970'
    }, 'also works with a function that returns an array of fields');

    function getFields() {
      return [field1, field2];
    }
  });

  it('validates input', function() {
    assert.throws(function() {
      var getValue = getFieldValueCollector([field1, field2, {}]);
      getValue();
    },
      /Every field is expected to have an internalName/,
      'throws a meaningful error when a field doesn’t have the internalName property'
    );

    assert.throws(function() {
      var getValue = getFieldValueCollector([field1, field2, { internalName: 'yes' }]);
      getValue();
    },
      /Every field is expected to have a getValue method/,
      'throws a meaningful error when a field doesn’t have the internalName property'
    );
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var assert = window.TestHelpers.assert;
});
