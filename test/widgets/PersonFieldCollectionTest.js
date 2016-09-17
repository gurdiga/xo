describe('PersonFieldCollection', function() {
  'use strict';

  var PersonFieldCollection = window.App.Widgets.PersonFieldCollection;
  var personFieldCollection, domElement;

  beforeEach(function() {
    personFieldCollection = new PersonFieldCollection();
    domElement = getWidgetDOMElement(personFieldCollection);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'PERSON-FIELD-COLLECTION', 'tag name');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;

});
