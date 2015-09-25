(function() {
  'use strict';

  function SentenceSection() {
    var domElement = document.createElement('sentence-section');
    domElement.style.display = 'inline-block';

    var section = new Section('Documentul executoriu', [
      new SelectField('Instanţa de judecată', []),
      new TextField('Numărul documentului'),
      new DateField('Data hotărîrii'),
      new LargeTextField('Dispozitivul'),
      new DateField('Data rămînerii definitive'),
      new DateField('Data eliberării')
    ]);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.insertAfter = function(siblingDomElement) {
      siblingDomElement.parentNode.insertBefore(domElement, siblingDomElement.nextSibling);
    };
  }

  var Section = window.App.Widgets.Section;
  var SelectField = window.App.Widgets.SelectField;
  var TextField = window.App.Widgets.TextField;
  var LargeTextField = window.App.Widgets.LargeTextField;
  var DateField = window.App.Widgets.DateField;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.SentenceSection = SentenceSection;

}());
