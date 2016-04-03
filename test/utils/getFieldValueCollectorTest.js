(function() {
  'use strict';

  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  tape('getFieldValueCollector', function(t) {
    var field1 = new LabeledTextField('Name', 'John Doe');
    field1.internalName = 'name';

    var field2 = new LabeledDateField('Date of birth', '01.01.1970');
    field2.internalName = 'date-of-birth';

    var getValue;

    t.test('when input is an array', function(t) {
      getValue = getFieldValueCollector([field1, field2]);

      t.deepEqual(getValue(), {
        'name': 'John Doe',
        'date-of-birth': '01.01.1970'
      }, 'the returned function returns the values of the fields keyed by their internalName');

      t.end();
    });

    t.test('when input is a function that returns an array of fields', function(t) {
      getValue = getFieldValueCollector(getFields);

      t.deepEqual(getValue(), {
        'name': 'John Doe',
        'date-of-birth': '01.01.1970'
      }, 'also works with a function that returns an array of fields');

      t.end();

      function getFields() {
        return [field1, field2];
      }
    });

    t.test('input validation', function(t) {
      t.throws(function() {
        var getValue = getFieldValueCollector([field1, field2, {}]);
        getValue();
      },
        /Every field is expected to have an internalName/,
        'throws a meaningful error when a field doesn’t have the internalName property'
      );

      t.throws(function() {
        var getValue = getFieldValueCollector([field1, field2, { internalName: 'yes' }]);
        getValue();
      },
        /Every field is expected to have a getValue method/,
        'throws a meaningful error when a field doesn’t have the internalName property'
      );

      t.end();
    });

    t.end();
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

}());
