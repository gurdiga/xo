(function() {
  'use strict';

  function TodoItem(id, labelText) {
    assert(_.isString(id), 'TodoItem constructor expects the first argument, ID, to be a string');
    assert(_.isString(labelText), 'TodoItem constructor expects the first argument, label text, to be a string');

    var domElement = createElement(id);

    var labeledCheckbox = new LabeledCheckbox(labelText);
    labeledCheckbox.appendTo(domElement);

    var completionLabelContainer = createDOMElement('completion-label-container');
    domElement.appendChild(completionLabelContainer);

    var completionLabel;
    labeledCheckbox.onChange(toggleCompletionLabel);

    var detailWidgetContainer = createDOMElement('detail-widget-container');
    domElement.appendChild(detailWidgetContainer);

    this.setDetailWidgets = function(detailWidgets) {
      resetChildren(detailWidgetContainer, detailWidgets);
    };

    this.appendTo = getAppenderOf(domElement);

    this.getData = function() {
      var data = {
        'id': id,
        'label': labelText
      };

      var isCompleted = labeledCheckbox.getValue();

      if (isCompleted) {
        data['is-completed'] = isCompleted;
        data['completion-time'] = completionLabel.getData();
      }

      return data;
    };

    this.setData = function(data) {
      // id and label are ignored
      labeledCheckbox.setValue(data['is-completed']);

      if (data['is-completed']) addCompletionLabel(data['completion-time']);
    };

    function toggleCompletionLabel(isChecked) {
      if (isChecked) addCompletionLabel(Date.now());
      else removeCompletionLabel();
    }

    function addCompletionLabel(serializedCompletionTime) {
      var completionTime = new Date(serializedCompletionTime);

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
      'margin-top': '3px',
      'list-style-type': 'none',
      'font-size': '14px'
    };

    var attributes = {
      'data-id': id
    };

    return createDOMElement('li', style, attributes);
  }

  var LabeledCheckbox = window.App.Widgets.LabeledCheckbox;
  var CompletionLabel = window.App.Widgets.CompletionLabel;

  var assert = window.App.Utils.assert;
  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var resetChildren = window.App.Utils.resetChildren;

  window.App.Widgets.TodoItem = TodoItem;

}());
