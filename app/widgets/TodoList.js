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
    assert(Array.isArray(itemData), 'TodoList expects first argument to be an array of objects');

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
  var assert = window.App.Utils.assert;

  window.App.Widgets.TodoList = TodoList;

}());
