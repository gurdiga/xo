(function() {
  'use strict';

  function TodoList(itemData) {
    var domElement = createElement();

    addItems(itemData, domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    return createDOMElement('ul');
  }

  function addItems(itemData, domElement) {
    itemData.forEach(function(item) {
      domElement.appendChild(createItemElement(item));
    });
  }

  function createItemElement(item) {
    var itemElement = createDOMElement('li');
    itemElement.textContent = item.text;
    return itemElement;
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoList = TodoList;

}());
