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

    addTitle(domElement);
    addRegistrationDateField(domElement);
    addPersonSection(domElement, 'Creditor', data['creditor']);
    addPersonSection(domElement, 'Debitor', data['debitor']);
    addAddPersonButton(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  var style = {
    display: 'block',
    backgroundColor: 'white',
    width: '960px',
    padding: '50px 0 50px 50px',
    border: '1px solid #ddd',
    boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 7px'
  };

  var dateFieldStyle = {
    width: '100px',
    marginBottom: '10px'
  };

  function addTitle(domElement) {
    var title = document.createElement('h1');

    title.textContent = 'Procedură de ordin general';
    title.style.fontSize = '42px';
    title.style.fontFamily = 'TitleFont';
    title.style.fontWeight = 'bold';

    domElement.appendChild(title);
  }

  function addRegistrationDateField(domElement) {
    new DateField('Data intentării', '', dateFieldStyle).appendTo(domElement);
  }

  function addAddPersonButton(domElement) {
    var button = new AddPersonButton('adaugă debitor');

    button.onClick(function() {
      // TODO: collect added person sections
      addPersonSection(domElement, 'Debitor', {}, true);
    });

    button.appendTo(domElement);
  }

  function addPersonSection(domElement, labelText, data, removable) {
    var personSection = createPersonSection(domElement, labelText, data);
    var lastPersonSectionDomElement = domElement.querySelector('person-section:last-of-type');

    if (removable) personSection.makeRemovable(function() {
      // TODO: remove from the added person section collection
    });

    if (lastPersonSectionDomElement) personSection.insertAfter(lastPersonSectionDomElement);
    else personSection.appendTo(domElement);
  }

  function createPersonSection(domElement, labelText, data) {
    data = data || {};

    var style = {
      width: '380px',
      marginRight: '60px'
    };

    return new PersonSection(labelText, data, style);
  }

  var DateField = window.App.Widgets.DateField;
  var PersonSection = window.App.Widgets.PersonSection;
  var AddPersonButton = window.App.Widgets.AddPersonButton;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
