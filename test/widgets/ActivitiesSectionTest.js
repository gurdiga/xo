(function() {
  'use strict';

  tape.test('ActivitiesSection', function(t) {
    var sandbox = document.createElement('div');

    var additionalStyle = { color: 'red' };
    var sentenceSubjectSection = new ActivitiesSection(additionalStyle);
    sentenceSubjectSection.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('structure', function(t) {
      t.equal(domElement.tagName, 'CASE-ACTIVITIES-SECTION', 'has the appropriate tag name');

      var labelText = domElement.querySelector('legend').textContent;
      t.equal(labelText, 'Acţiuni procedurale', 'section has the appropriate label');

      t.end();
    });

    t.test('style', function(t) {
      var style = domElement.style;
      t.equal(style.display, 'block', 'has block display to be on its own line');
      t.equal(style.color, additionalStyle.color, 'accepts additional CSS');

      t.end();
    });

    t.test('add activity button', function(t) {
      var addActivityButton = domElement.querySelector('dropdown-button');

      var activityListContainer = addActivityButton.previousSibling;
      t.equal(activityListContainer.getAttribute('name'), 'activity-list-container',
        'activity list container is marked as such for inspectability');

      var toggleButton = addActivityButton.querySelector('button:first-child');
      t.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');

      var options = _.toArray(addActivityButton.querySelectorAll('div>button'));
      t.equal(options.length, 2, 'has the appropriate number of options');

      var optionsLabels = options.map(_.property('textContent'));
      t.deepEqual(optionsLabels, ['Intentarea', 'Refuz'], 'options have the appropriate labels');

      t.equal(activityListContainer.children.length, 0, 'activity list is initially empty');
      options[0].click();
      t.equal(activityListContainer.children.length, 1, 'adds one activity');
      t.equal(activityListContainer.children[0].getAttribute('widget-name'),
        'InstitutionActivity', 'the added activity is an InstitutionActivity');

      t.end();
    });

    t.end();
  });

  var ActivitiesSection = window.App.Widgets.ActivitiesSection;

}());
