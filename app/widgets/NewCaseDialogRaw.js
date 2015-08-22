(function() {
  'use strict';

  function NewCaseDialogRaw(data) {
    var domElement = document.createElement('new-case-dialog');
    domElement.style.display = 'none';
    _.extend(domElement.style, style);

    var title = document.createElement('h1');
    title.textContent = 'Procedură de ordin general';

    var date = createDateField();
    date.internalName = 'data-intentării';

    var creditorSection = new PersonSectionRaw('Creditor', data['creditorul']);
    creditorSection.internalName = 'creditorul';

    var debitorSection = new PersonSectionRaw('Debitor', data['debitorul']);
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
      return [title, date, creditorSection, debitorSection, closeButton, tempButton];
    }

    function getValuableComponents() {
      return [date, creditorSection, debitorSection];
    }
  }

  function createDateField() {
    var style = {
      marginBottom: '15px',
      width: '7.8em'
    };

    return new DateFieldRaw('Data intentării', '01.01.2015', style);
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

  var DateFieldRaw = window.App.Widgets.DateFieldRaw;
  var PersonSectionRaw = window.App.Widgets.PersonSectionRaw;

  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.NewCaseDialogRaw = NewCaseDialogRaw;

}());
