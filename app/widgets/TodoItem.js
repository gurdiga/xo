(function() {
  'use strict';

  function TodoItem(id, labelText) {
    assert(_.isString(id), 'TodoItem constructor expects the first argument, ID, to be a string');
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement();
    var checkbox = createCheckbox(id);
    var labeledCheckbox = createLabeledCheckbox(checkbox, labelText);

    domElement.appendChild(labeledCheckbox);
    handleClicks(checkbox, addCompletionLabel, removeCompletionLabel);

    this.appendTo = getAppenderOf(domElement);

    function addCompletionLabel() {
      domElement.appendChild(createCompletionLabel());
    }

    function removeCompletionLabel() {
      var completionLabel = domElement.children[1];
      domElement.removeChild(completionLabel);
    }

    function createCompletionLabel() {
      var timeElement = createDOMElement('time');
      var currentDate = new Date();
      timeElement.setAttribute('timestamp', currentDate.toISOString());
      timeElement.textContent = DateFormatting.format(currentDate, 'DD.MM.YYYY HH:mm');

      var style = {
        'color': 'gray',
        'font-size': '12px',
        'margin-left': '1em'
      };

      var label = createDOMElement('span', style);
      label.textContent = 'completat la ';
      label.appendChild(timeElement);

      return label;
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
  var DateFormatting = window.App.Utils.DateFormatting;

  window.App.Widgets.TodoItem = TodoItem;

}());
