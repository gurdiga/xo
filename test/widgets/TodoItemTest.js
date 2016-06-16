describe('TodoItem', function() {
  'use strict';

  var TodoItem = window.App.Widgets.TodoItem;

  var todoItem, domElement;

  beforeEach(function() {
    todoItem = new TodoItem();
    domElement = getWidgetDOMElement(todoItem);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LI', 'it’s a <li>');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
