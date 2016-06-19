describe('LabeledCheckbox', function() {
  'use strict';

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  it('is extracted', function() {
    assert.equal(typeof LabeledCheckbox, 'function', 'is a function');
  });

  var assert = window.TestHelpers.assert;
});
