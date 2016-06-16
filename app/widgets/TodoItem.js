(function() {
  'use strict';

  function TodoItem(labelText) {
    var domElement = createElement();
    var labeledCheckbox = createLabeledCheckbox(labelText);

    domElement.appendChild(labeledCheckbox);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      'list-style-type': 'none'
    };

    return createDOMElement('li', style);
  }

  function createLabeledCheckbox(labelText) {
    var checkbox = createDOMElement('input');
    checkbox.type = 'checkbox';

    var labelTextContainer = createDOMElement('span');
    labelTextContainer.textContent = labelText;

    var label = createDOMElement('label');
    label.appendChild(checkbox);
    label.appendChild(labelTextContainer);

    return label;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoItem = TodoItem;

}());
