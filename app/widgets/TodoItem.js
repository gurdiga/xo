(function() {
  'use strict';

  function TodoItem(id, labelText) {
    assert(_.isString(id), 'TodoItem constructor expects the first argument, ID, to be a string');
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement(id);

    var completionLabelContainer = createCompletionLabelContainer();
    var labeledCheckbox = new LabeledCheckbox(labelText);
    labeledCheckbox.appendTo(domElement);
    labeledCheckbox.onChange(toggleCompletionLabelFor(completionLabelContainer));
    domElement.appendChild(completionLabelContainer);

    this.appendTo = getAppenderOf(domElement);

    this.getData = function() {
      return {
        'id': id,
        'label': labelText,
        'is-completed': labeledCheckbox.getValue()
      };
    };

    this.setData = function(newData) {
      // id and label are ignored
      labeledCheckbox.setValue(newData['is-completed']);
    };
  }

  TodoItem.createWithData = function(data) {
    var todoItem = new TodoItem(data.id, data.label);

    todoItem.setData(data);

    return todoItem;
  };

  function createElement(id) {
    var style = {
      'list-style-type': 'none',
      'font-size': '14px'
    };

    var attributes = {
      'data-id': id
    };

    return createDOMElement('li', style, attributes);
  }

  function createCompletionLabelContainer() {
    return createDOMElement('completion-label-container');
  }

  function toggleCompletionLabelFor(completionLabelContainer) {
    return function(isChecked) {
      if (isChecked) addCompletionLabelTo(completionLabelContainer);
      else removeCompletionLabelFrom(completionLabelContainer);
    };
  }

  function addCompletionLabelTo(completionLabelContainer) {
    var completionLabel = new CompletionLabel(new Date());
    completionLabel.appendTo(completionLabelContainer);
  }

  function removeCompletionLabelFrom(completionLabelContainer) {
    completionLabelContainer.innerHTML = '';
  }

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;
  var CompletionLabel = window.App.Widgets.CompletionLabel;

  var assert = window.App.Utils.assert;
  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoItem = TodoItem;

}());
