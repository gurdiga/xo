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

    var domElement = createElement();

    var valuableChildren = {
      'persoane-terţe': []
    };

    addTitle();
    addCreditorSection();
    addFirstDebitorSection();
    addAddPersonButton();
    addSentenceSection();
    addActivitiesSection();
    addCloseButton();

    this.appendTo = getAppenderOf(domElement);

    this.getValue = function() {
      return rMap('getValue', valuableChildren);
    };

    function addTitle() {
      var style = {
        fontSize: '42px',
        fontFamily: 'TitleFont',
        fontWeight: 'bold',
        marginTop: '0px'
      };

      var title = createDOMElement('h1', style);

      title.textContent = 'Procedură de ordin general';

      domElement.appendChild(title);
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

    function addActivitiesSection() {
      var style = {
        marginRight: '60px'
      };

      var activitiesSection = new ActivitiesSection(style);
      activitiesSection.appendTo(domElement);
    }

    function addCloseButton() {
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

      var button = createDOMElement('button', style);

      button.type = 'close';
      button.textContent = '×';
      button.title = 'Închide';

      makeShy(button);

      button.addEventListener('click', function() {
        domElement.style.display = 'none';
      });

      domElement.appendChild(button);
    }
  }

  function createElement() {
    var style = {
      display: 'block',
      position: 'relative',
      backgroundColor: 'white',
      width: '960px',
      padding: '50px 0 50px 50px',
      border: '1px solid #ddd',
      boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 7px'
    };

    var domElement = createDOMElement('new-case-dialog', style);

    return domElement;
  }

  function lastDomElement(tagName) {
    return {
      'inside': function(domElement) {
        return domElement.querySelector(tagName + ':last-of-type');
      }
    };
  }

  var PersonSection = window.App.Widgets.PersonSection;
  var DropdownButton = window.App.Widgets.DropdownButton;
  var SentenceSection = window.App.Widgets.SentenceSection;
  var ActivitiesSection = window.App.Widgets.ActivitiesSection;

  var makeShy = window.App.Utils.makeShy;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var rMap = window.App.Utils.rMap;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
