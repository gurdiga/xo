import * as _ from "lodash";
import {assert} from "app/utils/assert";

export function getFieldValueCollector(fields) {
  return function() {
    var fieldValues = {};

    if (typeof fields === 'function') fields = fields();

    fields.forEach(function(field) {
      assertValuableFieldWithInternalName(field);

      fieldValues[field.internalName] = field.getValue();
    });

    return fieldValues;
  };
}

function assertValuableFieldWithInternalName(field) {
  assert(field.internalName, 'Every field is expected to have an internalName');
  assert(_.isFunction(field.getValue), 'Every field is expected to have a getValue method');
}
