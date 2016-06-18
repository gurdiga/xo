describe('TodoItem', function() {
  'use strict';

  var TodoItem = window.App.Widgets.TodoItem;

  var todoItem, domElement, id, labelText;

  before(function() {
    id = 'first-item';
    labelText = 'This is the first step';
    todoItem = new TodoItem(id, labelText);
    domElement = getWidgetDOMElement(todoItem);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LI', 'it’s a <li>');

    var implicitLabelElement = domElement.firstChild;
    assert.equal(implicitLabelElement.tagName, 'LABEL', 'renders an implicit <label>');

    var checkbox = implicitLabelElement.firstChild;
    assert.equal(checkbox.tagName, 'INPUT', 'renders a checkbox');
    assert.equal(checkbox.getAttribute('data-id'), id, 'sets the given ID in the data-id attribute of the checkbox');

    var labelTextContainer = implicitLabelElement.lastChild;
    assert.equal(labelTextContainer.tagName, 'SPAN', 'renders a span to hold the actual text label');
    assert.equal(labelTextContainer.textContent, labelText, 'renders the given text as the text label');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.listStyleType, 'none', 'has <li>’s bullet removed');
    assert.equal(style.fontSize, '14px', 'has the appropriate font size');

    var checkbox = domElement.querySelector('li>label>input[type="checkbox"]');
    assert.equal(checkbox.style.verticalAlign, '1px', 'has pixel-perfect vertical alignment');
    assert.equal(checkbox.style.marginLeft, '0px', 'is flush-left-aligned horizontally');
  });

  it('requires the label text to be a string', function() {
    assert.throws(function callingWithInvalidTextLabel() {
      new TodoItem(id, 42); // eslint-disable-line no-new
    },
      'TodoItem constructor expects the first argument, label text, to be a string'
    );
  });

  it('can be setDoneState()', function() {
    var checkbox = domElement.querySelector('input[type="checkbox"]');
    assert(!checkbox.checked, 'the checkbox is checked');

    todoItem.markAsDone();
    assert(checkbox.checked, 'the checkbox is checked');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
