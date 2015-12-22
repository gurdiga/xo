(function() {
  'use strict';

  var ActivityDescription = window.App.Widgets.ActivityDescription;

  var sandbox = document.createElement('div');

  var text = 'Inquiry';
  var activityDescription = new ActivityDescription(text);
  activityDescription.appendTo(sandbox);

  tape('ActivityDescription', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropiate tag name');
    t.equal(domElement.textContent, text, 'has the text content passed into the constructor');

    t.end();
  });

}());
