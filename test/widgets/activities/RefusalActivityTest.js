describe('RefusalActivity', function() {
  'use strict';

  var RefusalActivity = window.App.Widgets.Activities.RefusalActivity;

  var refusalActivity;

  before(function() {
    refusalActivity = new RefusalActivity();
  });

  it('has the appropriate description', function() {
    assert.equal(refusalActivity.getDescription(), 'Refuz');
  });

  var assert = window.TestHelpers.assert;
});
