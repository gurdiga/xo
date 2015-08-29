(function() {
  'use strict';

  var PERSON_TYPES = definePersonTypes();
  var PERSON_TYPE_INTERNAL_NAME = 'gen-persoană';

  function PersonSection(labelText, fieldValues, additionalStyle) {
    var domElement = document.createElement('person-section');
    domElement.style.display = 'inline-block';
    _.extend(domElement.style, additionalStyle);

    var personTypeField = createPersonTypeField(fieldValues);
    var personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);

    var section = new Section(labelText, getAllFields());
    section.appendTo(domElement);

    personTypeField.onChange(function(personType) {
      personTypeSpecificFields.forEach(destroyField);
      fieldValues[PERSON_TYPE_INTERNAL_NAME] = personType;
      personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);
      section.appendWidgets(personTypeSpecificFields);
    });

    this.appendTo = getAppenderOf(domElement);

    this.insertAfter = function(siblingDomElement) {
      siblingDomElement.parentNode.insertBefore(domElement, siblingDomElement.nextSibling);
    };

    this.getValue = function() {
      var fieldValues = {};

      getAllFields().forEach(function(field) {
        fieldValues[field.internalName] = field.getValue();
      });

      return fieldValues;
    };

    function getAllFields() {
      return [personTypeField].concat(personTypeSpecificFields);
    }
  }

  PersonSection.PERSON_TYPES = PERSON_TYPES;

  function definePersonTypes() {
    var COMPANY = 'juridică';
    var INDIVIDUAL = 'fizică';

    var types = [COMPANY, INDIVIDUAL];
    types.COMPANY = COMPANY;
    types.INDIVIDUAL = INDIVIDUAL;

    return types;
  }

  function createPersonTypeField(fieldValues) {
    var personType = fieldValues[PERSON_TYPE_INTERNAL_NAME];
    var field = new SelectField('Gen persoană', PERSON_TYPES, personType);
    field.internalName = PERSON_TYPE_INTERNAL_NAME;
    return field;
  }

  function createPersonTypeSpecificFields(fieldValues) {
    var personType = fieldValues[PERSON_TYPE_INTERNAL_NAME];
    if (personType === PERSON_TYPES.INDIVIDUAL) return createFieldsForIndividual(fieldValues);
    else return createFieldsForCompany(fieldValues);
  }

  function createFieldsForIndividual(fieldValues) {
    return [
      createField(TextField, 'Nume', 'nume', fieldValues),
      createField(TextField, 'IDNP', 'idnp', fieldValues),
      createField(DateField, 'Data naşterii', 'data-naşterii', fieldValues),
      createField(LargeTextField, 'Domiciliu', 'domiciliu', fieldValues),
      createField(LargeTextField, 'Note', 'note', fieldValues)
    ];
  }

  function createFieldsForCompany(fieldValues) {
    return [
      createField(TextField, 'Denumire', 'denumire', fieldValues),
      createField(TextField, 'IDNO', 'idno', fieldValues),
      createField(LargeTextField, 'Sediu', 'sediu', fieldValues),
      createField(TextField, 'Persoană de contact', 'persoană-de-contact', fieldValues),
      createField(LargeTextField, 'Note', 'note', fieldValues)
    ];
  }

  function createField(FieldClass, labelText, internalName, fieldValues) {
    var field = new FieldClass(labelText, fieldValues[internalName]);
    field.internalName = internalName;
    return field;
  }

  function destroyField(field) {
    field.destroy();
  }

  var Section = window.App.Widgets.Section;
  var SelectField = window.App.Widgets.SelectField;
  var TextField = window.App.Widgets.TextField;
  var LargeTextField = window.App.Widgets.LargeTextField;
  var DateField = window.App.Widgets.DateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.PersonSection = PersonSection;

}());
