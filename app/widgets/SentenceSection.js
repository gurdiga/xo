(function() {
  'use strict';

  function SentenceSection(fieldValues) {
    var domElement = document.createElement('sentence-section');
    domElement.style.display = 'inline-block';

    var section = new Section('Documentul executoriu', [
      new SelectField('Instanţa de judecată',
        COURT_LEVELS_AS_OPTGROUPS,
        fieldValues['instanţa-de-judecată']
      ),
      new TextField('Numărul hotărîrii', fieldValues['numărul-hotărîrii']),
      new DateField('Data hotărîrii', fieldValues['data-hotărîrii']),
      new LargeTextField('Dispozitivul', fieldValues['dispozitivul']),
      new DateField('Data rămînerii definitive', fieldValues['data-rămînerii-definitive']),
      new DateField('Data eliberării', fieldValues['data-eliberării'])
    ]);
    section.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.insertAfter = function(siblingDomElement) {
      siblingDomElement.parentNode.insertBefore(domElement, siblingDomElement.nextSibling);
    };
  }

  var Courts = window.App.Data.Courts;
  var COURT_LEVELS_AS_OPTGROUPS = Courts.map(courLevelAsOptgroup);

  function courLevelAsOptgroup(courtLevel) {
    return {
      optgroupLabel: courtLevel.levelLabel,
      options: courtLevel.courtList
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
