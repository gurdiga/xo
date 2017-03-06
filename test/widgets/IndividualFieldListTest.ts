import {IndividualFieldList} from "app/widgets/IndividualFieldList";
import {assert} from "test/helper";

describe('IndividualFieldList', function() {
  'use strict';

  var personFieldList, defaultFieldValues, sandbox, domElement, fields;

  before(function() {
    defaultFieldValues = {
      nume: 'John Doe',
      idnp: '0123456789',
      'data-nașterii': '17.02.2000',
      domiciliu: 'Happiness str. 51',
      note: 'Yes.'
    };
    personFieldList = new IndividualFieldList(defaultFieldValues);

    sandbox = document.createElement('sandbox');
    personFieldList.appendTo(sandbox);
    domElement = sandbox.childNodes[0];
    fields = domElement.childNodes;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'PERSON-FIELD-LIST', 'tag name');
  });

  it('has the appropriate kinds of fields', function() {
    assert.equal(fields.length, 5, 'has the appropriate number of fields');
    assert.equal(fields[0].tagName, 'LABELED-TEXT-FIELD');
    assert.equal(fields[1].tagName, 'LABELED-TEXT-FIELD');
    assert.equal(fields[2].tagName, 'LABELED-DATE-FIELD');
    assert.equal(fields[3].tagName, 'LABELED-LARGE-TEXT-FIELD');
    assert.equal(fields[4].tagName, 'LABELED-LARGE-TEXT-FIELD');
  });

  it('fields have the appropriate labels', function() {
    assert.equal(fields[0].textContent, 'Nume');
    assert.equal(fields[1].textContent, 'IDNP');
    assert.equal(fields[2].textContent, 'Data nașterii');
    assert.equal(fields[3].textContent, 'Domiciliu');
    assert.equal(fields[4].textContent, 'Note');
  });

  it('fields have the appropriate default values', function() {
    assert.equal(fields[0].querySelector('input').value, defaultFieldValues['nume'], 'nume');
    assert.equal(fields[1].querySelector('input').value, defaultFieldValues['idnp'], 'idnp');
    assert.equal(fields[2].querySelector('input').value, defaultFieldValues['data-nașterii'], 'data-nașterii');
    assert.equal(fields[3].querySelector('textarea').value, defaultFieldValues['domiciliu'], 'domiciliu');
    assert.equal(fields[4].querySelector('textarea').value, defaultFieldValues['note'], 'note');
  });

  it('can tell the field values', function() {
    var fieldValues = personFieldList.getFieldValues();
    var fieldNames = Object.keys(defaultFieldValues);

    fieldNames.forEach(function(fieldName) {
      assert.equal(fieldValues[fieldName], defaultFieldValues[fieldName], fieldName);
    });
  });

  it('has its person type name', function() {
    assert.equal(IndividualFieldList.PERSON_TYPE_NAME, 'fizică');
  });

  it('can remove itself', function() {
    personFieldList.remove();
    assert.equal(sandbox.childNodes.length, 0, 'it removed its DOM element from the container');
  });
});
