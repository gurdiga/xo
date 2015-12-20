(function() {
  'use strict';

  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;
  var test = tape;

  var sandbox = document.createElement('div');

  var activityDetailsSection = new ActivityDetailsSection();
  activityDetailsSection.appendTo(sandbox);

  test('ActivityDetailsSection', function(t) {
    var domElement = sandbox.firstChild;

    t.test('structure', function(t) {
      t.ok(domElement, 'exists');

      t.end();
    });

    t.test('layout styling', function(t) {
      var css = domElement.style;

      t.equal(css.marginLeft, '90px');

      t.end();
    });

    t.end();
  });

}());
