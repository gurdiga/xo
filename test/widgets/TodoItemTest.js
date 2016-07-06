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
    var data = todoItem.getData();

    assert.equal(data.id, id, 'returns the id for persistance');
    assert.equal(data.label, labelText, 'returns the label text for persistance');
    assert.equal(data['is-completed'], false, 'returns the state of the checkbox');
    assert.equal(data['completion-time'], undefined, 'completion time is not defined');
  });

  it('can setData', function() {
    var oldData = todoItem.getData();
    var data = {
      'id': 'some-other-id',
      'label': 'Some other label',
      'is-completed': true,
      'completion-time': '2000-11-23T17:15:28.484Z'
    };

    todoItem.setData(data);

    var newData = todoItem.getData();

    assert.equal(newData.id, oldData.id, 'doesn’t change the id');
    assert.equal(newData.label, oldData.label, 'doesn’t change the label');
    assert.equal(newData['is-completed'], data['is-completed'], 'sets the is-completed value');
    assert.equal(newData['completion-time'], data['completion-time'], 'sets the completion time');
  });

  it('has the container for the completion label', function() {
    var completionLabelContainer = domElement.querySelector('completion-label-container');
    assert(completionLabelContainer, 'the container exists');
    assert.equal(completionLabelContainer.innerHTML, '', 'the container is empty');

    todoItem.setData({
      'is-completed': true,
      'completion-time': '2000-11-23T17:15:28.484Z'
    });

    var completionLabel = completionLabelContainer.firstChild;
    assert(completionLabel !== null, 'completion label is rendered');

    var style = completionLabel.style;
    assert.equal(style.marginLeft, '0.5em', 'completion label has a little left spacing');
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'LI', 'it’s a <li>');
    assert.equal(domElement.getAttribute('data-id'), id, 'has the appropriate data-id attribute');
    assert.equal(labeledCheckbox.tagName, 'LABELED-CHECKBOX', 'renders a LabeledCheckbox');

    var checkbox = labeledCheckbox.querySelector('input[type="checkbox"]');

    assert.equal(checkbox.checked, false, 'is initially rendered as not completed');

    var completionLabelContainer = domElement.querySelector('completion-label-container');
    assert(completionLabelContainer, 'exists');
    assert.equal(completionLabelContainer.innerHTML, '', 'is initially empty');

    checkbox.click();
    assert.notEqual(completionLabelContainer.innerHTML, '',
      'when checking the checkbox the completion label is rendered');
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

  it('can createWithData()', function() {
    var data = {
      'id': 'some-step',
      'label': 'This is the other step',
      'is-completed': true,
      'completion-time': '2000-11-23T17:15:28.484Z'
    };

    var todoItem = TodoItem.createWithData(data);
    assert(todoItem instanceof TodoItem, 'creates a new instance');

    var domElement = getWidgetDOMElement(todoItem);
    assert.equal(domElement.getAttribute('data-id'), data.id, 'renders the appropriate data-id attribute');

    var labeledCheckbox = domElement.querySelector('labeled-checkbox');
    assert.equal(labeledCheckbox.textContent, data.label, 'renders the appropriate label');
  });

  before(function() {
    this.clock = sinon.useFakeTimers(frozenTime.getTime()); // eslint-disable-line no-invalid-this
  });

  after(function() {
    this.clock.restore(); // eslint-disable-line no-invalid-this
    delete this.clock; // eslint-disable-line no-invalid-this
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
  var sinon = window.sinon;
});
