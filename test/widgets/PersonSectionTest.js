describe('PersonSection', function() {
  'use strict';

  var PersonSection = window.App.Widgets.PersonSection;

  var sandbox, fieldValues, label, additionalStyle, personSection, domElement;

  before(function() {
    fieldValues = {
      'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL,
      'nume': 'John DOE',
      'idnp': '0123456789',
      'data-naşterii': '01.02.1960'
    };

    label = 'Test person section';
    additionalStyle = { width: '450px' };
    personSection = new PersonSection(label, fieldValues, additionalStyle);

    domElement = getWidgetDOMElement(personSection);
    sandbox = domElement.parentNode;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'PERSON-SECTION', 'has the appropriate tag name');
  });

  it('has the appropriate style', function() {
    var css = domElement.style;
    assert.equal(css.display, 'inline-block', 'has display inline-block');
    assert.equal(css.width, additionalStyle.width, 'accepts additional CSS as the 3rd argument');
  });

  it('has the appropriate label', function() {
    var labelText = domElement.querySelector('legend').textContent;
    assert.equal(labelText, label, 'section has the appropriate label');
  });

  describe('person type field', function() {
    it('works', function() {
      document.body.appendChild(sandbox);

      var personTypeField = sandbox.querySelector('fieldset>labeled-select-field');
      assert.equal(getLabel(personTypeField), 'Gen persoană', 'has the appropriate label');
      assert.equal(getDOMValue(personTypeField), PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the default value of “fizică”');

      var optionTexts = getOptionTexts(personTypeField.querySelector('select'));
      assert.equal(optionTexts.length, PersonSection.PERSON_TYPES.length, 'has the appropriate number of options');
      assert.deepEqual(optionTexts, PersonSection.PERSON_TYPES, 'has PERSON as the first option');

      setPersonType(PersonSection.PERSON_TYPES.COMPANY);
      var expectedFieldLabelTexts = ['Gen persoană', 'Denumire', 'IDNO', 'Sediu', 'Persoană de contact', 'Note'];
      assert.deepEqual(getLabelTexts(), expectedFieldLabelTexts, 'changes the fields appropriately');

      var nextFieldInput = getInputOfFieldBelowPersonTypeField(sandbox);
      assert.equal(document.activeElement, nextFieldInput, 'focuses the first field');

      document.body.removeChild(sandbox);

      function setPersonType(personType) {
        var select = personTypeField.querySelector('select');
        select.value = personType;
        select.dispatchEvent(new Event('change'));
      }
    });

    function getLabelTexts() {
      var fieldLabels = [].slice.call(sandbox.querySelectorAll('fieldset label>span'));
      return fieldLabels.map(get('textContent'));
    }

    function get(propertyName) {
      return function(o) {
        return o[propertyName];
      };
    }

    function getInputOfFieldBelowPersonTypeField(sandbox) {
      return sandbox.querySelector('fieldset>:nth-child(3)>label>:nth-child(2)');
    }
  });

  it('can be inserted after a given DOM element', function() {
    var sandbox = document.createElement('div');
    var firstChild = document.createElement('h1');
    var secondElement = document.createElement('p');
    sandbox.appendChild(firstChild);
    sandbox.appendChild(secondElement);

    var personSection = new PersonSection('Person', {});
    personSection.insertAfter(firstChild);
    var domElement = sandbox.querySelector('person-section');

    assert.equal(domElement.previousSibling, firstChild, 'it’s inserted after the first element');
    assert.equal(domElement.nextSibling, secondElement, 'it’s inserted before the second element');

    personSection.insertAfter(secondElement);
    assert.equal(domElement.previousSibling, secondElement, 'can also insert after the last element');
  });

  describe('remove button', function() {
    var button, onRemoveCallback;

    before(function() {
      onRemoveCallback = createSpy();
      personSection.makeRemovable(onRemoveCallback);
      button = domElement.querySelector('button[type="remove"]');
    });

    it('exists', function() {
      assert.equal(domElement.getAttribute('removable'), '', 'becames removable when executing its makeRemovable');
    });

    it('has the appropriate style', function() {
      var css = button.style;
      assert.equal(css.top, '10px', 'aligns vertically with the section label');
      assert.equal(css.left, '-22px', 'is out at the left');
      assert.equal(css.fontSize, '20px', 'is large enough');
      assert.equal(css.fontFamily, 'sans-serif', 'has font family of sans-serif');
      assert.equal(css.opacity, '0', 'is initially hidden');

      domElement.dispatchEvent(new Event('mouseenter'));
      assert.equal(css.opacity, '0.3', 'is shyly displayed on section mouseenter');

      domElement.dispatchEvent(new Event('mouseleave'));
      assert.equal(css.opacity, '0', 'fades out section on mouseleave');
    });

    it('works', function() {
      button.click();
      assert.ok(onRemoveCallback.executed, 'onRemoveCallback is executed when clicking on the remove button');
    });
  });

  [{
    personType: PersonSection.PERSON_TYPES.INDIVIDUAL,
    fieldValues: {
      'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL,
      'nume': 'John DOE',
      'idnp': '0123456789',
      'data-naşterii': '01.02.1960',
      'domiciliu': 'bd. Victoriei 5',
      'note': 'agreabil'
    },
    expectedFields: [
      ['Gen persoană',  'labeled-select-field',     'gen-persoană' ],
      ['Nume',          'labeled-text-field',       'nume'         ],
      ['IDNP',          'labeled-text-field',       'idnp'         ],
      ['Data naşterii', 'labeled-date-field',       'data-naşterii'],
      ['Domiciliu',     'labeled-large-text-field', 'domiciliu'    ],
      ['Note',          'labeled-large-text-field', 'note'         ]
    ]
  }, {
    personType: PersonSection.PERSON_TYPES.COMPANY,
    fieldValues: {
      'gen-persoană': PersonSection.PERSON_TYPES.COMPANY,
      'denumire': 'HAPPY SRL',
      'idno': '012345',
      'sediu': 'bd. Fericirii',
      'persoană-de-contact': 'Ion Cutărescu',
      'note': 'Yep'
    },
    expectedFields: [
      ['Gen persoană',        'labeled-select-field',     'gen-persoană'        ],
      ['Denumire',            'labeled-text-field',       'denumire'            ],
      ['IDNO',                'labeled-text-field',       'idno'                ],
      ['Sediu',               'labeled-large-text-field', 'sediu'               ],
      ['Persoană de contact', 'labeled-text-field',       'persoană-de-contact' ],
      ['Note',                'labeled-large-text-field', 'note'                ]
    ]
  }].forEach(function(testData) {
    it('has the appropriate fields when person type is “' + testData.personType + '”', function() {
      var sandbox = document.createElement('div');
      var section = new PersonSection(label, testData.fieldValues);
      section.appendTo(sandbox);

      testData.expectedFields.forEach(assertSectionField(sandbox, testData.fieldValues, assert));
    });
  });

  function assertSectionField(sandbox, fieldValues) {
    var fieldElements = sandbox.querySelectorAll('fieldset>:not(legend)');

    return function(field, i) {
      var fieldElement = fieldElements[i];

      var expectedLabel   = field[0];
      var expectedTagName = field[1];
      var internalName    = field[2];
      var expectedValue   = fieldValues[internalName];

      var orderNo = i + 1;
      var messagePrefix = 'field #' + orderNo + ' — ' + internalName + ' — ';

      assert.equal(getLabel(fieldElement),   expectedLabel,   messagePrefix + 'has the appropriate label');
      assert.equal(getTagName(fieldElement), expectedTagName, messagePrefix + 'is of the appropriate kind');
      assert.equal(getDOMValue(fieldElement), expectedValue,  messagePrefix + 'is prefilled with the appropriate value');
    };
  }

  function getTagName(fieldElement) {
    return fieldElement.tagName.toLowerCase();
  }

  var getOptionTexts = window.TestHelpers.getOptionTexts;
  var getLabel = window.TestHelpers.getLabel;
  var getDOMValue = window.TestHelpers.getDOMValue;
  var createSpy = window.TestHelpers.createSpy;
  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
