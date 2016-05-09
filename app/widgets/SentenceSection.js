(function() {
  'use strict';

  function SentenceSection(fieldValues, additionalStyles) {
    var domElement = createElement(additionalStyles);
    var fields = createFields(fieldValues);
    var section = new Section('Document executoriu', fields);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.getValue = getFieldValueCollector(fields);
  }

  function createElement(additionalStyles) {
    var style = {
      display: 'inline-block'
    };

    _.extend(style, additionalStyles);

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

  var Courts = window.App.Data.Courts;
  var COURT_LEVELS_AS_OPTGROUPS = Courts.map(courLevelAsOptgroup);

  function courLevelAsOptgroup(courtLevel) {
    return {
      optgroupLabel: courtLevel.levelLabel,
      options: courtLevel.courtList
    };
  }

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

  var Section = window.App.Widgets.Section;
  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.SentenceSection = SentenceSection;

}());
