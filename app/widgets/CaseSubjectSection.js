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
        new SelectField('Caracter', SUBJECT_TYPES)
      ];
    }
  }

  var createEnumArray = window.App.Utils.createEnumArray;

  var SUBJECT_TYPES = createEnumArray({
    PECUNIARY: 'pecuniar',
    NONPECUNIARY: 'nonpecuniar'
  });

  CaseSubjectSection.SUBJECT_TYPES = SUBJECT_TYPES;

  var Section = window.App.Widgets.Section;
  var SelectField = window.App.Widgets.SelectField;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CaseSubjectSection = CaseSubjectSection;

}());
