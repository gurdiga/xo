(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();
    var items = [];

    this.appendTo = getAppenderOf(domElement);

    this.setItemData = function(todoItemData) {
      assert(Array.isArray(todoItemData), 'TodoList#setItemData expects the argument to be an array of objects');

      emptyDOMElement(domElement);
      items = createItems(todoItemData);
      appendWidgets(items).to(domElement);
    };

    this.getItemData = function() {
      return rMap('getData', items);
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

  function createItems(todoItemData) {
    return todoItemData.map(TodoItem.createWithData);
  }

  var TodoItem = window.App.Widgets.TodoItem;

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;
  var assert = window.App.Utils.assert;
  var emptyDOMElement = window.App.Utils.emptyDOMElement;
  var appendWidgets = window.App.Utils.appendWidgets;
  var rMap = window.App.Utils.rMap;

  window.App.Widgets.TodoList = TodoList;

}());
