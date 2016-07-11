(function() {
  'use strict';

  function LabeledCheckbox(labelText) {
    var checkbox = createCheckbox();
    var domElement = createElement(labelText, checkbox);

    this.getValue = function() {
      return checkbox.checked;
    };

    this.setValue = function(isChecked) {
      checkbox.checked = isChecked;
    };

    this.onChange = function(callback) {
      checkbox.addEventListener('click', function() {
        callback(checkbox.checked);
      });
    };

    this.appendTo = getAppenderOf(domElement);
  }

  function createCheckbox() {
    var style = {
      'vertical-align': '1px'
    };

    var attributes = {
      'type': 'checkbox'
    };

    return createDOMElement('input', style, attributes);
  }

  function createElement(labelText, checkbox) {
    var span = createDOMElement('span');
    span.textContent = labelText;

    var label = createDOMElement('label');
    label.appendChild(checkbox);
    label.appendChild(span);

    var domElement = createDOMElement('labeled-checkbox');
    domElement.appendChild(label);

    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledCheckbox = LabeledCheckbox;
}());
