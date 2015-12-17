(function() {
  'use strict';

  function NewCaseButton() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);

    this.onClick = function(f) {
      domElement.addEventListener('click', f);
    };
  }

  function createElement() {
    var style = {
      padding: '.5em 1em',
      fontSize: '1.5em',
      fontWeight: 'bold',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px'
    };

    var domElement = createDOMElement('button', style);
    domElement.textContent = 'Procedură nouă';
    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.NewCaseButton = NewCaseButton;

}());
