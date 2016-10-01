describe('PersonSection2', function() {
  'use strict';

  var PersonSection2 = window.App.Widgets.PersonSection2;
  var personSection, domElement, titleText;

  beforeEach(function() {
    titleText = 'Creditor';
    personSection = new PersonSection2({
      titleText: titleText
    });
    domElement = getWidgetDOMElement(personSection);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'PERSON-SECTION', 'tag name');

    var sectionTitle = domElement.childNodes[0];
    assert.isTrue(sectionTitle !== undefined, 'title exists');
    assert.equal(sectionTitle.tagName, 'SECTION-TITLE', 'title tag name');
    assert.equal(sectionTitle.textContent, titleText, 'title text');

    var personTypeField = domElement.childNodes[1];
    assert.isTrue(personTypeField !== undefined, 'person type field exists');
    assert.equal(personTypeField.tagName, 'LABELED-SELECT-FIELD', 'person type field type');

    var personTypeFieldLabel = personTypeField.querySelector('label>span');
    assert.equal(personTypeFieldLabel.textContent, 'Gen persoană', 'person type field label text');

    var expectedPersonTypeNames = ['fizică', 'juridică'];
    var personTypeNames = getOptionTexts(personTypeField);
    assert.deepEqual(personTypeNames, expectedPersonTypeNames, 'person type field options');

    var expectedDefaultValue = 'fizică';
    var personTypeFieldSelect = personTypeField.querySelector('select');
    assert.equal(personTypeFieldSelect.value, expectedDefaultValue, 'person type field default value');

    // TODO:
    // * person-type-specific fields

    function getOptionTexts(labeledSelectField) {
      var optionElements = labeledSelectField.querySelectorAll('option');

      return rMap('textContent', optionElements);
    }
  });

  // TODO:
  // * validate input
  // * test style
  // * test ARIA

  var rMap = window.App.Utils.rMap;

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;

});
