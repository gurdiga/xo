describe('PersonTypeSpecificFieldListRegistry', function() {
  'use strict';

  var PersonTypeSpecificFieldListRegistry = window.App.Widgets.PersonTypeSpecificFieldListRegistry;

  it('can return a field list constructor by name', function() {
    assert.equal(PersonTypeSpecificFieldListRegistry.findByName('fizică'), IndividualFieldList, 'for individual');
    assert.equal(PersonTypeSpecificFieldListRegistry.findByName('juridică'), CompanyFieldList, 'for company');
  });

  var IndividualFieldList = window.App.Widgets.IndividualFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  var assert = window.TestHelpers.assert;
});
