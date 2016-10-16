(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();
    WidgetRole.apply(this, [domElement]);

    var items = [];

    this.setData = function(todoItemData) {
      assert(Array.isArray(todoItemData), 'TodoList#setData expects the argument to be an array of objects');

      items = createItems(todoItemData);
      resetChildren(domElement, items);
    };

    this.getData = function() {
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

  var WidgetRole = window.App.Widgets.WidgetRole;
  var TodoItem = window.App.Widgets.TodoItem;

  var createDOMElement = window.App.Utils.createDOMElement;
  var assert = window.App.Utils.assert;
  var resetChildren = window.App.Utils.resetChildren;
  var rMap = window.App.Utils.rMap;

  window.App.Widgets.TodoList = TodoList;

}());
