describe('CompanyFieldList', function() {
  'use strict';

  var CompanyFieldList = window.App.Widgets.CompanyFieldList;
  var companyFieldList, defaultFieldValues, sandbox, domElement, fields;

  beforeEach(function() {
    defaultFieldValues = {
      denumire: 'XO Inc.',
      idno: '9876543210',
      sediu: 'Happiness str. 1000',
      'persoană-de-contact': 'Joane Doe',
      note: 'Yes.'
    };
    companyFieldList = new CompanyFieldList(defaultFieldValues);

    sandbox = document.createElement('sandbox');
    companyFieldList.appendTo(sandbox);
    domElement = sandbox.childNodes[0];
    fields = domElement.childNodes;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'COMPANY-FIELD-LIST', 'tag name');
    assert.equal(fields.length, 5, 'has the appropriate number of fields');
  });

  it('has the appropriate kinds of fields', function() {
    assert.equal(fields[0].tagName, 'LABELED-TEXT-FIELD');
    assert.equal(fields[1].tagName, 'LABELED-TEXT-FIELD');
    assert.equal(fields[2].tagName, 'LABELED-LARGE-TEXT-FIELD');
    assert.equal(fields[3].tagName, 'LABELED-TEXT-FIELD');
    assert.equal(fields[4].tagName, 'LABELED-LARGE-TEXT-FIELD');
  });

  it('fields have the appropriate labels', function() {
    assert.equal(fields[0].textContent, 'Denumire');
    assert.equal(fields[1].textContent, 'IDNO');
    assert.equal(fields[2].textContent, 'Sediu');
    assert.equal(fields[3].textContent, 'Persoană de contact');
    assert.equal(fields[4].textContent, 'Note');
  });

  it('fields have the appropriate default values', function() {
    assert.equal(fields[0].querySelector('input').value, defaultFieldValues['denumire'], 'denumire');
    assert.equal(fields[1].querySelector('input').value, defaultFieldValues['idno'], 'IDNO');
    assert.equal(fields[2].querySelector('textarea').value, defaultFieldValues['sediu'], 'sediu');
    assert.equal(fields[3].querySelector('input').value, defaultFieldValues['persoană-de-contact'], 'persoană-de-contact');
    assert.equal(fields[4].querySelector('textarea').value, defaultFieldValues['note'], 'note');
  });

  it('can tell the field values', function() {
    var fieldValues = companyFieldList.getFieldValues();
    var fieldNames = Object.keys(defaultFieldValues);

    fieldNames.forEach(function(fieldName) {
      assert.equal(fieldValues[fieldName], defaultFieldValues[fieldName], fieldName);
    });
  });

  it('has its person type name', function() {
    assert.equal(CompanyFieldList.PERSON_TYPE_NAME, 'juridică');
  });

  it('can remove itself', function() {
    companyFieldList.remove();
    assert.equal(sandbox.childNodes.length, 0, 'it removed its DOM element from the container');
  });

  var assert = window.TestHelpers.assert;

});
