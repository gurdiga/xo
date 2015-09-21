(function() {
  'use strict';

  function SentenceSection() {
    var domElement = document.createElement('sentence-section');
    domElement.style.display = 'inline-block';

    var section = new Section('Documentul executoriu');
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  var Section = window.App.Widgets.Section;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.SentenceSection = SentenceSection;

}());
