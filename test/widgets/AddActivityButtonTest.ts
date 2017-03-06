import {AddActivityButton} from "app/widgets/AddActivityButton";
import * as _ from "lodash";
import {InstitutionActivity} from "app/widgets/activities/InstitutionActivity";
import {assert, createSpy, getWidgetDOMElement} from "test/helper";

describe('AddActivityButton', function() {
  'use strict';

  var activities, activityAdder, addActivityButton, domElement, optionButtons;

  before(function() {
    activities = [
      new InstitutionActivity()
    ];
    activityAdder = createSpy();
    addActivityButton = new AddActivityButton(activities, activityAdder);

    domElement = getWidgetDOMElement(addActivityButton);
    optionButtons = _.toArray(domElement.querySelectorAll('dropdown-button>option-list>button'));
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'DROPDOWN-BUTTON', 'is implemented with a DropdownButton');

    var toggleButton = domElement.firstChild;
    assert.equal(toggleButton.textContent, 'adaugă acţiune', 'has the appropriate label');
    assert.equal(optionButtons.length, activities.length, 'has one option button for every activity');

    var optionButtonLabels = optionButtons.map(_.property('textContent'));
    assert.deepEqual(optionButtonLabels, ['Intentarea'], 'has the action descriptions as labels for action buttons');
  });

  it('reacts to clicks', function() {
    optionButtons[0].click();

    assert.deepEqual(activityAdder.calls[0].args, [activities[0]],
      'calls the activityAdder with the corresponding activity');
    assert.equal(activityAdder.calls.length, 1, 'clicking an option calls the activityAdder once');
    assert.deepEqual(addActivityButton.getActivities(), InstitutionActivity.NEXT_ACTIVITY_OPTIONS,
      'updates option list based on the selected option’s NEXT_ACTIVITY_OPTIONS');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;
    assert.equal(style.marginTop, '10px', 'has enough space before to not look like part of the activity');
  });
});
