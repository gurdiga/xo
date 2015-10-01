(function() {
  'use strict';

  function SentenceSubjectSection() {
    var domElement = createDomElement();
    var fields = createFields();
    var section = new Section('Obiectul urmăririi', fields);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    function createDomElement() {
      var domElement = document.createElement('sentence-subject-section');
      domElement.style.display = 'inline-block';
      return domElement;
    }

    function createFields() {
      return [
        new SelectField('Caracter', ['pecuniar', 'nonpecuniar'])
      ];
    }
  }

  var Section = window.App.Widgets.Section;
  var SelectField = window.App.Widgets.SelectField;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.SentenceSubjectSection = SentenceSubjectSection;

}());
