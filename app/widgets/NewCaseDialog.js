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
      new PersonSection('Debitor', data['debitor'], { width: '380px', marginLeft: '60px' })
    ]).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
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

  var appendWidgets = window.App.Utils.appendWidgets;

  var DateField = window.App.Widgets.DateField;
  var PersonSection = window.App.Widgets.PersonSection;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
