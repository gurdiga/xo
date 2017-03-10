import {getFieldValueCollector} from "app/utils/getFieldValueCollector";
import {LabeledDateField} from "app/widgets/LabeledDateField";
import {LabeledTextField} from "app/widgets/LabeledTextField";
import {assert} from "test/helper";

describe('getFieldValueCollector', function() {
  'use strict';

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
      'Every field is expected to have an internalName'
    );

    assert.throws(function() {
      var getValue = getFieldValueCollector([field1, field2, { internalName: 'yes' }]);
      getValue();
    },
      'Every field is expected to have a getValue method'
    );
  });
});
