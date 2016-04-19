(function() {
  'use strict';

  tape('AddActivityButton', function(t) {
    var sandbox = document.createElement('div');

    var activities = [
      new InstitutionActivity()
    ];
    var addActivityButton = new AddActivityButton(activities, activityAdderMock);
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

    t.test('behavior', function(t) {
      optionButtons[0].click();

      t.deepEqual(activityAdderMock.calls[0].args, [activities[0]],
        'clicking an option calls the activityAdderMock with the corresponding activity');
      t.equal(activityAdderMock.calls.length, 1, 'clicking an option calls the activityAdderMock once');

      t.end();
    });

    t.end();

    function activityAdderMock() {
      activityAdderMock.calls = activityAdderMock.calls || [];
      activityAdderMock.calls.push({
        args: _.toArray(arguments)
      });
    }
  });

  var AddActivityButton = window.App.Widgets.AddActivityButton;
  var InstitutionActivity = window.App.Widgets.InstitutionActivity;

}());
