(function() {
  'use strict';

  var ActivityDetailsSection = window.App.Widgets.ActivityDetailsSection;
  var test = tape;

  var sandbox = document.createElement('div');

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var activityDetailsSection = new ActivityDetailsSection([
    document.createElement('first-child-widget'),
    new LabeledTextField()
  ]);

  activityDetailsSection.appendTo(sandbox);

  test('ActivityDetailsSection', function(t) {
    var domElement = sandbox.firstChild;

    t.test('structure', function(t) {
      t.ok(domElement, 'exists');

      t.end();
    });

    t.test('layout', function(t) {
      var css = domElement.style;

      t.equal(css.marginLeft, '90px');

      t.end();
    });

    t.test('styling', function(t) {
      var css = domElement.style;

      t.equal(css.borderWidth, '0px', 'has no visible border');

      t.end();
    });

    t.test('children', function(t) {
      t.equal(domElement.children[0].tagName, 'FIRST-CHILD-WIDGET', 'renders the given widgets inside itself');
      t.equal(domElement.children[1].tagName, 'LABELED-TEXT-FIELD', 'renders the given widgets inside itself');

      t.end();
    });

    t.end();
  });

}());