(function() {
  'use strict';

  function TextFieldInput(value) {
    var domElement = createElement(value);

    this.appendTo = getAppenderOf(domElement);
    this.getValue = delegateTo(domElement, 'value');

    this.setValue = function(value) {
      domElement.value = value;
    };

    this.focus = delegateTo(domElement, 'focus');

    this.precedeWith = function(elementToInsert) {
      domElement.parentNode.insertBefore(elementToInsert, domElement);
    };

    this.setStyle = getStylerOf(domElement);
  }

  function createElement(value) {
    var domElement = createDOMElement('input', TextFieldInput.STYLE);

    if (value) domElement.value = value;

    addFocusEffect(domElement, {
      boxShadow: '0 0 3px 2px #b5d5ff'
    });

    return domElement;
  }

  TextFieldInput.STYLE = {
    color: 'black',
    padding: '4px',
    font: 'bold 14px sans-serif',
    width: '200px',
    backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
    backgroundPosition: '0 -4px',
    borderRadius: '2px',
    borderWidth: '0px',
    outlineWidth: '0px'
  };

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getStylerOf = window.App.Utils.getStylerOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;
  var addFocusEffect = window.App.Utils.addFocusEffect;

  window.App.Widgets.TextFieldInput = TextFieldInput;

}());
