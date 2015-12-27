(function() {
  'use strict';

  var Activity = window.App.Widgets.Activity;

  var activity = new Activity();
  var sandbox = document.createElement('div');
  activity.appendTo(sandbox);
  document.body.appendChild(sandbox); // TODO: remove me

  tape('Activity', function(t) {
    var domElement = sandbox.firstChild;

    t.equal(domElement.tagName, 'FIELDSET', 'is a fieldset');
    t.equal(domElement.getAttribute('widget'), 'Activity', 'is an “Activity” widget');

    t.test('styling', function(t) {
      var css = domElement.style;

      t.equal(css.borderWidth, '0px', 'removes the iframe’s default border');
      t.equal(css.padding, '0px', 'removes the iframe’s default padding');

      t.end();
    });

    t.test('date field', function(t) {
      var dateField = domElement.firstChild;
      t.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'is the appropriate widget');

      t.end();
    });

    t.end();
  });

}());