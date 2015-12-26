(function() {
  'use strict';

  function CreateWritButton() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      color: 'rgb(119, 119, 119)',
      font: 'bold 14px sans-serif',
      padding: '5px 14px',
      background: 'transparent',
      border: '1px solid silver',
      borderRadius: '5px'
    };

    var domElement = createDOMElement('button', style);

    domElement.textContent = 'încheiere';
    domElement.setAttribute('widget', 'CreateWritButton');

    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.CreateWritButton = CreateWritButton;

}());
