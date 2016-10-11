(function() {
  'use strict';

  IndividualFieldList.PERSON_TYPE_NAME = 'fizică';

  function IndividualFieldList(fieldValues) {
    var domElement = createDOMElement('person-field-list');
    var fields = [
      createField(LabeledTextField, 'Nume', 'nume', fieldValues),
      createField(LabeledTextField, 'IDNP', 'idnp', fieldValues),
      createField(LabeledDateField, 'Data nașterii', 'data-nașterii', fieldValues),
      createField(LabeledLargeTextField, 'Domiciliu', 'domiciliu', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];

    appendWidgets(fields).to(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.remove = getRemoverOf(domElement);
    this.getFieldValues = getFieldValueCollector(fields);
  }

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var appendWidgets = window.App.Utils.appendWidgets;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.IndividualFieldList = IndividualFieldList;

}());
