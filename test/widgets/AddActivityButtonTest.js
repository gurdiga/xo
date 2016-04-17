(function() {
  'use strict';

  tape('AddActivityButton', function(t) {
    var sandbox = document.createElement('div');

    var activities = [
      new InstitutionActivity()
    ];
    var addActivityButton = new AddActivityButton(activities, activityAdder);
    addActivityButton.appendTo(sandbox);

    var domElement = sandbox.firstChild;

    t.test('DOM structure', function(t) {
      t.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'is implemented with a DropdownButton');

      var toggleButton = domElement.firstChild;
      t.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');

      var optionButtons = _.toArray(domElement.querySelectorAll('dropdown-button>div>button'));
      t.equal(optionButtons.length, activities.length, 'has one option button for every activity');

      var optionButtonLabels = optionButtons.map(_.property('textContent'));
      t.deepEqual(optionButtonLabels, ['Intentarea'], 'has the action descriptions as labels for action buttons');

      optionButtons[0].click();
      t.equal(activityAdder.calls.length, 1, 'clicking an option calls the activityAdder');
      t.deepEqual(activityAdder.calls[0].args, [activities[0]], '...with the corresponding activity instance');

      t.end();
    });

    t.end();

    function activityAdder() {
      activityAdder.calls = activityAdder.calls || [];
      activityAdder.calls.push({
        args: _.toArray(arguments)
      });
    }
  });

  var AddActivityButton = window.App.Widgets.AddActivityButton;
  var InstitutionActivity = window.App.Widgets.InstitutionActivity;

}());
