(function() {
  'use strict';

  function LabeledLargeTextField(labelText, value) {
    var domElement = createElement();

    var textarea = createTextareaElement(value);
    var label = new FieldLabel(labelText, [textarea]);
    label.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.remove = getRemoverOf(domElement);
    this.focus = delegateTo(textarea, 'focus');
    this.getValue = delegateTo(textarea, 'value');
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-large-text-field', style);
  }

  function createTextareaElement(value) {
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
    });

    var textarea = createDOMElement('textarea', style);

    if (value) textarea.value = value;

    addFocusEffect(textarea, {
      boxShadow: '0 0 3px 2px #b5d5ff'
    });

    return textarea;
  }

  var FieldLabel = window.App.Widgets.FieldLabel;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getRemoverOf = window.App.Utils.getRemoverOf;
  var delegateTo = window.App.Utils.delegateTo;
  var createDOMElement = window.App.Utils.createDOMElement;
  var addFocusEffect = window.App.Utils.addFocusEffect;

  window.App.Widgets.LabeledLargeTextField = LabeledLargeTextField;

}());
