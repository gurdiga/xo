(function() {
  'use strict';

  var InstitutionActivity = window.App.Widgets.InstitutionActivity;

  var sandbox = document.createElement('div');
  var institutionActivity = new InstitutionActivity();
  institutionActivity.appendTo(sandbox);

  tape('InstitutionActivity', function(t) {
    var domElement = sandbox.firstChild;
    t.equal(domElement.getAttribute('widget-name'), 'InstitutionActivity',
      'has the appropriate “widget-name” attribute');
    t.equal(institutionActivity.getDescription(), 'Intentarea', 'has the appropriate description');

    t.test('date field', function(t) {
      var dateField = domElement.firstChild;
      t.equal(dateField.tagName, 'ACTIVITY-DATE-FIELD', 'is an activity date field');
      t.end();
    });

    t.test('description', function(t) {
      var descriptionElement = domElement.children[1];

      t.equal(descriptionElement.tagName, 'ACTIVITY-DESCRIPTION', 'has the appropriate tag name');
      t.equal(descriptionElement.textContent, 'Intentarea', 'has the appropriate text');

      t.end();
    });

    t.test('details section', function(t) {
      var detailsSectionElement = domElement.children[2];
      t.equal(detailsSectionElement.getAttribute('widget-name'), 'ActivityDetailsSection',
        'has the appropriate “widget-name” attribute');

      t.test('create writ button', function(t) {
        var createWritButton = detailsSectionElement.firstChild;
        t.equal(createWritButton.getAttribute('widget-name'), 'CreateWritButton',
          'has the appropriate “widget-name” attribute');
        t.end();
      });

      t.end();
    });

    t.end();
  });

}());
