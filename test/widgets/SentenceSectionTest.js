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

    t.test('can be inserted after a given DOM element', function(t) {
      var firstChild = document.createElement('first-child');
      var secondElement = document.createElement('second-child');
      sandbox.appendChild(firstChild);
      sandbox.appendChild(secondElement);

      sentenceSection.insertAfter(firstChild);
      t.equal(domElement.previousSibling, firstChild, 'it’s inserted after the first element');

      sentenceSection.insertAfter(secondElement);
      t.equal(domElement.previousSibling, secondElement, 'can also insert after the last element');

      t.end();
    });

    t.test('fields', function(t) {
      // TODO

      t.end();
    });

    t.end();
  });

}());
