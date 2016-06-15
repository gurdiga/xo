(function() {
  'use strict';

  function RefusalActivity() {
    var descriptionText = 'Refuz';

    var activity = new Activity(
      'RefusalActivity',
      descriptionText, [
        document.createTextNode('RefusalActivity TODO')
      ]
    );

    this.getDescription = delegateTo(activity, 'getDescription');
    this.appendTo = delegateTo(activity, 'appendTo');

    this.setData = function() {
       // TODO
    };
  }

  var Activity = window.App.Widgets.Activity;

  RefusalActivity.createWithData = Activity.createWithData;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.Activities.RefusalActivity = RefusalActivity;

}());
