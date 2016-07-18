(function() {
  'use strict';

  function PersonSection(labelText, fieldValues) {
    fieldValues = fieldValues || {};

    var domElement = createElement();

    var personTypeField = createPersonTypeField(fieldValues);
    var personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);
    personTypeField.onChange(renderPersonTypeSpecificFields);

    var section = new Section(labelText, getAllFields());
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.setStyle = getStylerOf(domElement);

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

    this.getValue = getFieldValueCollector(getAllFields);

    function getAllFields() {
      return [personTypeField].concat(personTypeSpecificFields);
    }

    function renderPersonTypeSpecificFields(personType) {
      personTypeSpecificFields.forEach(removeField);
      fieldValues[PERSON_TYPE_INTERNAL_NAME] = personType;
      personTypeSpecificFields = createPersonTypeSpecificFields(fieldValues);
      section.appendWidgets(personTypeSpecificFields);
      personTypeSpecificFields[0].focus();
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

  function createElement() {
    var style = {
      display: 'inline-block'
    };

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
    var field = new LabeledSelectField('Gen persoană', PERSON_TYPES, personType);
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
      createField(LabeledTextField, 'Nume', 'nume', fieldValues),
      createField(LabeledTextField, 'IDNP', 'idnp', fieldValues),
      createField(LabeledDateField, 'Data naşterii', 'data-naşterii', fieldValues),
      createField(LabeledLargeTextField, 'Domiciliu', 'domiciliu', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];
  }

  function createFieldsForCompany(fieldValues) {
    return [
      createField(LabeledTextField, 'Denumire', 'denumire', fieldValues),
      createField(LabeledTextField, 'IDNO', 'idno', fieldValues),
      createField(LabeledLargeTextField, 'Sediu', 'sediu', fieldValues),
      createField(LabeledTextField, 'Persoană de contact', 'persoană-de-contact', fieldValues),
      createField(LabeledLargeTextField, 'Note', 'note', fieldValues)
    ];
  }

  function removeField(field) {
    field.remove();
  }

  var Section = window.App.Widgets.Section;
  var LabeledSelectField = window.App.Widgets.LabeledSelectField;
  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var LabeledLargeTextField = window.App.Widgets.LabeledLargeTextField;
  var LabeledDateField = window.App.Widgets.LabeledDateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getStylerOf = window.App.Utils.getStylerOf;
  var makeRemovable = window.App.Utils.makeRemovable;
  var createDOMElement = window.App.Utils.createDOMElement;
  var createField = window.App.Utils.createField;
  var getFieldValueCollector = window.App.Utils.getFieldValueCollector;

  window.App.Widgets.PersonSection = PersonSection;

}());
