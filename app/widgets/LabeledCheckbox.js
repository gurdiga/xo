(function() {
  'use strict';

  function LabeledCheckbox(labelText) {
    var checkbox = createDOMElement('input');
    checkbox.type = 'checkbox';

    var domElement = createElement(labelText, checkbox);

    this.getValue = function() {
      return checkbox.checked;
    };

    this.setValue = function(isChecked) {
      checkbox.checked = isChecked;
    };

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(labelText, checkbox) {
    var domElement = createDOMElement('labeled-checkbox');

    var label = createDOMElement('label');
    label.appendChild(checkbox);

    var span = createDOMElement('span');
    span.textContent = labelText;
    label.appendChild(span);

    domElement.appendChild(label);

    return domElement;
  }

  var getAppenderOf = window.App.Utils.getAppenderOf;
  var createDOMElement = window.App.Utils.createDOMElement;

  window.App.Widgets.LabeledCheckbox = LabeledCheckbox;
}());
