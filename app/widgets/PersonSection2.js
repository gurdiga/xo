(function() {
  'use strict';

  function PersonSection2(titleText, fieldValues) {
    var domElement = createTitledContainer(titleText);
    WidgetRole.apply(this, [domElement]);

    var FieldList = IndividualFieldList;
    var defaultPersonTypeName = fieldValues['gen-persoană'] || FieldList.PERSON_TYPE_NAME;

    var personTypeField = createPersonTypeField(defaultPersonTypeName);
    personTypeField.appendTo(domElement);

    personTypeField.onChange(function(newPersonTypeName) {
      personTypeSpecificFieldList.remove();

      FieldList = newPersonTypeName === IndividualFieldList.PERSON_TYPE_NAME ?
        IndividualFieldList : CompanyFieldList;

      personTypeSpecificFieldList = new FieldList(fieldValues);
      personTypeSpecificFieldList.appendTo(domElement);
    });

    var personTypeSpecificFieldList = new FieldList(fieldValues);
    personTypeSpecificFieldList.appendTo(domElement);

    this.getFieldValues = function() {
      var personTypeSpecificFieldValues = personTypeSpecificFieldList.getFieldValues();
      var ownFieldValues = {
        'gen-persoană': personTypeField.getValue()
      };

      return _.extend(ownFieldValues, personTypeSpecificFieldValues);
    };
  }

  var SIDE_PADDING = '6px';

  function createTitledContainer(titleText) {
    var style = {
      'display': 'block',
      'padding-left': SIDE_PADDING
    };

    var container = createDOMElement('person-section', style);
    var title = createTitle(titleText);

    container.appendChild(title);
    container.setAttribute('role', 'region');

    return container;
  }

  function createTitle(titleText) {
    var style = {
      'font-family': 'TitleFont',
      'font-size': '22px',
      'color': 'white',
      'background-color': 'rgb(51, 51, 51)',
      'display': 'block',
      'padding': '8px ' + SIDE_PADDING,
      'margin-left': '-' + SIDE_PADDING,
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

    var personTypeField = new LabeledSelectField(labelText, optionTexts);

    personTypeField.setValue(defaultPersonTypeName);
    personTypeField.setInternalName('person-type');

    return personTypeField;
  }

  var WidgetRole = window.App.Widgets.WidgetRole;
  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var IndividualFieldList = window.App.Widgets.IndividualFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.PersonSection2 = PersonSection2;

}());
