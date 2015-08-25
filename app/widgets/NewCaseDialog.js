(function() {
  'use strict';

  function NewCaseDialog() {
    var domElement = document.createElement('new-case-dialog');
    domElement.style.display = 'block';

    var title = createTitle();

    appendWidgets([title]).to(domElement);

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

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
