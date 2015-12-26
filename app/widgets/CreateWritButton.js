(function() {
  'use strict';

  function CreateWritButton() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var domElement = document.createElement('button');
    domElement.textContent = 'Încheiere';
    domElement.setAttribute('widget', 'CreateWritButton');
    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.CreateWritButton = CreateWritButton;

}());
