(function() {
  'use strict';

  function NewCaseDialog(data) {
    var domElement = createElement();

    var valuableChildren = {
      'persoane-terţe': []
    };

    appendWidgets([
      createTitle(),
      createCreditorSection(),
      createFirstDebitorSection(),
      createAddPersonButton(),
      createSentenceSection(),
      createInquirySection(),
      createActivitiesSection(data.activities),
      createCloseButton()
    ]).to(domElement);

    this.appendTo = getAppenderOf(domElement);

    this.getValue = function() {
      return rMap('getValue', valuableChildren);
    };

    function createTitle() {
      var style = {
        fontSize: '42px',
        fontFamily: 'TitleFont',
        fontWeight: 'bold',
        marginTop: '0px'
      };

      var title = createDOMElement('h1', style);

      title.textContent = 'Procedură de ordin general';

      return title;
    }

    function createCreditorSection() {
      var personSection = createPersonSection('Creditor', data['creditor']);

      valuableChildren['creditor'] = personSection;

      return personSection;
    }

    function createFirstDebitorSection() {
      var personSection = createPersonSection('Debitor', data['debitori'][0]);

      valuableChildren['debitori'] = [personSection];

      return personSection;
    }

    function createPersonSection(labelText, data) {
      var style = {
        width: '380px',
        marginRight: '60px'
      };

      var personSection = new PersonSection(labelText, data);

      personSection.setStyle(style);

      return personSection;
    }

    function createAddPersonButton() {
      var style = {
        position: 'absolute',
        marginLeft: '-200px',
        marginTop: '360px'
      };

      var button = new DropdownButton('adaugă persoană', {
        'debitor':        addRemovablePersonSection('Debitor', 'debitori'),
        'persoană terţă': addRemovablePersonSection('Persoană terţă', 'persoane-terţe')
      });

      button.setStyle(style);

      return button;
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

    function createSentenceSection() {
      var fieldValues = {};

      var style = {
        verticalAlign: 'top',
        width: '380px',
        marginRight: '60px'
      };

      var sentenceSection = new SentenceSection(fieldValues);

      sentenceSection.setStyle(style);

      return sentenceSection;
    }

    function createInquirySection() {
      var fieldValues = {};

      var style = {
        display: 'inline-block',
        width: '380px'
      };

      var inquirySection = new InquirySection(fieldValues);

      inquirySection.setStyle(style);

      return inquirySection;
    }

    function createActivitiesSection(activitiesArray) {
      var activitiesSection = new ActivitiesSection();

      var style = {
        marginRight: '60px'
      };

      activitiesSection.setActivities(activitiesArray);
      activitiesSection.setStyle(style);

      return activitiesSection;
    }

    function createCloseButton() {
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

      return button;
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
  var InquirySection = window.App.Widgets.InquirySection;
  var ActivitiesSection = window.App.Widgets.ActivitiesSection;

  var makeShy = window.App.Utils.makeShy;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var rMap = window.App.Utils.rMap;
  var createDOMElement = window.App.Utils.createDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
