(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);

    this.setItemData = function(todoItemData) {
      assert(Array.isArray(todoItemData), 'TodoList#setItemData expects the argument to be an array of objects');

      emptyDOMElement(domElement);
      addItems(todoItemData, domElement);
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

  function addItems(todoItemData, domElement) {
    todoItemData.forEach(function(data) {
      var todoItem = new TodoItem(data.id, data.label);
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
