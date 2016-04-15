(function() {
  'use strict';

  var ActivitiesSection = window.App.Widgets.ActivitiesSection;

  var sandbox = document.createElement('div');
  var additionalStyle = { color: 'red' };
  var sentenceSubjectSection = new ActivitiesSection(additionalStyle);
  sentenceSubjectSection.appendTo(sandbox);

  tape.test('ActivitiesSection', function(t) {
    var domElement = sandbox.firstChild;

    t.equal(domElement.tagName, 'CASE-ACTIVITIES-SECTION', 'has the appropriate tag name');

    t.test('structure');
    var css = domElement.style;
    t.equal(css.display, 'block', 'has block display to be on its own line');
    t.equal(css.color, additionalStyle.color, 'accepts additional CSS');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Acţiuni procedurale', 'section has the appropriate label');

    t.test('add activity button', function(t) {
      var addActivityButton = domElement.querySelector('dropdown-button');

      var toggleButton = addActivityButton.querySelector('button:first-child');
      t.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');

      var options = addActivityButton.querySelectorAll('div>button');
      t.equal(options.length, 2, 'has the appropriate number of options');

      t.end();
    });

    t.end();
  });

}());
