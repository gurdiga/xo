(function() {
  'use strict';

  function LabeledSelectField(labelText, options, defaultValue) {
    var domElement = createElement();

    var select = createSelect(options, defaultValue);

    var label = new FieldLabel(labelText, labelStyle, [select]);
    label.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
    this.destroy = getDestroyerOf(domElement);

    this.getValue = function() {
      return select.value;
    };

    this.setValue = function(value) {
      select.value = value;
    };

    this.onChange = function(f) {
      select.addEventListener('change', function(event) {
        f(event.target.value);
      });
    };
  }

  function createElement() {
    var style = {
      display: 'block'
    };

    return createDOMElement('labeled-select-field', style);
  }

  function createSelect(options, defaultValue) {
    var style = {
      width: TextFieldInput.DEFAULT_WIDTH,
      font: TextFieldInput.DEFAULT_FONT,
      position: 'absolute',
      marginTop: '-2px'
    };

    var select = createDOMElement('select', style);

    options.forEach(appendOptionTo(select));
    select.value = defaultValue;

    return select;
  }

  function appendOptionTo(domElement) {
    return function(optionText) {
      var item = _.isPlainObject(optionText) ?
        createOptgroup(optionText) :
        createOption(optionText);

      domElement.appendChild(item);
    };
  }

  function createOptgroup(group) {
    var optgroup = createDOMElement('optgroup');
    optgroup.label = group.optgroupLabel;
    group.options.forEach(appendOptionTo(optgroup));
    return optgroup;
  }

  function createOption(optionText) {
    var option = createDOMElement('option');
    option.textContent = optionText;
    return option;
  }

  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var labelStyle = {
    marginBottom: '6px'
  };

  var FieldLabel = window.App.Widgets.FieldLabel;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledSelectField = LabeledSelectField;

}());
