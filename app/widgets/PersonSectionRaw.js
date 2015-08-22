(function() {
  'use strict';

  var PERSON_TYPES = definePersonTypes();
  var PERSON_TYPE_INTERNAL_NAME = 'gen-persoană';

  function PersonSectionRaw(labelText, fieldValues) {
    var domElement = document.createElement('person-section');
    domElement.style.display = 'block';

    var personTypeField = createPersonTypeField(fieldValues);
    var personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);

    var section = new SectionRaw(labelText, getAllFields());
    section.appendTo(domElement);

    personTypeField.onChange(function(personType) {
      personTypeSpecificFields.forEach(destroyField);
      fieldValues[PERSON_TYPE_INTERNAL_NAME] = personType;
      personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);
      section.appendWidgets(personTypeSpecificFields);
    });

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
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
    var field = new SelectFieldRaw('Gen persoană', PERSON_TYPES, personType);
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
      createField(TextFieldRaw, 'Nume', 'nume', fieldValues),
      createField(TextFieldRaw, 'IDNP', 'idnp', fieldValues),
      createField(DateFieldRaw, 'Data naşterii', 'data-naşterii', fieldValues),
      createField(LargeTextFieldRaw, 'Domiciliu', 'domiciliu', fieldValues),
      createField(LargeTextFieldRaw, 'Note', 'note', fieldValues)
    ];
  }

  function createFieldsForCompany(fieldValues) {
    return [
      createField(TextFieldRaw, 'Denumire', 'denumire', fieldValues),
      createField(TextFieldRaw, 'IDNO', 'idno', fieldValues),
      createField(LargeTextFieldRaw, 'Sediu', 'sediu', fieldValues),
      createField(TextFieldRaw, 'Persoană de contact', 'persoană-de-contact', fieldValues),
      createField(LargeTextFieldRaw, 'Note', 'note', fieldValues)
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

  var SectionRaw = window.App.Widgets.SectionRaw;
  var SelectFieldRaw = window.App.Widgets.SelectFieldRaw;
  var TextFieldRaw = window.App.Widgets.TextFieldRaw;
  var LargeTextFieldRaw = window.App.Widgets.LargeTextFieldRaw;
  var DateFieldRaw = window.App.Widgets.DateFieldRaw;

  window.App.Widgets.PersonSectionRaw = PersonSectionRaw;

}());
