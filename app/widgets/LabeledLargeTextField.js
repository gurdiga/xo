(function() {
  'use strict';

  function LabeledLargeTextField(labelText, value, additionalStyle) {
    var domElement = createElement();

    var textarea = createTextareaElement(value, additionalStyle);
    var label = new FieldLabel(labelText, {}, [textarea]);
    label.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.destroy = getDestroyerOf(domElement);

    this.getValue = function() {
      return textarea.value;
    };

    outlineFieldOnFocus(textarea);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-large-text-field', style);
  }

  function createTextareaElement(value, additionalStyle) {
    var style = {
      color: 'black',
      padding: '4px',
      marginLeft: '1em',
      marginBottom: '5px',
      font: 'bold 14px/1.75 sans-serif',
      width: '340px',
      height: '5.8em',
      backgroundImage: 'url(data:image/gif;base64,R0lGODlhMgAYAIABAN3d3f///yH5BAEKAAEALAAAAAAyABgAAAIrjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyrAGBjd96zu9+D/wFCgA7)',
      borderRadius: '2px',
      borderWidth: '0px',
      outlineWidth: '0px',
      resize: 'none'
    };

    _.extend(style, additionalStyle);

    var textarea = createDOMElement('textarea', style);

    textarea.value = value || '';

    return textarea;
  }

  var FieldLabel = window.App.Widgets.FieldLabel;

  var outlineFieldOnFocus = window.App.Utils.outlineFieldOnFocus;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledLargeTextField = LabeledLargeTextField;

}());
