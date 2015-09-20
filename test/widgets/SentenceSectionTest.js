(function() {
  'use strict';

  var SentenceSection = window.App.Widgets.SentenceSection;
  var sentenceSection = new SentenceSection();

  var sandbox = document.createElement('div');
  sentenceSection.appendTo(sandbox);


  tape('SentenceSection', function(t) {
    t.ok(SentenceSection, 'exists');
    // TODO

    t.end();
  });

}());
