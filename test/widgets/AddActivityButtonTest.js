(function() {
  'use strict';

  tape('AddActivityButton', function(t) {
    var sandbox = document.createElement('div');

    var activities = [
      new InstitutionActivity()
    ];
    var activityAdder = createSpy();
    var addActivityButton = new AddActivityButton(activities, activityAdder);
    addActivityButton.appendTo(sandbox);

    var domElement = sandbox.firstChild;
    var optionButtons = _.toArray(domElement.querySelectorAll('dropdown-button>div>button'));

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'is implemented with a DropdownButton');

      var toggleButton = domElement.firstChild;
      t.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');
      t.equal(optionButtons.length, activities.length, 'has one option button for every activity');

      var optionButtonLabels = optionButtons.map(_.property('textContent'));
      t.deepEqual(optionButtonLabels, ['Intentarea'], 'has the action descriptions as labels for action buttons');

      t.end();
    });

    t.test('clicking an option', function(t) {
      optionButtons[0].click();

      t.deepEqual(activityAdder.calls[0].args, [activities[0]],
        'calls the activityAdder with the corresponding activity');
      t.equal(activityAdder.calls.length, 1, 'clicking an option calls the activityAdder once');
      t.deepEqual(addActivityButton.getActivities(), InstitutionActivity.NEXT_ACTIVITY_OPTIONS,
        'updates option list based on the selected option’s NEXT_ACTIVITY_OPTIONS');

      t.end();
    });

    t.test('style', function(t) {
      var style = domElement.style;

      t.equal(style.marginTop, '10px', 'has enough space before to not look like part of the activity');

      t.end();
    });

    t.end();
  });

  var AddActivityButton = window.App.Widgets.AddActivityButton;
  var InstitutionActivity = window.App.Widgets.InstitutionActivity;

  var createSpy = window.TestHelpers.createSpy;

}());
