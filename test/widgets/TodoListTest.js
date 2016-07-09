describe('TodoList', function() {
  'use strict';

  var TodoList = window.App.Widgets.TodoList;

  var todoList, domElement;

  before(function() {
    todoList = new TodoList();
    domElement = getWidgetDOMElement(todoList);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'UL', 'it’s a <ul>');
    assert.equal(domElement.getAttribute('widget-name'), 'TodoList', 'has the appropriate widget name');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.margin, '0px', 'has margin stripped off');
    assert.equal(style.padding, '0px', 'has padding stripped off');
  });

  describe('setItemData()', function() {
    it('creates TodoItem widgets for each item in the given array', function() {
      var todoItemData = [{
        id: 'first-item',
        label: 'the first new item'
      }, {
        id: 'second-item',
        label: 'the second new item'
      }];

      todoList.setItemData(todoItemData);

      var itemElements = _.toArray(domElement.querySelectorAll('ul>li>labeled-checkbox input[type="checkbox"]'));
      assert.equal(itemElements.length, todoItemData.length, 'renders items as <li>s');

      var itemLabels = _.toArray(domElement.querySelectorAll('ul>li>labeled-checkbox'));
      var itemLabelTexts = itemLabels.map(_.property('textContent'));
      var expectedItemLabels = todoItemData.map(_.property('label'));
      assert.deepEqual(itemLabelTexts, expectedItemLabels, 'items have the appropriate label texts');
    });

    it('validates input', function() {
      assert.throws(function() {
        todoList.setItemData(42);
      },
        'TodoList#setItemData expects the argument to be an array of objects'
      );
    });
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
