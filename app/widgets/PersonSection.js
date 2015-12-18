(function() {
  'use strict';

  function PersonSection(labelText, fieldValues, additionalStyle) {
    fieldValues = fieldValues || {};

    var domElement = createElement(additionalStyle);

    var personTypeField = createPersonTypeField(fieldValues);
    var personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);
    personTypeField.onChange(renderTypeAppropriateFields);

    var section = new Section(labelText, getAllFields());
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.insertAfter = function(siblingDomElement) {
      siblingDomElement.parentNode.insertBefore(domElement, siblingDomElement.nextSibling);
    };

    this.makeRemovable = function(onRemoveCallback) {
      var buttonStyle = {
        top: '10px',
        fontSize: '20px',
        color: 'black'
      };

      makeRemovable(domElement, onRemoveCallback, buttonStyle);
      hideRemoveButtonUnlessOver();
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

    function renderTypeAppropriateFields(personType) {
      personTypeSpecificFields.forEach(destroyField);
      fieldValues[PERSON_TYPE_INTERNAL_NAME] = personType;
      personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);
      section.appendWidgets(personTypeSpecificFields);
    }

    function hideRemoveButtonUnlessOver() {
      var removeButton = domElement.querySelector('button[type="remove"]');
      var initialOpacity = removeButton.style.opacity;
      removeButton.style.opacity = '0';

      domElement.addEventListener('mouseenter', function() {
        removeButton.style.opacity = initialOpacity;
      });

      domElement.addEventListener('mouseleave', function() {
        removeButton.style.opacity = '0';
      });
    }
  }

  function createElement(additionalStyle) {
    var style = {
      display: 'inline-block'
    };

    _.extend(style, additionalStyle);

    return createDOMElement('person-section', style);
  }

  var createEnumArray = window.App.Utils.createEnumArray;

  var PERSON_TYPES = createEnumArray({
    COMPANY: 'juridică',
    INDIVIDUAL: 'fizică'
  });

  var PERSON_TYPE_INTERNAL_NAME = 'gen-persoană';

  PersonSection.PERSON_TYPES = PERSON_TYPES;

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
      createField(LabeledDateField, 'Data naşterii', 'data-naşterii', fieldValues),
      createField(LabeledLargeTextField, 'Domiciliu', 'domiciliu', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];
  }

  function createFieldsForCompany(fieldValues) {
    return [
      createField(TextField, 'Denumire', 'denumire', fieldValues),
      createField(TextField, 'IDNO', 'idno', fieldValues),
      createField(LabeledLargeTextField, 'Sediu', 'sediu', fieldValues),
      createField(TextField, 'Persoană de contact', 'persoană-de-contact', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
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
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var makeRemovable = window.App.Utils.makeRemovable;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.PersonSection = PersonSection;

}());
