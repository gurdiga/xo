(function() {
  'use strict';

  function TodoItem(labelText) {
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement();
    var checkbox = createCheckbox();
    var labeledCheckbox = createLabeledCheckbox(checkbox, labelText);

    domElement.appendChild(labeledCheckbox);

    this.markAsDone = function() {
      checkbox.checked = true;
    };

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {
      'list-style-type': 'none'
    };

    return createDOMElement('li', style);
  }

  function createCheckbox() {
    var checkbox = createDOMElement('input');

    checkbox.type = 'checkbox';

    return checkbox;
  }

  function createLabeledCheckbox(checkbox, labelText) {
    var labelTextContainer = createDOMElement('span');
    labelTextContainer.textContent = labelText;

    var label = createDOMElement('label');
    label.appendChild(checkbox);
    label.appendChild(labelTextContainer);

    return label;
  }

  var assert = window.App.Utils.assert;
  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoItem = TodoItem;

}());
