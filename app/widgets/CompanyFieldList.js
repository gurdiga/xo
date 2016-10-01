(function() {
  'use strict';

  CompanyFieldList.PERSON_TYPE_NAME = 'juridică';

  function CompanyFieldList(defaultFieldValues) {
    var domElement = createDOMElement('company-field-list');
    var fields = [
      createField(LabeledTextField, 'Denumire', 'denumire', defaultFieldValues),
      createField(LabeledTextField, 'IDNO', 'idno', defaultFieldValues),
      createField(LabeledLargeTextField, 'Sediu', 'sediu', defaultFieldValues),
      createField(LabeledTextField, 'Persoană de contact', 'persoană-de-contact', defaultFieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', defaultFieldValues)
    ];

    appendWidgets(fields).to(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.getFieldValues = getFieldValueCollector(fields);
  }

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var appendWidgets = window.App.Utils.appendWidgets;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.CompanyFieldList = CompanyFieldList;

}());
