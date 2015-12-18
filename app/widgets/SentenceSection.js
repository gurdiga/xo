(function() {
  'use strict';

  function SentenceSection(fieldValues, additionalStyles) {
    var domElement = createElement(additionalStyles);
    var fields = createFields(fieldValues);
    var section = new Section('Documentul executoriu', fields);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.insertAfter = function(siblingDomElement) {
      siblingDomElement.parentNode.insertBefore(domElement, siblingDomElement.nextSibling);
    };

    this.getValue = function() {
      var fieldValues = {};

      fields.forEach(function(field) {
        fieldValues[field.internalName] = field.getValue();
      });

      return fieldValues;
    };
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
      createSelectField('Instanţa de judecată', 'instanţa-de-judecată', COURT_LEVELS_AS_OPTGROUPS),
      createField(TextField, 'Numărul hotărîrii', 'numărul-hotărîrii'),
      createField(LabeledDateField, 'Data hotărîrii', 'data-hotărîrii'),
      createField(LabeledLargeTextField, 'Dispozitivul', 'dispozitivul'),
      createSelectField('Obiectul urmăririi', 'obiectul-urmăririi', SUBJECT_OPTIONS),
      createField(LabeledDateField, 'Data rămînerii definitive', 'data-rămînerii-definitive'),
      createField(LabeledDateField, 'Data eliberării', 'data-eliberării')
    ];

    function createSelectField(labelText, internalName, options) {
      var field = new SelectField(labelText, options, fieldValues[internalName]);
      field.internalName = internalName;
      return field;
    }

    function createField(FieldClass, labelText, internalName) {
      var field = new FieldClass(labelText, fieldValues[internalName]);
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
  var SelectField = window.App.Widgets.SelectField;
  var TextField = window.App.Widgets.TextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.SentenceSection = SentenceSection;

}());
