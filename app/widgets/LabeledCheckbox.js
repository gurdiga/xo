(function() {
  'use strict';

  function LabeledCheckbox(labelText) {
    var domElement = createElement(labelText);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement(labelText) {
    var domElement = createDOMElement('labeled-checkbox');
    var label = createDOMElement('label');

    var checkbox = createDOMElement('input');
    checkbox.type = 'checkbox';
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
