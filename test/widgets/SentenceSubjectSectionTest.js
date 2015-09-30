(function() {
  'use strict';

  var SentenceSubjectSection = window.App.Widgets.SentenceSubjectSection;

  var sandbox = document.createElement('div');
  var sentenceSubjectSection = new SentenceSubjectSection();
  sentenceSubjectSection.appendTo(sandbox);

  tape.test('SentenceSubjectSection', function(t) {
    var domElement = sandbox.firstChild;

    t.ok(domElement, 'exists');
    t.equal(domElement.tagName, 'SENTENCE-SUBJECT-SECTION', 'has sentence-subject-section tag');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Obiectul urmăririi', 'section has the appropriate label');

    t.end();
  });

}());
