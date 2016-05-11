(function() {
  'use strict';

  tape('TodoList', function(t) {
    var todoList = new TodoList();
    var sandbox = createDOMElement('sandbox');
    todoList.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'UL', 'it’s an unordered list');

      t.end();
    });

    t.end();
  });

  var TodoList = window.App.Widgets.TodoList;

  var createDOMElement = window.App.Utils.createDOMElement;

}());
