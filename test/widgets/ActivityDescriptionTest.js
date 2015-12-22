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

    t.test('styling', function(t) {
      var css = domElement.style;

      t.equal(css.fontSize, '16px', 'has just a bit larger font size to stand out');
      t.equal(css.marginLeft, '0.5em', 'keeps some space at the left');
      t.equal(css.verticalAlign, '-1px', 'align vertically with the text in the field');

      t.end();
    });

    t.end();
  });

}());