(function() {
  'use strict';

  function makeRemovable(domElement, onRemove, additionalButtonStyle) {
    assertArguments(domElement, onRemove);

    domElement.setAttribute('removable', '');
    domElement.style.position = 'relative';

    var button = createButton(additionalButtonStyle);

    button.addEventListener('click', function() {
      domElement.parentNode.removeChild(domElement);
      onRemove();
    });

    domElement.appendChild(button);
  }

  function assertArguments(domElement, onRemove) {
    if (!(domElement instanceof HTMLElement)) throw new Error('makeRemovable: the first argument is required to be a DOM element');

    if (!(onRemove instanceof Function)) throw new Error(
      'makeRemovable: the second argument is required to be a function to call back on remove'
    );
  }

  function createButton(additionalStyle) {
    var style = _.extend({}, buttonStyle, additionalStyle);
    var button = createDOMElement('button', style);
    button.style.left = '-' + (parseInt(button.style.fontSize, 10) + 2);

    button.textContent = '×';
    button.title = 'Elimină';
    button.setAttribute('type', 'remove');

    makeShy(button);

    return button;
  }

  var buttonStyle = {
    position: 'absolute',
    top: '0px',
    padding: '2px 5px',
    borderWidth: '0px',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontFamily: 'sans-serif'
  };

  var makeShy = window.App.Utils.makeShy;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Utils.makeRemovable = makeRemovable;

}());
