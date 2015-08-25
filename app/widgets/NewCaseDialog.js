(function() {
  'use strict';

  function NewCaseDialog() {
    var domElement = document.createElement('new-case-dialog');
    domElement.style.display = 'block';
    domElement.style.backgroundColor = 'white';
    domElement.style.width = '960px';
    domElement.style.padding = '50px';

    appendWidgets([
      createTitle(),
      new DateField('Data intentării'),
      new PersonSection('Creditorul', {})
    ]).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
  }

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
