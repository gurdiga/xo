describe('PersonTypeSpecificFieldListRegistry', function() {
  'use strict';

  var PersonTypeSpecificFieldListRegistry = window.App.Widgets.PersonTypeSpecificFieldListRegistry;

  it('can return a field list constructor by name', function() {
    assert.equal(PersonTypeSpecificFieldListRegistry.findByName('fizică'), PersonFieldList, 'for individual');
    assert.equal(PersonTypeSpecificFieldListRegistry.findByName('juridică'), CompanyFieldList, 'for company');
  });

  var PersonFieldList = window.App.Widgets.PersonFieldList;
  var CompanyFieldList = window.App.Widgets.CompanyFieldList;

  var assert = window.TestHelpers.assert;
});
