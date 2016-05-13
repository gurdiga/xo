(function() {
  'use strict';

  tape('TodoList', function(t) {
    var itemData = [{
      text: 'item one'
    }];
    var todoList = new TodoList(itemData);
    var sandbox = createDOMElement('sandbox');
    todoList.appendTo(sandbox);
    document.body.appendChild(sandbox); // TODO: remove when finished.

    var domElement = sandbox.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'UL', 'it’s a <ul>');
      t.equal(domElement.getAttribute('widget-name'), 'TodoList', 'has the appropriate widget name');

      var itemElements = _.toArray(domElement.querySelectorAll('ul>li>label>input[type="checkbox"]'));
      t.equal(itemElements.length, itemData.length, 'renders items as <li>s');

      var itemLabels = _.toArray(domElement.querySelectorAll('ul>li>label'));
      var itemLabelTexts = itemLabels.map(_.property('textContent'));
      var expectedItemLabels = itemData.map(_.property('text'));
      t.deepEqual(itemLabelTexts, expectedItemLabels, 'items have the appropriate text');

      t.end();
    });

    t.test('input validation', function(t) {
      t.throws(function() {
        new TodoList(42); // eslint-disable-line no-new
      },
        /TodoList expects first argument to be an array of objects/,
        'throws a meaningful exception when itemData is not an array'
      );

      t.end();
    });

    t.end();
  });

  var TodoList = window.App.Widgets.TodoList;

  var createDOMElement = window.App.Utils.createDOMElement;

}());
