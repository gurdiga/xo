describe('PersonSection2', function() {
  'use strict';

  var PersonSection2 = window.App.Widgets.PersonSection2;
  var personSection, domElement, titleText, sectionTitle;

  beforeEach(function() {
    titleText = 'Creditor';
    personSection = new PersonSection2(titleText);
    domElement = getWidgetDOMElement(personSection);
    sectionTitle = domElement.childNodes[0];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'PERSON-SECTION', 'tag name');

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

    var expectedDefaultValue = IndividualFieldList.PERSON_TYPE_NAME;
    var personTypeFieldSelect = personTypeField.querySelector('select');
    assert.equal(personTypeFieldSelect.value, expectedDefaultValue, 'person type field default value');

    var expectedFieldListTagName = 'PERSON-FIELD-LIST';
    var personTypeSpecificFieldList = personTypeField.nextSibling;
    assert.isTrue(personTypeSpecificFieldList !== null, 'person-type-specific field list exists');
    assert.equal(personTypeSpecificFieldList.tagName, expectedFieldListTagName, 'person-type-specific field list');

    personTypeFieldSelect.value = CompanyFieldList.PERSON_TYPE_NAME;
    personTypeFieldSelect.dispatchEvent(new Event('change'));

    expectedFieldListTagName = 'COMPANY-FIELD-LIST';
    personTypeSpecificFieldList = personTypeField.nextSibling;
    assert.isTrue(personTypeSpecificFieldList !== null, 'person-type-specific field list exists');
    assert.equal(personTypeSpecificFieldList.tagName, expectedFieldListTagName, 'person-type-specific field list');

    function getOptionTexts(labeledSelectField) {
      var optionElements = labeledSelectField.querySelectorAll('option');

      return rMap('textContent', optionElements);
    }
  });

  it('has the appropriate style', function() {
    var style = sectionTitle.style;

    assert.equal(style.fontFamily, 'TitleFont', 'title font family');
    assert.equal(style.fontSize, '22px', 'title font size');
    assert.equal(style.color, 'white', 'title color');
    assert.equal(style.backgroundColor, 'rgb(51, 51, 51)', 'title background color');
    assert.equal(style.display, 'block', 'title display');
    assert.equal(style.padding, '8px 6px', 'title padding');
  });

  // TODO:
  // * validate input
  // * test ARIA

  var IndividualFieldList = window.App.Widgets.IndividualFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;
  var rMap = window.App.Utils.rMap;

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;

});
