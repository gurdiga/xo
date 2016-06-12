(function() {
  'use strict';

  function TodoList() {
    var domElement = createElement();

    this.appendTo = getAppenderOf(domElement);

    this.setItems = function(itemData) {
      domElement.innerHTML = '';
      addItems(itemData, domElement);
    };
  }

  function createElement() {
    var style = {
      'margin': '0px',
      'padding': '0px'
    };

    var attributes = {
      'widget-name': 'TodoList'
    };

    return createDOMElement('ul', style, attributes);
  }

  function addItems(itemData, domElement) {
    assert(Array.isArray(itemData), 'TodoList#setItems expects first argument to be an array of objects');

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
