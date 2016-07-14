(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();
    var items = [];

    this.appendTo = getAppenderOf(domElement);

    this.setItemData = function(todoItemData) {
      assert(Array.isArray(todoItemData), 'TodoList#setItemData expects the argument to be an array of objects');

      items = createItems(todoItemData);
      resetChildren(domElement, items);
    };

    this.getItemData = function() {
      return rMap('getData', items);
    };
  }

  function createElement() {
    var style = {
      'margin': '0px',
      'padding': '0px 0px 5px'
    };

    var attributes = {
      'widget-name': 'TodoList'
    };

    return createDOMElement('ul', style, attributes);
  }

  function createItems(todoItemData) {
    return todoItemData.map(TodoItem.createWithData);
  }

  var TodoItem = window.App.Widgets.TodoItem;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var assert = window.App.Utils.assert;
  var resetChildren = window.App.Utils.resetChildren;
  var rMap = window.App.Utils.rMap;

  window.App.Widgets.TodoList = TodoList;

}());
