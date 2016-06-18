(function() {
  'use strict';

  function TodoItem(id, labelText) {
    assert(_.isString(id), 'TodoItem constructor expects the first argument, ID, to be a string');
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement();
    var checkbox = createCheckbox(id);
    var labeledCheckbox = createLabeledCheckbox(checkbox, labelText);
    var completionLabel = createCompletionLabel();

    domElement.appendChild(labeledCheckbox);
    handleClicks(checkbox, addCompletionLabel, removeCompletionLabel);

    this.markAsDone = function() {
      checkbox.checked = true;
      addCompletionLabel();
    };

    this.markAsUndone = function() {
      checkbox.checked = false;
      removeCompletionLabel();
    };

    this.appendTo = getAppenderOf(domElement);

    function addCompletionLabel() {
      domElement.appendChild(completionLabel);
    }

    function removeCompletionLabel() {
      domElement.removeChild(completionLabel);
    }

    function createCompletionLabel() {
      return createDOMElement('span');
    }
  }

  function handleClicks(checkbox, onCheck, onUncheck) {
    checkbox.addEventListener('click', function() {
      if (checkbox.checked) onCheck();
      else onUncheck();
    });
  }

  function createElement() {
    var style = {
      'list-style-type': 'none',
      'font-size': '14px'
    };

    return createDOMElement('li', style);
  }

  function createCheckbox(id) {
    var style = {
      'vertical-align': '1px',
      'margin-left': '0'
    };

    var attributes = {
      'data-id': id
    };

    var checkbox = createDOMElement('input', style, attributes);

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
