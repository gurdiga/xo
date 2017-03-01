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
    assert.equal(style.padding, '0px 0px 5px', 'has padding stripped off except at the bottom');
  });

  describe('setData()', function() {
    it('creates TodoItem widgets for each item in the given array', function() {
      var todoItemData = [{
        id: 'first-item',
        label: 'the first new item'
      }, {
        id: 'second-item',
        label: 'the second new item'
      }];

      todoList.setData(todoItemData);

      var itemElements = _.toArray(domElement.querySelectorAll('ul>li>labeled-checkbox input[type="checkbox"]'));
      assert.equal(itemElements.length, todoItemData.length, 'renders items as <li>s');

      var itemLabels = _.toArray(domElement.querySelectorAll('ul>li>labeled-checkbox'));
      var itemLabelTexts = itemLabels.map(_.property('textContent'));
      var expectedItemLabels = todoItemData.map(_.property('label'));
      assert.deepEqual(itemLabelTexts, expectedItemLabels, 'items have the appropriate label texts');
    });

    it('validates input', function() {
      assert.throws(function() {
        todoList.setData(42);
      },
        'TodoList#setData expects the argument to be an array of objects'
      );
    });
  });

  it('can be asked to getData', function() {
    var todoItemData = [{
      id: 'first-item',
      label: 'the first new item'
    }, {
      id: 'second-item',
      label: 'the second new item'
    }];

    todoList.setData(todoItemData);

    assert.deepEqual(todoList.getData(), todoItemData, 'works');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
