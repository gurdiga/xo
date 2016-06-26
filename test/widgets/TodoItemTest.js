describe('TodoItem', function() {
  'use strict';

  var TodoItem = window.App.Widgets.TodoItem;

  var todoItem, id, labelText, domElement, labeledCheckbox;
  var frozenTime = new Date('2000-01-31 22:33');

  beforeEach(function() {
    id = 'first-item';
    labelText = 'This is the first step';
    todoItem = new TodoItem(id, labelText);

    domElement = getWidgetDOMElement(todoItem);
    labeledCheckbox = domElement.firstChild;
  });

  it('can getData', function() {
    var expectedData = {
      isCompleted: false
    };

    assert.deepEqual(todoItem.getData(), expectedData, 'contains the relevant pieces of data');
  });

  it('can setData', function() {
    var newData = {
      isCompleted: true
    };

    todoItem.setData(newData);
    assert.deepEqual(todoItem.getData(), newData, 'appropriately updates the data');
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LI', 'it’s a <li>');
    assert.equal(labeledCheckbox.tagName, 'LABELED-CHECKBOX', 'renders a LabeledCheckbox');

    var checkbox = labeledCheckbox.querySelector('input[type="checkbox"]');

    assert.equal(todoItem.getData().isCompleted, false, 'is initially rendered as not completed');
    checkbox.click();
    assert.equal(todoItem.getData().isCompleted, true, 'todoItem data reflects checkbox state');

    var completionLabel = domElement.children[1];
    assert.equal(completionLabel.tagName, 'SPAN', 'is a span');
    assert.equal(completionLabel.textContent, 'completat la 31.01.2000 22:33',
      'completion label has the appropriate text');
    assert.equal(completionLabel.style.color, 'gray', 'completion label is grayish');
    assert.equal(completionLabel.style.fontSize, '12px', 'completion label has a smaller font size');
    assert.equal(completionLabel.style.marginLeft, '1em',
      'completion label leaves a little room after the TODO item’ label');

    var completionTime = completionLabel.querySelector('time');
    assert(completionTime, 'completion time element exists');
    assert(completionTime.hasAttribute('timestamp'),
      'completion time element has the timestamp attribute for accessibilty');

    var completionTimeStamp = completionTime.getAttribute('timestamp');
    assert.equal(completionTimeStamp, frozenTime.toISOString(),
      'completion timestamp shows date, hour and minutes only');

    checkbox.click();
    completionLabel = getTimestampElement(domElement);
    assert(!completionLabel, 'completion label is removed when unchecking');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.listStyleType, 'none', 'has <li>’s bullet removed');
    assert.equal(style.fontSize, '14px', 'has the appropriate font size');
  });

  it('requires the label text to be a string', function() {
    assert.throws(function callingWithInvalidTextLabel() {
      new TodoItem(id, 42); // eslint-disable-line no-new
    },
      'TodoItem constructor expects the first argument, label text, to be a string'
    );
  });

  before(function() {
    this.clock = sinon.useFakeTimers(frozenTime.getTime()); // eslint-disable-line no-invalid-this
  });

  after(function() {
    this.clock.restore(); // eslint-disable-line no-invalid-this
    delete this.clock; // eslint-disable-line no-invalid-this
  });

  function getTimestampElement(domElement) {
    return domElement.children[1];
  }

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var sinon = window.sinon;
});
