(function() {
  'use strict';

  var PersonSection = window.App.Widgets.PersonSection;
  var test = tape;

  var sandbox = document.createElement('div');
  var fieldValues = {
    'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL,
    'nume': 'John DOE',
    'idnp': '0123456789',
    'data-naşterii': '01.02.1960'
  };
  var label = 'Test person section';
  var additionalStyle = { width: '450px' };
  var personSection = new PersonSection(label, fieldValues, additionalStyle);
  personSection.appendTo(sandbox);

  test('PersonSection', function(t) {
    var domElement = sandbox.firstChild;
    t.equal(domElement.tagName, 'PERSON-SECTION', 'has the appropriate tag name');

    var css = domElement.style;
    t.equal(css.display, 'inline-block', 'has display inline-block');
    t.equal(css.width, additionalStyle.width, 'accepts additional CSS as the 3rd argument');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, label, 'section has the appropriate label');

    t.test('person type field', function(t) {
      document.body.appendChild(sandbox);

      var personTypeField = sandbox.querySelector('fieldset>labeled-select-field');

      t.equal(getLabel(personTypeField), 'Gen persoană', 'has the appropriate label');
      t.equal(getDOMValue(personTypeField), PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the default value of “fizică”');

      var optionTexts = getOptionTexts(personTypeField.querySelector('select'));
      t.equal(optionTexts.length, PersonSection.PERSON_TYPES.length, 'has the appropriate number of options');
      t.deepEqual(optionTexts, PersonSection.PERSON_TYPES, 'has PERSON as the first option');

      setPersonType(PersonSection.PERSON_TYPES.COMPANY);
      var expectedFieldLabelTexts = ['Gen persoană', 'Denumire', 'IDNO', 'Sediu', 'Persoană de contact', 'Note'];
      t.deepEqual(getLabelTexts(), expectedFieldLabelTexts, 'changes the fields appropriately');

      var nextFieldInput = getInputOfFieldBelowPersonTypeField(sandbox);
      t.equal(document.activeElement, nextFieldInput, 'focuses the first field');

      document.body.removeChild(sandbox);
      t.end();

      function setPersonType(personType) {
        var select = personTypeField.querySelector('select');
        select.value = personType;
        select.dispatchEvent(new Event('change'));
      }

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

    t.test('can be inserted after a given DOM element', function(t) {
      var sandbox = document.createElement('div');
      var firstChild = document.createElement('h1');
      var secondElement = document.createElement('p');
      sandbox.appendChild(firstChild);
      sandbox.appendChild(secondElement);

      var personSection = new PersonSection('Person', {});
      personSection.insertAfter(firstChild);
      var domElement = sandbox.querySelector('person-section');

      t.equal(domElement.previousSibling, firstChild, 'it’s inserted after the first element');
      t.equal(domElement.nextSibling, secondElement, 'it’s inserted before the second element');

      personSection.insertAfter(secondElement);
      t.equal(domElement.previousSibling, secondElement, 'can also insert after the last element');

      t.end();
    });

    t.test('is removable', function(t) {
      personSection.makeRemovable(onRemoveCallback);

      var domElement = sandbox.firstChild;
      t.equal(domElement.getAttribute('removable'), '', 'becames removable when executing its makeRemovable');

      t.test('remove button', function(t) {
        var button = domElement.querySelector('button[type="remove"]');

        t.test('styling', function(t) {
          var css = button.style;
          t.equal(css.top, '10px', 'aligns vertically with the section label');
          t.equal(css.left, '-22px', 'is out at the left');
          t.equal(css.fontSize, '20px', 'is large enough');
          t.equal(css.fontFamily, 'sans-serif', 'has font family of sans-serif');
          t.equal(css.opacity, '0', 'is initially hidden');

          domElement.dispatchEvent(new Event('mouseenter'));
          t.equal(css.opacity, '0.3', 'is shyly displayed on section mouseenter');

          domElement.dispatchEvent(new Event('mouseleave'));
          t.equal(css.opacity, '0', 'fades out section on mouseleave');

          t.end();
        });

        t.test('behavior', function(t) {
          button.click();
          t.ok(onRemoveCallback.executed, 'onRemoveCallback is executed when clicking on the remove button');

          t.end();
        });

        t.end();
      });

      t.end();

      function onRemoveCallback() {
        onRemoveCallback.executed = true;
      }
    });

    t.end();
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
    test('PersonSection has the appropriate fields when person type is “' + testData.personType + '”', function(t) {
      var sandbox = document.createElement('div');
      var section = new PersonSection(label, testData.fieldValues);
      section.appendTo(sandbox);

      testData.expectedFields.forEach(assertSectionField(sandbox, testData.fieldValues, t));

      t.end();
    });
  });

  var assertSectionField = window.TestHelpers.assertSectionField;
  var getOptionTexts = window.TestHelpers.getOptionTexts;
  var getLabel = window.TestHelpers.getLabel;
  var getDOMValue = window.TestHelpers.getDOMValue;

}());
