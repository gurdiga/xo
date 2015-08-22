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
      select.addEventListener('change', function(event) {
        f(event.target.value);
      });
    };

    this.destroy = function() {
      domElement.parentNode.removeChild(domElement);
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

  var FieldLabel = window.App.Widgets.FieldLabel;

  window.App.Widgets.SelectField = SelectField;

}());
