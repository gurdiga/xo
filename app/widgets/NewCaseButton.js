(function() {
  'use strict';

  function NewCaseButton() {
    var domElement = document.createElement('button');
    domElement.textContent = 'Procedură nouă';
    _.extend(domElement.style, style);

    this.appendTo = getAppenderOf(domElement);

    this.onClick = function(f) {
      domElement.addEventListener('click', f);
    };
  }

  var style = {
    padding: '.5em 1em',
    fontSize: '1.5em',
    fontWeight: 'bold',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.NewCaseButton = NewCaseButton;

}());
