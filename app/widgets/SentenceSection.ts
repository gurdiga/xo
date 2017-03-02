import {Courts} from "app/data/Courts";
import {WidgetRole} from "app/widgets/WidgetRole";
import {Section} from "app/widgets/Section";
import {LabeledSelectField} from "app/widgets/LabeledSelectField";
import {LabeledTextField} from "app/widgets/LabeledTextField";
import {LabeledLargeTextField} from "app/widgets/LabeledLargeTextField";
import {LabeledDateField} from "app/widgets/LabeledDateField";
import {createDOMElement} from "app/utils/createDOMElement";
import {createField} from "app/utils/createField";
import {getFieldValueCollector} from "app/utils/getFieldValueCollector";

var COURT_LEVELS_AS_OPTGROUPS = Courts.map(courLevelAsOptgroup);
var SUBJECT_OPTIONS = [
  'pecuniar',
  {
    optgroupLabel: 'nepecuniar',
    options: [
      'evacuarea',
      'evacuarea',
      'instalarea',
      'schimbul forţat',
      'stabilirea domiciliului copilului',
      'efectuarea de către debitor a unor acţiuni obligatorii, nelegate de remiterea unor sume sau bunuri',
      'efectuarea de către debitor a unor acţiuni obligatorii, legate de remiterea unor bunuri mobile',
      'efectuarea de către debitor a unor acţiuni obligatorii, legate de remiterea unor bunuri imobile',
      'confiscarea bunurilor',
      'nimicirea bunurilor',
      'restabilirea la locul de muncă',
      'aplicarea măsurilor de asigurare a acţiunii'
    ]
  }
];

export function SentenceSection(fieldValues) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var fields = createFields(fieldValues);
  var section = new Section('Document executoriu');

  section.appendWidgets(fields);
  section.appendTo(domElement);

  this.getValue = getFieldValueCollector(fields);
}

function createElement() {
  var style = {
    display: 'inline-block'
  };

  return createDOMElement('sentence-section', style);
}

function createFields(fieldValues) {
  return [
    createLabeledSelectField('Instanţa de judecată', 'instanţa-de-judecată', COURT_LEVELS_AS_OPTGROUPS),
    createField(LabeledTextField, 'Numărul hotărîrii', 'numărul-hotărîrii', fieldValues),
    createField(LabeledDateField, 'Data hotărîrii', 'data-hotărîrii', fieldValues),
    createField(LabeledLargeTextField, 'Dispozitivul', 'dispozitivul', fieldValues),
    createLabeledSelectField('Obiectul urmăririi', 'obiectul-urmăririi', SUBJECT_OPTIONS),
    // Poate de arătat mesaj de atenţionare dacă intentarea e prea tîrzie
    // relativ la provederile articolelor 16 şi 17.
    createField(LabeledDateField, 'Data rămînerii definitive', 'data-rămînerii-definitive', fieldValues),
    createField(LabeledDateField, 'Data eliberării', 'data-eliberării', fieldValues)
  ];

  function createLabeledSelectField(labelText, internalName, options) {
    var field = new LabeledSelectField(labelText, options, fieldValues[internalName]);
    field.internalName = internalName;
    return field;
  }
}

function courLevelAsOptgroup(courtLevel) {
  return {
    optgroupLabel: courtLevel.levelLabel,
    options: courtLevel.courtList
  };
}
