import {appendWidgets} from "app/utils/appendWidgets";
import {WidgetRole} from "app/widgets/WidgetRole";
import {LabeledTextField} from "app/widgets/LabeledTextField";
import {LabeledLargeTextField} from "app/widgets/LabeledLargeTextField";
import {LabeledDateField} from "app/widgets/LabeledDateField";
import {createDOMElement} from "app/utils/createDOMElement";
import {createField} from "app/utils/createField";
import {getFieldValueCollector} from "app/utils/getFieldValueCollector";

IndividualFieldList.PERSON_TYPE_NAME = 'fizică';

export function IndividualFieldList(fieldValues) {
  var domElement = createDOMElement('person-field-list');
  WidgetRole.apply(this, [domElement]);

  var fields = [
    createField(LabeledTextField, 'Nume', 'nume', fieldValues),
    createField(LabeledTextField, 'IDNP', 'idnp', fieldValues),
    createField(LabeledDateField, 'Data nașterii', 'data-nașterii', fieldValues),
    createField(LabeledLargeTextField, 'Domiciliu', 'domiciliu', fieldValues),
    createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
  ];

  appendWidgets(fields).to(domElement);

  this.getFieldValues = getFieldValueCollector(fields);
}
