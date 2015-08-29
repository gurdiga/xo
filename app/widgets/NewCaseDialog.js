(function() {
  'use strict';

  function NewCaseDialog() {
    var domElement = document.createElement('new-case-dialog');
    _.extend(domElement.style, style);

    var data = {
      'creditor': {},
      'debitor': {
        'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL
      }
    };

    appendWidgets([
      createTitle(),
      new DateField('Data intentării', '', dateFieldStyle),
      new PersonSection('Creditor', data['creditor'], { width: '380px' }),
      new PersonSection('Debitor', data['debitor'], { width: '380px', marginLeft: '60px' }),
      createAddPersonButton(domElement)
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  var style = {
    display: 'block',
    backgroundColor: 'white',
    width: '960px',
    padding: '50px',
    border: '1px solid #ddd',
    boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 7px'
  };

  var dateFieldStyle = {
    width: '100px',
    marginBottom: '10px'
  };

  function createTitle() {
    var title = document.createElement('h1');

    title.textContent = 'Procedură de ordin general';
    title.style.fontSize = '42px';
    title.style.fontFamily = 'TitleFont';
    title.style.fontWeight = 'bold';

    return title;
  }

  function createAddPersonButton(domElement) {
    var button = new AddPersonButton('adaugă debitor');

    button.onClick(function() {
      var newPersonSection = new PersonSection('', {});
      var lastPersonSectionDomElement = domElement.querySelector('person-section:last-of-type');
      newPersonSection.insertAfter(lastPersonSectionDomElement);
    });

    return button;
  }

  var DateField = window.App.Widgets.DateField;
  var PersonSection = window.App.Widgets.PersonSection;
  var AddPersonButton = window.App.Widgets.AddPersonButton;

  var appendWidgets = window.App.Utils.appendWidgets;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
