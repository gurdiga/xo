(function() {
  'use strict';

  var SentenceSection = window.App.Widgets.SentenceSection;
  var sentenceSection = new SentenceSection();

  var sandbox = document.createElement('div');
  sentenceSection.appendTo(sandbox);

  tape('SentenceSection', function(t) {
    var domElement = sandbox.querySelector('sentence-section');
    t.ok(domElement, 'exists');

    var css = domElement.style;
    t.equal(css.display, 'inline-block', 'has display inline-block');

    var labelText = domElement.querySelector('legend').textContent;
    t.equal(labelText, 'Documentul executoriu', 'section has the appropriate label');
    // TODO

    t.end();
  });

}());
