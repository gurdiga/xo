(function() {
  'use strict';

  function TodoList(itemData) {
    var domElement = createElement();

    addItems(itemData, domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  function createElement() {
    var style = {};
    var attributes = {
      'widget-name': 'TodoList'
    };

    return createDOMElement('ul', style, attributes);
  }

  function addItems(itemData, domElement) {
    itemData.forEach(function(item) {
      domElement.appendChild(createItemElement(item));
    });
  }

  function createItemElement(item) {
    var itemElement = createDOMElement('li');
    var checkbox = createCheckbox();
    var label = createLabel(item.text, checkbox);

    itemElement.appendChild(label);

    return itemElement;
  }

  function createLabel(text, checkbox) {
    var domElement = createDOMElement('label');
    var textElement = document.createTextNode(text);

    domElement.appendChild(checkbox);
    domElement.appendChild(textElement);

    return domElement;
  }

  function createCheckbox() {
    var style = {};
    var attributes = {
      'type': 'checkbox'
    };

    return createDOMElement('input', style, attributes);
  }

  var createDOMElement = window.App.Utils.createDOMElement;
  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.TodoList = TodoList;

}());
