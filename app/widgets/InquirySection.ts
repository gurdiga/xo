import {Section} from "app/widgets/Section";
import {LabeledTextField} from "app/widgets/LabeledTextField";
import {LabeledDateField} from "app/widgets/LabeledDateField";
import {createDOMElement} from "app/utils/createDOMElement";
import {getAppenderOf} from "app/utils/getAppenderOf";
import {getStylerOf} from "app/utils/getStylerOf";
import {createField} from "app/utils/createField";
import {getFieldValueCollector} from "app/utils/getFieldValueCollector";

export function InquirySection(fieldValues) {
  var domElement = createDOMElement('INQUIRY-SECTION');

  var childWidgets = [
    createField(LabeledTextField, 'Numărul de înregistrare', 'numărul-de-înregistrare', fieldValues),
    createField(LabeledDateField, 'Data depunerii cererii', 'data-depunerii', fieldValues)
  ];

  var section = createSection(childWidgets);
  section.appendTo(domElement);

  this.getValue = getFieldValueCollector(childWidgets);
  this.appendTo = getAppenderOf(domElement);
  this.setStyle = getStylerOf(domElement);
}

function createSection(childWidgets) {
  var labelText = 'Cerere de intentare';
  var section = new Section(labelText);

  section.appendWidgets(childWidgets);

  return section;
}
