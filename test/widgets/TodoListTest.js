describe('TodoList', function() {
  'use strict';

  var TodoList = window.App.Widgets.TodoList;

  var todoList, sandbox, domElement;

  before(function() {
    todoList = new TodoList();
    sandbox = createDOMElement('sandbox');
    todoList.appendTo(sandbox);

    domElement = sandbox.firstChild;
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

  describe('setItems()', function() {
    it('validates input', function() {
      assert.throws(function() {
        todoList.setItems(42);
      },
        'TodoList#setItems expects the argument to be an array of objects'
      );
    });

    it('works', function() {
      var itemData = [{
        id: 'first-item',
        label: 'the first new item'
      }, {
        id: 'second-item',
        label: 'the second new item'
      }];

      todoList.setItems(itemData);

      var itemElements = _.toArray(domElement.querySelectorAll('ul>li>labeled-checkbox input[type="checkbox"]'));
      assert.equal(itemElements.length, itemData.length, 'renders items as <li>s');

      var itemLabels = _.toArray(domElement.querySelectorAll('ul>li>labeled-checkbox'));
      var itemLabelTexts = itemLabels.map(_.property('textContent'));
      var expectedItemLabels = itemData.map(_.property('label'));
      assert.deepEqual(itemLabelTexts, expectedItemLabels, 'items have the appropriate label texts');
    });
  });

  var createDOMElement = window.App.Utils.createDOMElement;
  var assert = window.TestHelpers.assert;
});
