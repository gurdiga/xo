import * as _ from "lodash";
import {appendWidgets} from "app/utils/appendWidgets";
import {WidgetRole} from "app/widgets/WidgetRole";
import {PersonSection} from "app/widgets/PersonSection";
import {PersonSection2} from "app/widgets/PersonSection2";
import {DropdownButton} from "app/widgets/DropdownButton";
import {SentenceSection} from "app/widgets/SentenceSection";
import {InquirySection} from "app/widgets/InquirySection";
import {ActivitiesSection} from "app/widgets/ActivitiesSection";
import {makeShy} from "app/utils/makeShy";
import {rMap} from "app/utils/rMap";
import {createDOMElement} from "app/utils/createDOMElement";

export function NewCaseDialog(data) {
  var domElement = createElement();
  WidgetRole.apply(this, [domElement]);

  var valuableChildren = {
    'persoane-terţe': []
  };

  appendWidgets([
    createTitle(),
    createCreditorSection(),
    createFirstDebitorSection(),
    createPersonSection2(data.creditor),
    createAddPersonButton(),
    createSentenceSection(),
    createInquirySection(),
    createActivitiesSection(data.activities),
    createCloseButton()
  ]).to(domElement);

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

  function createPersonSection2(fieldValues) {
    var style = {
      'width': '380px',
      'margin': '0 60px 40px 0'
    };

    var personSection = new PersonSection2('PersonSection2', fieldValues);

    personSection.setStyle(style);

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
