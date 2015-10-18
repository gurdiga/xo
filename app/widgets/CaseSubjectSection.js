(function() {
  'use strict';

  function CaseSubjectSection(fieldValues, additionalStyle) {
    var domElement = createDomElement();
    var fields = createFields();
    var section = new Section('Obiectul urmăririi', fields);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    function createDomElement() {
      var domElement = document.createElement('sentence-subject-section');
      domElement.style.display = 'inline-block';
      _.extend(domElement.style, additionalStyle);
      return domElement;
    }

    function createFields() {
      return [
        new SelectField('Obiectul urmăririi', SUBJECT_OPTIONS)
      ];
    }
  }

  var SUBJECT_OPTIONS = [
    'pecuniar',
    {
      optgroupLabel: 'nonpecuniar',
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

  CaseSubjectSection.SUBJECT_OPTIONS = SUBJECT_OPTIONS;

  var Section = window.App.Widgets.Section;
  var SelectField = window.App.Widgets.SelectField;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CaseSubjectSection = CaseSubjectSection;

}());
