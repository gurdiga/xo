(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);

    this.setItems = function(itemData) {
      emptyDOMElement(domElement);
      addItems(itemData, domElement);
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

  function addItems(itemData, domElement) {
    assert(Array.isArray(itemData), 'TodoList#setItems expects first argument to be an array of objects');

    itemData.forEach(function(item) {
      var todoItem = createTodoItem(item);
      todoItem.appendTo(domElement);
    });
  }

  function createTodoItem(itemData) {
    return new TodoItem(itemData.label);
  }

  var TodoItem = window.App.Widgets.TodoItem;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var assert = window.App.Utils.assert;
  var emptyDOMElement = window.App.Utils.emptyDOMElement;

  window.App.Widgets.TodoList = TodoList;

}());
