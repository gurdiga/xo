(function() {
  'use strict';

  function SelectFieldRaw(labelText, options, defaultValue) {
    var domElement = document.createElement('select-field');
    domElement.style.display = 'block';

    var select = document.createElement('select');
    options.forEach(appendOptionTo(select));
    select.value = defaultValue;
    _.extend(select.style, style);

    var label = new FieldLabelRaw(labelText, {}, [select]);
    label.appendTo(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.getValue = function() {
      return select.value;
    };

    this.setValue = function(value) {
      select.value = value;
    };

    this.onChange = function(f) {
      select.addEventListener('change', f);
    };
  }

  function appendOptionTo(domElement) {
    return function(optionText) {
      var option = document.createElement('option');
      option.textContent = optionText;
      domElement.appendChild(option);
    };
  }

  var style = {
    width: '16em',
    fontSize: '14px',
    position: 'absolute',
    marginTop: '-2px'
  };

  var FieldLabelRaw = window.App.Widgets.FieldLabelRaw;

  window.App.Widgets.SelectFieldRaw = SelectFieldRaw;

}());
