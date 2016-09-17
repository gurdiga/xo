describe('PersonFieldCollection', function() {
  'use strict';

  var PersonFieldCollection = window.App.Widgets.PersonFieldCollection;
  var personFieldCollection, defaultFieldValues, domElement;

  before(function() {
    defaultFieldValues = {
      nume: 'John Doe',
      idnp: '0123456789',
      'data-nașterii': '17.02.2000',
      domiciliu: 'Happiness str. 51',
      note: 'Yes.'
    };
    personFieldCollection = new PersonFieldCollection(defaultFieldValues);
    domElement = getWidgetDOMElement(personFieldCollection);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'PERSON-FIELD-COLLECTION', 'tag name');
  });

  it('has the appropriate fields', function() {
    var fields = domElement.childNodes;

    assert.equal(fields.length, 5, 'has the appropriate number of fields');
    assert.equal(fields[0].tagName, 'LABELED-TEXT-FIELD', 'has the appropriate type of fields');
    assert.equal(fields[1].tagName, 'LABELED-TEXT-FIELD', 'has the appropriate type of fields');
    assert.equal(fields[2].tagName, 'LABELED-DATE-FIELD', 'has the appropriate type of fields');
    assert.equal(fields[3].tagName, 'LABELED-LARGE-TEXT-FIELD', 'has the appropriate type of fields');
    assert.equal(fields[4].tagName, 'LABELED-LARGE-TEXT-FIELD', 'has the appropriate type of fields');
  });

  it('fields have the appropriate labels', function() {
    var fields = domElement.childNodes;

    assert.equal(fields[0].textContent, 'Nume');
    assert.equal(fields[1].textContent, 'IDNP');
    assert.equal(fields[2].textContent, 'Data nașterii');
    assert.equal(fields[3].textContent, 'Domiciliu');
    assert.equal(fields[4].textContent, 'Note');
  });

  it('fields have the appropriate default values', function() {
    var fields = domElement.childNodes;

    assert.equal(fields[0].querySelector('input').value, defaultFieldValues['nume']);
    assert.equal(fields[1].querySelector('input').value, defaultFieldValues['idnp']);
    assert.equal(fields[2].querySelector('input').value, defaultFieldValues['data-nașterii']);
    assert.equal(fields[3].querySelector('textarea').value, defaultFieldValues['domiciliu']);
    assert.equal(fields[4].querySelector('textarea').value, defaultFieldValues['note']);
  });

  it('can tell the field values', function() {
    var fieldValues = personFieldCollection.getFieldValues();
    var fieldNames = Object.keys(defaultFieldValues);

    fieldNames.forEach(function(fieldName) {
      assert.equal(fieldValues[fieldName], defaultFieldValues[fieldName], fieldName);
    });
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;

});
