(function() {
  'use strict';

  function TodoItem(labelText) {
    var domElement = createDOMElement('li');

    addLabeledCheckbox(labelText, domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function addLabeledCheckbox(labelText, domElement) {
    var checkbox = createDOMElement('input');
    checkbox.type = 'checkbox';

    var labelTextContainer = createDOMElement('span');
    labelTextContainer.textContent = labelText;

    var label = createDOMElement('label');
    label.appendChild(checkbox);
    label.appendChild(labelTextContainer);

    domElement.appendChild(label);
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoItem = TodoItem;

}());
