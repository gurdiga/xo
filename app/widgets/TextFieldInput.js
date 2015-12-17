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

    this.focus = function() {
      domElement.focus();
    };

    this.precedeWith = function(elementToInsert) {
      domElement.parentNode.insertBefore(elementToInsert, domElement);
    };

    outlineFieldOnFocus(domElement);
  }

  function createElement(value, additionalStyle) {
    var style = {
      color: 'black',
      padding: '4px',
      font: TextFieldInput.DEFAULT_FONT,
      width: TextFieldInput.DEFAULT_WIDTH,
      backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
      backgroundPosition: '0 -4px',
      borderRadius: '2px',
      borderWidth: '0px',
      outlineWidth: '0px'
    };

    _.extend(style, additionalStyle);

    var domElement = createDOMElement('input', style);

    domElement.value = value || '';

    return domElement;
  }

  TextFieldInput.DEFAULT_WIDTH = '200px';
  TextFieldInput.DEFAULT_FONT = 'bold 14px sans-serif';

  var outlineFieldOnFocus = window.App.Utils.outlineFieldOnFocus;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.TextFieldInput = TextFieldInput;

}());
