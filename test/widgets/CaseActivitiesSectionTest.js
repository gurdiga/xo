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

    t.end();
  });

}());
