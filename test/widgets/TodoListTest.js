describe('TodoList', function() {
  'use strict';

  var TodoList = window.App.Widgets.TodoList;

  var itemData, todoList, sandbox, domElement;

  beforeEach(function() {
    itemData = [{
      text: 'item one'
    }];

    todoList = new TodoList(itemData);
    sandbox = createDOMElement('sandbox');
    todoList.appendTo(sandbox);

    domElement = sandbox.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'UL', 'it’s a <ul>');
    assert.equal(domElement.getAttribute('widget-name'), 'TodoList', 'has the appropriate widget name');

    var itemElements = _.toArray(domElement.querySelectorAll('ul>li>label>input[type="checkbox"]'));
    assert.equal(itemElements.length, itemData.length, 'renders items as <li>s');

    var itemLabels = _.toArray(domElement.querySelectorAll('ul>li>label'));
    var itemLabelTexts = itemLabels.map(_.property('textContent'));
    var expectedItemLabels = itemData.map(_.property('text'));
    assert.deepEqual(itemLabelTexts, expectedItemLabels, 'items have the appropriate text');
  });

  it('validates input', function() {
    assert.throws(function() {
      new TodoList(42); // eslint-disable-line no-new
    },
      /TodoList expects first argument to be an array of objects/,
      'throws a meaningful exception when itemData is not an array'
    );
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.margin, '0px', 'has margin stripped off');
    assert.equal(style.padding, '0px', 'has padding stripped off');
  });

  var createDOMElement = window.App.Utils.createDOMElement;
  var assert = window.TestHelpers.assert;
});
