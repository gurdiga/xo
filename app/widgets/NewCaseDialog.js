(function() {
  'use strict';

  function NewCaseDialog() {
    // Should this be passed in?
    var data = {
      'creditor': {},
      'debitori': [{
        'gen-persoană': PersonSection.PERSON_TYPES.INDIVIDUAL
      }]
    };

    var domElement = document.createElement('new-case-dialog');
    _.extend(domElement.style, style);

    var valuableChildren = {};

    addTitle();
    addRegistrationDateField();
    addCreditorSection();
    addFirstDebitorSection();

    var additionalPersonSections = [];
    addAddPersonButton();

    this.appendTo = getAppenderOf(domElement);

    this.getValue = function() {
      return {
        'data-înregistrării': valuableChildren['data-înregistrării'].getValue(),
        'creditor': valuableChildren['creditor'].getValue(),
        'debitori': valuableChildren['debitori'].map(function(personSection) {
          return personSection.getValue();
        }).concat(additionalPersonSections.map(function(personSection) {
          return personSection.getValue();
        }))
      };
    };

    function addTitle() {
      var title = document.createElement('h1');

      title.textContent = 'Procedură de ordin general';
      title.style.fontSize = '42px';
      title.style.fontFamily = 'TitleFont';
      title.style.fontWeight = 'bold';

      domElement.appendChild(title);
    }

    function addRegistrationDateField() {
      var dateField = new DateField('Data intentării', '', dateFieldStyle);
      dateField.appendTo(domElement);

      valuableChildren['data-înregistrării'] = dateField;
    }

    function addCreditorSection() {
      var personSection = createPersonSection('Creditor', data['creditor']);
      personSection.appendTo(domElement);

      valuableChildren['creditor'] = personSection;
    }

    function addFirstDebitorSection() {
      var personSection = createPersonSection('Debitor', data['debitori'][0]);
      personSection.appendTo(domElement);

      valuableChildren['debitori'] = [personSection];
    }

    function createPersonSection(labelText, data) {
      data = data || {};

      var style = {
        width: '380px',
        marginRight: '60px'
      };

      return new PersonSection(labelText, data, style);
    }

    function addAddPersonButton() {
      var button = new AddPersonButton('adaugă debitor');

      button.onClick(function() {
        var personSection = createPersonSection('Debitor', {});
        additionalPersonSections.push(personSection);

        personSection.makeRemovable(function() {
          var index = additionalPersonSections.indexOf(personSection);
          additionalPersonSections.splice(index, 1);
        });

        var lastPersonSectionDomElement = domElement.querySelector('person-section:last-of-type');
        personSection.insertAfter(lastPersonSectionDomElement);
      });

      button.appendTo(domElement);
    }
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

  var DateField = window.App.Widgets.DateField;
  var PersonSection = window.App.Widgets.PersonSection;
  var AddPersonButton = window.App.Widgets.AddPersonButton;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
