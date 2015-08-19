(function() {
  'use strict';

  function NewCaseButtonRaw() {
    var domElement = document.createElement('button');
    domElement.textContent = 'Procedură nouă';
    _.extend(domElement.style, style);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

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

  window.App.Widgets.NewCaseButtonRaw = NewCaseButtonRaw;

}());
