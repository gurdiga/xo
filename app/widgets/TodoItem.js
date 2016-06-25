(function() {
  'use strict';

  function TodoItem(id, labelText) {
    assert(_.isString(id), 'TodoItem constructor expects the first argument, ID, to be a string');
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement();

    var labeledCheckbox = new LabeledCheckbox(labelText);
    labeledCheckbox.appendTo(domElement);
    labeledCheckbox.onChange(toggleCompletionLabelFor(domElement));

    this.appendTo = getAppenderOf(domElement);

    this.getData = function() {
      return {
        isCompleted: labeledCheckbox.getValue()
      };
    };
  }

  function createElement() {
    var style = {
      'list-style-type': 'none',
      'font-size': '14px'
    };

    return createDOMElement('li', style);
  }

  function toggleCompletionLabelFor(domElement) {
    return function(isChecked) {
      if (isChecked) addCompletionLabelTo(domElement);
      else removeCompletionLabelFrom(domElement);
    };
  }

  function addCompletionLabelTo(domElement) {
    domElement.appendChild(createCompletionLabel());
  }

  function removeCompletionLabelFrom(domElement) {
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

    var span = createDOMElement('span', style);
    span.textContent = 'completat la ';
    span.appendChild(timeElement);

    return span;
  }

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;

  var assert = window.App.Utils.assert;
  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var DateFormatting = window.App.Utils.DateFormatting;

  window.App.Widgets.TodoItem = TodoItem;

}());
