describe('TodoItem', function() {
  'use strict';

  var TodoItem = window.App.Widgets.TodoItem;

  var todoItem, domElement, labelText;

  before(function() {
    labelText = 'This is the first step';
    todoItem = new TodoItem(labelText);
    domElement = getWidgetDOMElement(todoItem);
    document.body.appendChild(domElement); // TODO remove
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LI', 'it’s a <li>');

    var implicitLabelElement = domElement.firstChild;
    assert.equal(implicitLabelElement.tagName, 'LABEL', 'renders an implicit <label>');

    var checkbox = implicitLabelElement.firstChild;
    assert.equal(checkbox.tagName, 'INPUT', 'renders a checkbox');

    var labelTextContainer = implicitLabelElement.lastChild;
    assert.equal(labelTextContainer.tagName, 'SPAN', 'renders a span to hold the actual text label');
    assert.equal(labelTextContainer.textContent, labelText, 'renders the given text as the text label');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.listStyleType, 'none', 'has <li>’s bullet removed');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
