import {WidgetRole} from "app/widgets/WidgetRole";
import {TodoItem} from "app/widgets/TodoItem";
import {createDOMElement} from "app/utils/createDOMElement";
import {assert} from "app/utils/assert";
import {resetChildren} from "app/utils/resetChildren";
import {rMap} from "app/utils/rMap";

export function TodoList() {
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
