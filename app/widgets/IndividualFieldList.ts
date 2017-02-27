(function() {
  'use strict';

  IndividualFieldList.PERSON_TYPE_NAME = 'fizică';

  function IndividualFieldList(fieldValues) {
    var domElement = createDOMElement('person-field-list');
    WidgetRole.apply(this, [domElement]);

    var fields = [
      createField(LabeledTextField, 'Nume', 'nume', fieldValues),
      createField(LabeledTextField, 'IDNP', 'idnp', fieldValues),
      createField(LabeledDateField, 'Data nașterii', 'data-nașterii', fieldValues),
      createField(LabeledLargeTextField, 'Domiciliu', 'domiciliu', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];

    appendWidgets(fields).to(domElement);

    this.getFieldValues = getFieldValueCollector(fields);
  }

  var WidgetRole = window.App.Widgets.WidgetRole;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var appendWidgets = window.App.Utils.appendWidgets;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.IndividualFieldList = IndividualFieldList;

}());
