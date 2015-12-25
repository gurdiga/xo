(function() {
  'use strict';

  function TextFieldInput(value, additionalStyle) {
    var domElement = createElement(value, additionalStyle);

    this.appendTo = getAppenderOf(domElement);

    this.getValue = function() {
      return domElement.value;
    };

    this.setValue = function(value) {
      domElement.value = value;
    };

    this.focus = delegateTo(domElement, 'focus');

    this.precedeWith = function(elementToInsert) {
      domElement.parentNode.insertBefore(elementToInsert, domElement);
    };

    outlineOnFocus(domElement);
  }

  function createElement(value, additionalStyle) {
    var style = _.extend({}, TextFieldInput.STYLE, additionalStyle);

    var domElement = createDOMElement('input', style);
    domElement.value = value || '';
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

  var outlineOnFocus = window.App.Utils.outlineOnFocus;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.TextFieldInput = TextFieldInput;

}());
