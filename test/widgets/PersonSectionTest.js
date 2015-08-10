(function() {
  'use strict';

  var PersonSection = window.App.Widgets.PersonSection;
  var test = tape;

  var value = {
    'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL,
    'nume': 'John DOE',
    'idnp': '0123456789',
    'data-naşterii': '01.02.1960'
  };
  var label = 'Test person section';
  var renderIntoDocument = React.addons.TestUtils.renderIntoDocument;

  var personSection = renderIntoDocument(e(PersonSection, {label: label, value: value}));

  test('PersonSection', function(t) {
    t.equal(getSectionLabel(), label, 'section has the appropriate label');

    t.test('person type field', function(t) {
      t.equal(getFieldLabel('gen-persoană'), 'Gen persoană', 'has the appropriate label');
      t.equal(getFieldOnChangeHandler('gen-persoană'), personSection.onPersonTypeChange, 'has the appropriate onChange');
      t.equal(getFieldValue('gen-persoană'), PersonSection.PERSON_TYPES.INDIVIDUAL, 'has the default value of “fizică”');

      var optionTexts = getOptionTexts();

      PersonSection.PERSON_TYPES.forEach(function(type) {
        t.ok(optionTexts.indexOf(type) > -1, 'has the “' + type + '” option');
      });

      t.end();

      function getFieldLabel(id) {
        return personSection.refs[id].props.label;
      }

      function getFieldOnChangeHandler(id) {
        return personSection.refs[id].props.onChange;
      }

      function getFieldValue(id) {
        return personSection.refs[id].props.value;
      }

      function getOptionTexts() {
        var personTypeField = personSection.refs['gen-persoană'];
        var optionDOMElements = personTypeField.getDOMNode().querySelectorAll('select option');

        return [].map.call(optionDOMElements, function(option) {
          return option.textContent;
        });
      }
    });

    t.end();

    function getSectionLabel() {
      return personSection.refs['section'].props.label;
    }
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
      ['Nume',          'TextField',      'nume'         ],
      ['IDNP',          'TextField',      'idnp'         ],
      ['Data naşterii', 'DateField',      'data-naşterii'],
      ['Domiciliu',     'LargeTextField', 'domiciliu'    ],
      ['Note',          'LargeTextField', 'note'         ],
    ]
  }, {
    personType: PersonSection.PERSON_TYPES.COMPANY,
    fieldValues: {
      'gen-persoană': PersonSection.PERSON_TYPES.COMPANY,
      'denumire': 'HAPPY SRL',
      'idno': '012345',
      'sediu': 'bd. Fericirii',
      'persoană-de-contact': 'Ion Cutărescu'
    },
    expectedFields: [
      ['Denumire',            'TextField',      'denumire'            ],
      ['IDNO',                'TextField',      'idno'                ],
      ['Sediu',               'LargeTextField', 'sediu'               ],
      ['Persoană de contact', 'TextField',      'persoană-de-contact' ],
      ['Note',                'LargeTextField', 'note'                ],
    ]
  }].forEach(function(testData) {
    test('PersonSection has the appropriate fields when person type is “' + testData.personType + '”', function(t) {
      var sectionWidget = render(e(PersonSection, {label: label, value: testData.fieldValues}));

      testData.expectedFields.forEach(assertField(sectionWidget, testData.fieldValues, t));

      t.end();
    });
  });

  function assertField(sectionWidget, fieldValues, t) {
    return function(field, i) {
      var fieldWidget = getFieldWidgetAtPosition(sectionWidget, i);

      var expectedLabel     = field[0];
      var expectedTypeName  = field[1];
      var expectedValue     = fieldValues[field[2]];

      var prefix = 'field #' + (i + 1) + ' — ' + field[2] + ' — ';

      t.equal(getFieldLabel(fieldWidget),     expectedLabel,    prefix + 'has the appropriate label');
      t.equal(getFieldTypeName(fieldWidget),  expectedTypeName, prefix + 'is of the appropriate kind');
      t.equal(getFieldValue(fieldWidget),     expectedValue,    prefix + 'is prefilled with the appropriate value');
    };
  }

  function render(widget) {
    var renderer = React.addons.TestUtils.createRenderer();
    renderer.render(widget);
    return renderer.getRenderOutput();
  }

  function getFieldWidgetAtPosition(sectionWidget, n) {
    var fieldWidgets = sectionWidget.props.children[1];
    return fieldWidgets[n];
  }

  function getFieldLabel(fieldWidget) {
    return fieldWidget.props.label;
  }

  function getFieldTypeName(fieldWidget) {
    return fieldWidget.type.displayName;
  }

  function getFieldValue(fieldWidget) {
    return fieldWidget.props.value;
  }

}());
