(function() {
  'use strict';

  var CaseActivitiesSection = window.App.Widgets.CaseActivitiesSection;

  var sandbox = document.createElement('div');
  var sentenceSubjectSection = new CaseActivitiesSection();
  sentenceSubjectSection.appendTo(sandbox);

  tape.test('CaseActivitiesSection', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'CASE-ACTIVITIES-SECTION', 'has sentence-subject-section tag');

    var css = domElement.style;
    t.equal(css.display, 'block', 'has block display to be on its own line');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Acţiuni procedurale', 'section has the appropriate label');

    t.end();
  });

}());
