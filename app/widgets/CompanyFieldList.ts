(function() {
  'use strict';

  CompanyFieldList.PERSON_TYPE_NAME = 'juridică';

  function CompanyFieldList(fieldValues) {
    var domElement = createDOMElement('company-field-list');
    WidgetRole.apply(this, [domElement]);

    var fields = [
      createField(LabeledTextField, 'Denumire', 'denumire', fieldValues),
      createField(LabeledTextField, 'IDNO', 'idno', fieldValues),
      createField(LabeledLargeTextField, 'Sediu', 'sediu', fieldValues),
      createField(LabeledTextField, 'Persoană de contact', 'persoană-de-contact', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];

    appendWidgets(fields).to(domElement);

    this.getFieldValues = getFieldValueCollector(fields);
  }

  var WidgetRole = window.App.Widgets.WidgetRole;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var appendWidgets = window.App.Utils.appendWidgets;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.CompanyFieldList = CompanyFieldList;

}());
