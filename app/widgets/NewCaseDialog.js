(function() {
  'use strict';

  function NewCaseDialog() {
    var domElement = document.createElement('new-case-dialog');
    domElement.style.display = 'block';

    var title = document.createElement('h1');

    appendWidgets([title]).to(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };
  }

  var appendWidgets = window.App.Utils.appendWidgets;

  window.App.Widgets.NewCaseDialog = NewCaseDialog;

}());
