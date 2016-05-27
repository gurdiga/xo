describe('ActivitiesSection', function() {
  'use strict';

  var ActivitiesSection = window.App.Widgets.ActivitiesSection;

  var sandbox, data, additionalStyle, sentenceSubjectSection, domElement;

  beforeEach(function() {
    sandbox = document.createElement('div');

    data = {};
    additionalStyle = { color: 'red' };
    sentenceSubjectSection = new ActivitiesSection(data, additionalStyle);
    sentenceSubjectSection.appendTo(sandbox);

    domElement = sandbox.firstChild;
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'CASE-ACTIVITIES-SECTION', 'has the appropriate tag name');

    var labelText = domElement.querySelector('legend').textContent;
    assert.equal(labelText, 'Acţiuni procedurale', 'section has the appropriate label');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;
    assert.equal(style.display, 'block', 'has block display to be on its own line');
    assert.equal(style.color, additionalStyle.color, 'accepts additional CSS');
  });

  it('has the button to add activities', function() {
    var addActivityButton = domElement.querySelector('dropdown-button');

    var activityListContainer = addActivityButton.previousSibling;
    assert.equal(activityListContainer.getAttribute('name'), 'activity-list-container',
      'activity list container is marked as such for inspectability');

    var toggleButton = addActivityButton.querySelector('button:first-child');
    assert.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');

    var options = _.toArray(addActivityButton.querySelectorAll('div>button'));
    assert.equal(options.length, 2, 'has the appropriate number of options');

    var optionsLabels = options.map(_.property('textContent'));
    assert.deepEqual(optionsLabels, ['Intentarea', 'Refuz'], 'options have the appropriate labels');

    assert.equal(activityListContainer.children.length, 0, 'activity list is initially empty');
    options[0].click();
    assert.equal(activityListContainer.children.length, 1, 'adds one activity');
    assert.equal(activityListContainer.children[0].getAttribute('widget-name'),
      'InstitutionActivity', 'the added activity is an InstitutionActivity');
  });

  var assert = window.TestHelpers.assert;
});
