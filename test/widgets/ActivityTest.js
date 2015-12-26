(function() {
  'use strict';

  var Activity = window.App.Widgets.Activity;

  var activity = new Activity();
  var sandbox = document.createElement('div');
  activity.appendTo(sandbox);

  tape('Activity', function(t) {
    var domElement = sandbox.firstChild;

    t.equal(domElement.tagName, 'FIELDSET', 'is a fieldset');
    t.equal(domElement.getAttribute('widget'), 'Activity', 'is an “Activity” widget');

    t.end();
  });

}());
