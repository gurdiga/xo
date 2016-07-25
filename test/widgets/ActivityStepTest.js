describe('ActivityStep', function() {
  'use strict';

  var ActivityStep = window.App.Widgets.ActivityStep;

  // There is a set of steps for every activity. Each step:
  // ● has an internal ID;
  // ● is completed or not;
  // ● has a description;
  // ● has a set of detail widgets to collect the relevant data.

  it('exists', function() {
    assert.equal(typeof ActivityStep, 'function', 'yes');
  });

  var assert = window.TestHelpers.assert;
});
