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
    addAddDebitorButton();

    this.appendTo = getAppenderOf(domElement);

    this.getValue = function() {
      return rMap('getValue', valuableChildren);
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

    function addAddDebitorButton() {
      var button = new AddPersonButton('adaugă debitor');
      var debitors = valuableChildren['debitori'];

      button.onClick(function() {
        var personSection = createPersonSection('Debitor', {});

        personSection.makeRemovable(function() {
          removeItem(personSection).from(debitors);
        });

        debitors.push(personSection);
        personSection.insertAfter(lastElement('person-section').of(domElement));
      });

      button.appendTo(domElement);
    }
  }

  function removeItem(item) {
    return {
      'from': function(array) {
          var index = array.indexOf(item);
          array.splice(index, 1);
      }
    };
  }

  function lastElement(tagName) {
    return {
      'of': function(domElement) {
        return domElement.querySelector(tagName + ':last-of-type');
      }
    };
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
  var rMap = window.App.Utils.rMap;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
