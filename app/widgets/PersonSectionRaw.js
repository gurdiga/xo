(function() {
  'use strict';

  var PERSON_TYPES = definePersonTypes();
  var PERSON_TYPE_INTERNAL_NAME = 'gen-persoană';

  function PersonSectionRaw(labelText, value) {
    var domElement = document.createElement('person-section');
    domElement.style.display = 'block';

    var fields = createFields();
    var section = new SectionRaw(labelText, fields);
    section.appendTo(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.getValue = function() {
      var value = {};

      fields.forEach(function(field) {
        value[field.internalName] = field.getValue();
      });

      return value;
    };

    function createFields() {
      var personTypeField = createPersonTypeField();
      var personTypeSpecificFields = createPersonTypeSpecificFields();

      return [personTypeField].concat(personTypeSpecificFields);
    }

    function createPersonTypeField() {
      var field = new SelectFieldRaw('Gen persoană', PERSON_TYPES, getPersonType());
      field.internalName = PERSON_TYPE_INTERNAL_NAME;

      return field;
    }

    function createPersonTypeSpecificFields() {
      if (getPersonType() === PERSON_TYPES.INDIVIDUAL) return createFieldsForIndividual(value);
      else return createFieldsForCompany(value);
    }

    function getPersonType() {
      return value[PERSON_TYPE_INTERNAL_NAME];
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

  function createFieldsForIndividual(value) {
    return [
      createField(TextFieldRaw, 'Nume', 'nume', value),
      createField(TextFieldRaw, 'IDNP', 'idnp', value),
      createField(DateFieldRaw, 'Data naşterii', 'data-naşterii', value),
      createField(LargeTextFieldRaw, 'Domiciliu', 'domiciliu', value),
      createField(LargeTextFieldRaw, 'Note', 'note', value)
    ];
  }

  function createFieldsForCompany(value) {
    return [
      createField(TextFieldRaw, 'Denumire', 'denumire', value),
      createField(TextFieldRaw, 'IDNO', 'idno', value),
      createField(LargeTextFieldRaw, 'Sediu', 'sediu', value),
      createField(TextFieldRaw, 'Persoană de contact', 'persoană-de-contact', value),
      createField(LargeTextFieldRaw, 'Note', 'note', value)
    ];
  }

  function createField(FieldClass, labelText, internalName, value) {
    var field = new FieldClass(labelText, value[internalName]);
    field.internalName = internalName;
    return field;
  }

  var SectionRaw = window.App.Widgets.SectionRaw;
  var SelectFieldRaw = window.App.Widgets.SelectFieldRaw;
  var TextFieldRaw = window.App.Widgets.TextFieldRaw;
  var LargeTextFieldRaw = window.App.Widgets.LargeTextFieldRaw;
  var DateFieldRaw = window.App.Widgets.DateFieldRaw;

  window.App.Widgets.PersonSectionRaw = PersonSectionRaw;

}());
