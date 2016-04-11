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

    t.end();
  });

}());
