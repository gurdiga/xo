(function() {
  'use strict';

  tape('TodoList', function(t) {
    var itemData = [{
      text: 'item one'
    }];
    var todoList = new TodoList(itemData);
    var sandbox = createDOMElement('sandbox');
    todoList.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    document.body.appendChild(sandbox);

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'UL', 'it’s a <ul>');

      var itemElements = _.toArray(domElement.querySelectorAll('ul>li'));

      t.equal(itemElements.length, itemData.length, 'renders items as <li>s');
      t.deepEqual(itemElements.map(_.property('textContent')), [itemData[0].text],
        'items have the appropriate text');

      t.end();
    });

    t.end();
  });

  var TodoList = window.App.Widgets.TodoList;

  var createDOMElement = window.App.Utils.createDOMElement;

}());
