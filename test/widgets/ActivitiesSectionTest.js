(function() {
  'use strict';

  var ActivitiesSection = window.App.Widgets.ActivitiesSection;

  var sandbox = document.createElement('div');
  var additionalStyle = { color: 'red' };
  var sentenceSubjectSection = new ActivitiesSection(additionalStyle);
  sentenceSubjectSection.appendTo(sandbox);

  tape.test('ActivitiesSection', function(t) {
    var domElement = sandbox.firstChild;

    t.test('structure', function(t) {
      t.equal(domElement.tagName, 'CASE-ACTIVITIES-SECTION', 'has the appropriate tag name');

      var labelText = domElement.querySelector('legend').textContent;
      t.equal(labelText, 'Acţiuni procedurale', 'section has the appropriate label');

      t.end();
    });

    t.test('style', function(t) {
      var css = domElement.style;
      t.equal(css.display, 'block', 'has block display to be on its own line');
      t.equal(css.color, additionalStyle.color, 'accepts additional CSS');

      t.end();
    });

    t.test('add activity button', function(t) {
      var addActivityButton = domElement.querySelector('dropdown-button');

      var toggleButton = addActivityButton.querySelector('button:first-child');
      t.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');

      var options = _.toArray(addActivityButton.querySelectorAll('div>button'));
      t.equal(options.length, 2, 'has the appropriate number of options');

      var optionsLabels = options.map(_.property('textContent'));
      t.deepEqual(optionsLabels, ['Intentarea', 'Refuz'], 'options have the appropriate labels');

      //
      // TODO: assert that clicking an option inserts the appropriate activity widget before this button
      //

      t.end();
    });

    t.end();
  });

}());
