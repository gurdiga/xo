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

    outlineOnFocus(textarea);
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-large-text-field', style);
  }

  function createTextareaElement(value, additionalStyle) {
    var textFieldStyle = _.pick(TextFieldInput.STYLE,
      'color', 'padding', 'font', 'backgroundImage',
      'borderRadius', 'borderWidth', 'outlineWidth'
    );

    var style = _.extend(textFieldStyle, {
      display: 'block',
      marginLeft: '1em',
      marginBottom: '5px',
      lineHeight: '1.75',
      width: '340px',
      height: '5.8em',
      resize: 'none'
    }, additionalStyle);

    var textarea = createDOMElement('textarea', style);
    textarea.value = value || '';
    return textarea;
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var outlineOnFocus = window.App.Utils.outlineOnFocus;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledLargeTextField = LabeledLargeTextField;

}());
