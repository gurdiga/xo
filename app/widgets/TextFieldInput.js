(function() {
  'use strict';

  function TextFieldInput(value, additionalStyle) {
    var domElement = document.createElement('input');
    domElement.value = value || '';
    _.extend(domElement.style, style, additionalStyle);

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

    outlineFieldOnFocus(domElement);
  }

  var style = {
    color: 'black',
    padding: '4px',
    font: 'bold 14px sans-serif',
    width: '16em',
    backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
    backgroundPosition: '0 -4px',
    borderRadius: '2px',
    border: 'none',
    outline: 'none'
  };

  var outlineFieldOnFocus = window.App.Utils.outlineFieldOnFocus;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TextFieldInput = TextFieldInput;

}());
