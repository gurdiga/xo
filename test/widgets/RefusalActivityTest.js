describe('RefusalActivity', function() {
  'use strict';

  var RefusalActivity = window.App.Widgets.RefusalActivity;

  var refusalActivity;

  beforeEach(function() {
    refusalActivity = new RefusalActivity();
  });

  it('has the appropriate description', function() {
    assert.equal(refusalActivity.getDescription(), 'Refuz');
  });

  var assert = window.TestHelpers.assert;
});
