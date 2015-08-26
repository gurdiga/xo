(function() {
  'use strict';

  function SelectField(labelText, options, defaultValue) {
    var domElement = document.createElement('select-field');
    domElement.style.display = 'block';

    var select = document.createElement('select');
    options.forEach(appendOptionTo(select));
    select.value = defaultValue;
    _.extend(select.style, style);

    var label = new FieldLabel(labelText, {}, [select]);
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

  function appendOptionTo(domElement) {
    return function(optionText) {
      var option = document.createElement('option');
      option.textContent = optionText;
      domElement.appendChild(option);
    };
  }

  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var style = {
    width: TextFieldInput.DEFAULT_WIDTH,
    font: TextFieldInput.DEFAULT_FONT,
    position: 'absolute',
    marginTop: '-2px'
  };

  var FieldLabel = window.App.Widgets.FieldLabel;

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var getDestroyerOf = window.App.Utils.getDestroyerOf;

  window.App.Widgets.SelectField = SelectField;

}());
