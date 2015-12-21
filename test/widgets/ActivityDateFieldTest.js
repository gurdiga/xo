(function() {
  'use strict';

  var ActivityDateField = window.App.Widgets.ActivityDateField;

  var sandbox = document.createElement('div');
  var activityDateField = new ActivityDateField();
  activityDateField.appendTo(sandbox);

  tape('ActivityDateField', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'ACTIVITY-DATE-FIELD', 'has the appropriate tag name');

    t.test('input', function(t) {
      var input = domElement.querySelector('input');
      t.equal(input.style.width, '6.5em', 'the  date field is a bit narrower than labeled fields');

      t.end();
    });

    t.end();
  });

}());
