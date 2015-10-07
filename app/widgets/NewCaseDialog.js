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

    var valuableChildren = {
      'persoane-terţe': []
    };

    addTitle();
    addRegistrationDateField();
    addCreditorSection();
    addFirstDebitorSection();
    addAddPersonButton();
    addSentenceSection();
    addCaseSubjectSection();
    addCloseButton();

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
      title.style.marginTop = '0px';

      domElement.appendChild(title);
    }

    function addRegistrationDateField() {
      var style = {
        width: '100px',
        marginBottom: '10px'
      };

      var dateField = new DateField('Data intentării', '', style);
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
      var style = {
        width: '380px',
        marginRight: '60px'
      };

      return new PersonSection(labelText, data, style);
    }

    function addAddPersonButton() {
      var style = {
        position: 'absolute',
        marginLeft: '-200px',
        marginTop: '360px'
      };

      var button = new DropdownButton('adaugă persoană ▾', {
        '■ debitor':        addRemovablePersonSection('Debitor', 'debitori'),
        '■ persoană terţă': addRemovablePersonSection('Persoană terţă', 'persoane-terţe')
      }, style);

      button.appendTo(domElement);
    }

    function addRemovablePersonSection(labelText, personListInternalName) {
      return function() {
        var personSection = createPersonSection(labelText);
        var personSectionList = valuableChildren[personListInternalName];

        personSection.makeRemovable(function onRemoveCallback() {
          _.pull(personSectionList, personSection);
        });

        personSectionList.push(personSection);
        personSection.insertAfter(lastDomElement('person-section').inside(domElement));
      };
    }

    function addSentenceSection() {
      var fieldValues = {};

      var style = {
        verticalAlign: 'top',
        width: '380px',
        marginRight: '60px'
      };

      var sentenceSection = new SentenceSection(fieldValues, style);
      sentenceSection.appendTo(domElement);
    }

    function addCaseSubjectSection() {
      var caseSubjectSection = new CaseSubjectSection();
      caseSubjectSection.appendTo(domElement);
    }

    function addCloseButton() {
      var button = document.createElement('button');
      button.type = 'close';
      button.textContent = '×';
      button.title = 'Închide';

      var style = {
        borderWidth: '0px',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '0px',
        left: '0px',
        padding: '10px',
        lineHeight: '0.5em',
        fontSize: '20px'
      };
      _.extend(button.style, style);
      makeShy(button);

      button.addEventListener('click', function() {
        domElement.style.display = 'none';
      });

      domElement.appendChild(button);
    }
  }

  function lastDomElement(tagName) {
    return {
      'inside': function(domElement) {
        return domElement.querySelector(tagName + ':last-of-type');
      }
    };
  }

  var style = {
    display: 'block',
    position: 'relative',
    backgroundColor: 'white',
    width: '960px',
    padding: '50px 0 50px 50px',
    border: '1px solid #ddd',
    boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 7px'
  };

  var DateField = window.App.Widgets.DateField;
  var PersonSection = window.App.Widgets.PersonSection;
  var DropdownButton = window.App.Widgets.DropdownButton;
  var SentenceSection = window.App.Widgets.SentenceSection;
  var CaseSubjectSection = window.App.Widgets.CaseSubjectSection;

  var makeShy = window.App.Utils.makeShy;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var rMap = window.App.Utils.rMap;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
