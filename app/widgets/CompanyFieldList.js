(function() {
  'use strict';

  CompanyFieldList.PERSON_TYPE_NAME = 'juridică';

  function CompanyFieldList(fieldValues) {
    var domElement = createDOMElement('company-field-list');
    var fields = [
      createField(LabeledTextField, 'Denumire', 'denumire', fieldValues),
      createField(LabeledTextField, 'IDNO', 'idno', fieldValues),
      createField(LabeledLargeTextField, 'Sediu', 'sediu', fieldValues),
      createField(LabeledTextField, 'Persoană de contact', 'persoană-de-contact', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];

    appendWidgets(fields).to(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.remove = getRemoverOf(domElement);
    this.getFieldValues = getFieldValueCollector(fields);
  }

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var appendWidgets = window.App.Utils.appendWidgets;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.CompanyFieldList = CompanyFieldList;

}());
