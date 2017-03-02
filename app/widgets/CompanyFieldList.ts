import {appendWidgets} from "app/utils/appendWidgets";
import {WidgetRole} from "app/widgets/WidgetRole";
import {LabeledTextField} from "app/widgets/LabeledTextField";
import {LabeledLargeTextField} from "app/widgets/LabeledLargeTextField";
import {createDOMElement} from "app/utils/createDOMElement";
import {createField} from "app/utils/createField";
import {getFieldValueCollector} from "app/utils/getFieldValueCollector";

CompanyFieldList.PERSON_TYPE_NAME = 'juridică';

export function CompanyFieldList(fieldValues) {
  var domElement = createDOMElement('company-field-list');
  WidgetRole.apply(this, [domElement]);

  var fields = [
    createField(LabeledTextField, 'Denumire', 'denumire', fieldValues),
    createField(LabeledTextField, 'IDNO', 'idno', fieldValues),
    createField(LabeledLargeTextField, 'Sediu', 'sediu', fieldValues),
    createField(LabeledTextField, 'Persoană de contact', 'persoană-de-contact', fieldValues),
    createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
  ];

  appendWidgets(fields).to(domElement);

  this.getFieldValues = getFieldValueCollector(fields);
}
