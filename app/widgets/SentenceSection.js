(function() {
  'use strict';

  function SentenceSection(fieldValues, additionalStyles) {
    var domElement = createDomElement();
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

    function createDomElement() {
      var domElement = document.createElement('sentence-section');
      var style = {
        display: 'inline-block'
      };
      _.extend(domElement.style, style, additionalStyles);

      return domElement;
    }
  }

  function createFields(fieldValues) {
    return [
      createSelectField('Instanţa de judecată', 'instanţa-de-judecată', COURT_LEVELS_AS_OPTGROUPS),
      createField(TextField, 'Numărul hotărîrii', 'numărul-hotărîrii'),
      createField(DateField, 'Data hotărîrii', 'data-hotărîrii'),
      createField(LargeTextField, 'Dispozitivul', 'dispozitivul'),
      createSelectField('Obiectul urmăririi', 'obiectul-urmăririi', SUBJECT_OPTIONS),
      createField(DateField, 'Data rămînerii definitive', 'data-rămînerii-definitive'),
      createField(DateField, 'Data eliberării', 'data-eliberării')
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
  var LargeTextField = window.App.Widgets.LargeTextField;
  var DateField = window.App.Widgets.DateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.SentenceSection = SentenceSection;

}());
