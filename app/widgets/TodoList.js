(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);

    this.setItems = function(todoItemsData) {
      assert(Array.isArray(todoItemsData), 'TodoList#setItems expects the argument to be an array of objects');

      emptyDOMElement(domElement);
      addItems(todoItemsData, domElement);
    };
  }

  function createElement() {
    var style = {
      'margin': '0px',
      'padding': '0px'
    };

    var attributes = {
      'widget-name': 'TodoList'
    };

    return createDOMElement('ul', style, attributes);
  }

  function addItems(todoItemsData, domElement) {
    todoItemsData.forEach(function(todoItemData) {
      var todoItem = new TodoItem(todoItemData.id, todoItemData.label);
      todoItem.appendTo(domElement);
    });
  }

  var TodoItem = window.App.Widgets.TodoItem;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var assert = window.App.Utils.assert;
  var emptyDOMElement = window.App.Utils.emptyDOMElement;

  window.App.Widgets.TodoList = TodoList;

}());
