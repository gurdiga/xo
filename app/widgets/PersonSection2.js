(function() {
  'use strict';

  function PersonSection2(titleText) {
    var domElement = createTitledContainer(titleText);

    var FieldList = PersonFieldList;
    var defaultPersonTypeName = FieldList.PERSON_TYPE_NAME;

    var personTypeField = createPersonTypeField(defaultPersonTypeName);
    personTypeField.appendTo(domElement);

    personTypeField.onChange(function(newPersonTypeName) {
      personTypeSpecificFieldList.remove();

      FieldList = PersonTypeSpecificFieldListRegistry.findByName(newPersonTypeName);
      personTypeSpecificFieldList = new FieldList({});
      personTypeSpecificFieldList.appendTo(domElement);
    });

    var personTypeSpecificFieldList = new FieldList({});
    personTypeSpecificFieldList.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createTitledContainer(titleText) {
    var container = createDOMElement('person-section');
    var title = createDOMElement('section-title');

    title.textContent = titleText;
    container.appendChild(title);

    return container;
  }

  function createPersonTypeField(defaultPersonTypeName) {
    var labelText = 'Gen persoană';
    var optionTexts = [
      PersonFieldList.PERSON_TYPE_NAME,
      CompanyFieldList.PERSON_TYPE_NAME
    ];

    return new LabeledSelectField(labelText, optionTexts, defaultPersonTypeName);
  }

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var PersonFieldList = window.App.Widgets.PersonFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;
  var PersonTypeSpecificFieldListRegistry = window.App.Widgets.PersonTypeSpecificFieldListRegistry;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());
