(function() {
  'use strict';

  function PersonSection2(titleText) {
    var domElement = createTitledContainer(titleText);

    var FieldList = IndividualFieldList;
    var defaultPersonTypeName = FieldList.PERSON_TYPE_NAME;

    var personTypeField = createPersonTypeField(defaultPersonTypeName);
    personTypeField.appendTo(domElement);

    personTypeField.onChange(function(newPersonTypeName) {
      personTypeSpecificFieldList.remove();

      FieldList = newPersonTypeName === IndividualFieldList.PERSON_TYPE_NAME ?
        IndividualFieldList : CompanyFieldList;

      personTypeSpecificFieldList = new FieldList({});
      personTypeSpecificFieldList.appendTo(domElement);
    });

    var personTypeSpecificFieldList = new FieldList({});
    personTypeSpecificFieldList.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createTitledContainer(titleText) {
    var container = createDOMElement('person-section');
    var title = createTitle(titleText);

    container.appendChild(title);

    return container;
  }

  function createTitle(titleText) {
    var style = {
      'font-family': 'TitleFont',
      'font-size': '22px',
      'color': 'white',
      'background-color': 'rgb(51, 51, 51)',
      'display': 'block',
      'padding': '8px 6px',
      'margin-bottom': '12px'
    };

    var title = createDOMElement('section-title', style);

    title.textContent = titleText;

    return title;
  }

  function createPersonTypeField(defaultPersonTypeName) {
    var labelText = 'Gen persoană';
    var optionTexts = [
      IndividualFieldList.PERSON_TYPE_NAME,
      CompanyFieldList.PERSON_TYPE_NAME
    ];

    return new LabeledSelectField(labelText, optionTexts, defaultPersonTypeName);
  }

  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var IndividualFieldList = window.App.Widgets.IndividualFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());
