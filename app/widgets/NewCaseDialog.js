(function() {
  'use strict';

  function NewCaseDialog(data) {
    var domElement = document.createElement('new-case-dialog');
    domElement.style.display = 'none';
    _.extend(domElement.style, style);

    var title = createTitle();
    var dateField = createDateField();
    dateField.internalName = 'data-intentării';

    var creditorSection = new PersonSection('Creditor', data['creditorul']);
    creditorSection.internalName = 'creditorul';

    var debitorSection = new PersonSection('Debitor', data['debitorul']);
    debitorSection.internalName = 'debitorul';

    var closeButton = createCloseButton(domElement);

    var tempButton = document.createElement('button');
    tempButton.textContent = 'tempButton';
    tempButton.addEventListener('click', function tempButtonClickHandler() {
      console.log('value', this.getValue());
    }.bind(this));

    appendWidgets(getAllComponents()).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.show = function() {
      domElement.style.display = 'block';
    };

    this.hide = function() {
      domElement.style.display = 'none';
    };

    this.getValue = function() {
      var value = {};

      getValuableComponents().forEach(function getComponentValue(component) {
        value[component.internalName] = component.getValue();
      });

      return value;
    };

    function getAllComponents() {
      return [title, dateField, creditorSection, debitorSection, closeButton, tempButton];
    }

    function getValuableComponents() {
      return [dateField, creditorSection, debitorSection];
    }
  }

  function createDateField() {
    var style = {
      marginBottom: '15px',
      width: '7.8em'
    };

    return new DateField('Data intentării', '01.01.2015', style);
  }

  function createTitle() {
    var title = document.createElement('h1');
    title.textContent = 'Procedură de ordin general';
    title.style.fontSize = '42px';
    title.style.fontFamily = 'TitleFont';

    return title;
  }

  function createCloseButton(dialogDomElement) {
    var button = document.createElement('button');
    button.textContent = '×';
    button.addEventListener('click', function() {
      dialogDomElement.style.display = 'none';
    });
    _.extend(button.style, closeButtonStyle);

    return button;
  }

  var style = {
    background: 'white',
    border: '1px solid #ddd',
    boxShadow: '2px 2px 7px rgba(0, 0, 0, 0.3)',
    padding: '10px 10px 90px 50px',
    position: 'absolute',
    width: '100%'
  };

  var closeButtonStyle = {
    padding: '.1em .3em',
    position: 'absolute',
    right: '0',
    top: '0',
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '1',
    background: 'transparent',
    border: 'none'
  };

  var DateField = window.App.Widgets.DateField;
  var PersonSection = window.App.Widgets.PersonSection;

  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
