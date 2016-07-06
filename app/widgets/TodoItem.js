(function() {
  'use strict';

  function TodoItem(id, labelText) {
    assert(_.isString(id), 'TodoItem constructor expects the first argument, ID, to be a string');
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement(id);

    var labeledCheckbox = new LabeledCheckbox(labelText);
    labeledCheckbox.appendTo(domElement);

    var completionLabelContainer = createCompletionLabelContainer();
    domElement.appendChild(completionLabelContainer);

    var completionLabel;
    labeledCheckbox.onChange(toggleCompletionLabel);

    this.appendTo = getAppenderOf(domElement);

    this.getData = function() {
      var data = {
        'id': id,
        'label': labelText
      };

      var isCompleted = labeledCheckbox.getValue();

      data['is-completed'] = isCompleted;

      if (isCompleted) data['completion-time'] = completionLabel.getData();

      return data;
    };

    this.setData = function(data) {
      // id and label are ignored
      labeledCheckbox.setValue(data['is-completed']);

      if (data['is-completed']) addCompletionLabel(new Date(data['completion-time']));
    };

    function toggleCompletionLabel(isChecked) {
      if (isChecked) addCompletionLabel(new Date());
      else removeCompletionLabel();
    }

    function addCompletionLabel(completionTime) {
      completionLabel = new CompletionLabel(completionTime);

      completionLabel.setStyle({
        'margin-left': '0.5em'
      });

      completionLabel.appendTo(completionLabelContainer);
    }

    function removeCompletionLabel() {
      completionLabel.remove();
      completionLabel = null;
    }
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

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;
  var CompletionLabel = window.App.Widgets.CompletionLabel;

  var assert = window.App.Utils.assert;
  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoItem = TodoItem;

}());
