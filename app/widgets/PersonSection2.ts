import * as _ from "lodash";
import {WidgetRole} from "app/widgets/WidgetRole";
import {LabeledSelectField} from "app/widgets/LabeledSelectField";
import {IndividualFieldList} from "app/widgets/IndividualFieldList";
import {CompanyFieldList} from "app/widgets/CompanyFieldList";
import {createDOMElement} from "app/utils/createDOMElement";
import {getUID} from "app/utils/getUID";

export function PersonSection2(titleText, fieldValues) {
  var domElement = createTitledContainer(titleText);
  WidgetRole.apply(this, [domElement]);

  var FieldList = IndividualFieldList;
  var defaultPersonTypeName = fieldValues['gen-persoană'] || FieldList.PERSON_TYPE_NAME;

  var personTypeField = createPersonTypeField(defaultPersonTypeName);
  personTypeField.appendTo(domElement);

  personTypeField.onChange(function(newPersonTypeName) {
    personTypeSpecificFieldList.remove();

    FieldList = newPersonTypeName === IndividualFieldList.PERSON_TYPE_NAME ?
      IndividualFieldList : CompanyFieldList;

    personTypeSpecificFieldList = new FieldList(fieldValues);
    personTypeSpecificFieldList.appendTo(domElement);
  });

  var personTypeSpecificFieldList = new FieldList(fieldValues);
  personTypeSpecificFieldList.appendTo(domElement);

  this.getFieldValues = function() {
    var personTypeSpecificFieldValues = personTypeSpecificFieldList.getFieldValues();
    var ownFieldValues = {
      'gen-persoană': personTypeField.getValue()
    };

    return _.extend(ownFieldValues, personTypeSpecificFieldValues);
  };
}

var SIDE_PADDING = '6px';

function createTitledContainer(titleText) {
  var style = {
    'display': 'block',
    'padding-left': SIDE_PADDING
  };

  var uid = getUID();
  var container = createDOMElement('person-section', style);
  var title = createTitle(titleText, uid);

  container.appendChild(title);
  container.setAttribute('role', 'region');
  container.setAttribute('aria-labelledby', uid);

  return container;
}

function createTitle(titleText, uid) {
  var style = {
    'font-family': 'TitleFont',
    'font-size': '22px',
    'color': 'white',
    'background-color': 'rgb(51, 51, 51)',
    'display': 'block',
    'padding': '8px ' + SIDE_PADDING,
    'margin-left': '-' + SIDE_PADDING,
    'margin-bottom': '12px'
  };

  var title = createDOMElement('section-title', style);

  title.textContent = titleText;
  title.id = uid;

  return title;
}

function createPersonTypeField(defaultPersonTypeName) {
  var labelText = 'Gen persoană';
  var optionTexts = [
    IndividualFieldList.PERSON_TYPE_NAME,
    CompanyFieldList.PERSON_TYPE_NAME
  ];

  var personTypeField = new LabeledSelectField(labelText, optionTexts);

  personTypeField.setValue(defaultPersonTypeName);
  personTypeField.setInternalName('person-type');

  return personTypeField;
}
