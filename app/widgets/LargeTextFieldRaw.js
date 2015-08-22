(function() {
  'use strict';

  function LargeTextFieldRaw(labelText, value, additionalStyle) {
    var domElement = document.createElement('large-text-field');
    domElement.style.display = 'block';

    var textarea = document.createElement('textarea');
    textarea.value = value || '';
    _.extend(textarea.style, style, additionalStyle);

    var label = new FieldLabelRaw(labelText, {}, [textarea]);
    label.appendTo(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.getValue = function() {
      return textarea.value;
    };

    this.destroy = function() {
      domElement.parentNode.removeChild(domElement);
    };

    outlineFieldOnFocus(textarea);
  }

  var style = {
    color: 'black',
    padding: '4px',
    marginLeft: '1em',
    font: 'bold 14px/1.75 sans-serif',
    width: '26em',
    height: '5.8em',
    backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
    borderRadius: '2px',
    border: 'none',
    outline: 'none',
    resize: 'none'
  };

  var FieldLabelRaw = window.App.Widgets.FieldLabelRaw;

  var outlineFieldOnFocus = window.App.Mixins.outlineFieldOnFocus;

  window.App.Widgets.LargeTextFieldRaw = LargeTextFieldRaw;

}());
