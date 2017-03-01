describe('PersonSection2', function() {
  'use strict';

  var PersonSection2 = window.App.Widgets.PersonSection2;
  var personSection, domElement, titleText, fieldValues;

  beforeEach(function() {
    titleText = 'Creditor';
    fieldValues = {
      'gen-persoană': IndividualFieldList.PERSON_TYPE_NAME,
      'nume': 'John DOE',
      'idnp': '0123456789',
      'data-nașterii': '2016-10-19',
      'domiciliu': 'str. Fericirii, 1',
      'note': 'Yes.'
    };
    personSection = new PersonSection2(titleText, fieldValues);
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
    assert.equal(personTypeField.getAttribute('internal-name'), 'person-type',
      'person type field has the appropriate internal-name attribute value');

    var personTypeFieldLabel = personTypeField.querySelector('label>span');
    assert.equal(personTypeFieldLabel.textContent, 'Gen persoană', 'person type field label text');

    var expectedPersonTypeNames = [
      IndividualFieldList.PERSON_TYPE_NAME,
      CompanyFieldList.PERSON_TYPE_NAME
    ];
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

  it('can be inserted after a given DOM element', function() {
    var container = createDOMElement('container');
    var firstChild = createDOMElement('first-child');
    var secondChild = createDOMElement('second-child');
    container.appendChild(firstChild);
    container.appendChild(secondChild);

    personSection.insertAfter(firstChild);
    assert.isTrue(firstChild.nextSibling === domElement, 'is inserted after the given DOM element');
    assert.isTrue(secondChild.previousSibling === domElement,
      'is inserted before the given DOM element’s next sibling');
  });

  it('has the appropriate style', function() {
    var sectionTitle = domElement.childNodes[0];
    var style = domElement.style;
    var titleStyle = sectionTitle.style;

    assert.equal(style.display, 'block', 'has display block');
    assert.equal(style.paddingLeft, titleStyle.paddingLeft,
      'vertically aligns section title text with label text');

    assert.equal(titleStyle.fontFamily, 'TitleFont', 'title font family');
    assert.equal(titleStyle.fontSize, '22px', 'title font size');
    assert.equal(titleStyle.color, 'white', 'title color');
    assert.equal(titleStyle.backgroundColor, 'rgb(51, 51, 51)', 'title background color');
    assert.equal(titleStyle.display, 'block', 'title display');
    assert.equal(titleStyle.padding, '8px 6px', 'title padding');
    assert.equal(titleStyle.marginBottom, '12px', 'title bottom spacing');
    assert.equal(titleStyle.marginLeft, '-6px', 'title negative left margin to compensate for padding');
  });

  it('fills the fields with the given values', function() {
    assert.deepEqual(personSection.getFieldValues(), fieldValues);
  });

  it('accepts custom style', function() {
    var customStyle = {
      'margin-bottom': '2em'
    };

    personSection.setStyle(customStyle);
    assert.equal(domElement.style.marginBottom, customStyle['margin-bottom']);
  });

  it('is accessible', function() {
    assert.equal(domElement.getAttribute('role'), 'region', 'has the appropriate ARIA role');

    var sectionTitle = domElement.childNodes[0];
    assert.equal(domElement.getAttribute('aria-labelledby'), sectionTitle.id,
      'has the appropriate aria-labelledby');
  });

  var IndividualFieldList = window.App.Widgets.IndividualFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  var rMap = window.App.Utils.rMap;
  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;

});
