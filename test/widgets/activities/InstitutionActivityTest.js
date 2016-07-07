describe('InstitutionActivity', function() {
  'use strict';

  var InstitutionActivity = window.App.Widgets.Activities.InstitutionActivity;

  var institutionActivity, domElement, detailsSectionElement;

  before(function() {
    institutionActivity = new InstitutionActivity();
    domElement = getWidgetDOMElement(institutionActivity);
    detailsSectionElement = domElement.children[2];
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.getAttribute('widget-name'), 'InstitutionActivity',
      'has the appropriate “widget-name” attribute');
  });

  it('has a date field', function() {
    var dateField = domElement.firstChild;
    assert.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'is an activity date field');
  });

  it('has the appropriate description', function() {
    var descriptionElement = domElement.children[1];

    assert.equal(descriptionElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropriate tag name');
    assert.equal(descriptionElement.textContent, 'Intentarea', 'has the appropriate text');
    assert.equal(institutionActivity.getDescription(), 'Intentarea', 'has the appropriate description');
  });

  it('tells the next activity options', function() {
    //
    // TODO: determine the options later.
    //

    assert.deepEqual(InstitutionActivity.NEXT_ACTIVITY_OPTIONS,
      [], 'are exposed');
  });

  it('has the appropriate details section', function() {
    assert.equal(detailsSectionElement.getAttribute('widget-name'), 'ActivityDetailsSection',
      'has the appropriate “widget-name” attribute');

    var createWritButton = detailsSectionElement.querySelector('[widget-name="CreateWritButton"]');
    assert(!!createWritButton, 'has the button to creare the writ');
  });

  it('has the appropriate TodoList', function() {
    var todoList = detailsSectionElement.querySelector('[widget-name="TodoList"]');
    assert(!!todoList, 'has the TODO list');
  });

  it('can be setDetailWidgets()', function() {
    var detailWidgets = [document.createElement('button')];
    institutionActivity.setDetailWidgets(detailWidgets);

    assert.equal(detailsSectionElement.children.length, 1, 'adds the appropriate number of children');
    assert.equal(detailsSectionElement.children[0], detailWidgets[0], 'adds the given widget');
  });

  it('can createWithData()', function() {
    var data = {
      'todo-items': [{
        'id': 'writ-emitted',
        'label': 'Am emis încheiere',
        'isDone': true
      }, {
        'id': 'writ-sent',
        'label': 'Am expediat încheiere',
        'isDone': false
      }]
    };

    var institutionActivity = InstitutionActivity.createWithData(data);
    var domElement = getWidgetDOMElement(institutionActivity);
    var detailsSectionElement = domElement.children[2];
    var todoList = detailsSectionElement.querySelector('[widget-name="TodoList"]');

    assert.equal(todoList.children.length, 2, 'has the appropriate number of TODO items');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
