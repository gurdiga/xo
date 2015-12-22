(function() {
  'use strict';

  var ActivityDescription = window.App.Widgets.ActivityDescription;

  var sandbox = document.createElement('div');
  var activityDescription = new ActivityDescription();
  activityDescription.appendTo(sandbox);

  tape('ActivityDescription', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropiate tag name');

    t.end();
  });

}());
