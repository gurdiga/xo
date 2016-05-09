(function() {
  'use strict';

  function InstitutionActivity() {
    var descriptionText = 'Intentarea';

    var activity = new Activity(
      'InstitutionActivity',
      descriptionText, [
        new CreateWritButton()
      ]
    );

    this.getDescription = delegateTo(activity, 'getDescription');
    this.appendTo = delegateTo(activity, 'appendTo');
  }

  InstitutionActivity.NEXT_ACTIVITY_OPTIONS = [];

  var Activity = window.App.Widgets.Activity;
  var CreateWritButton = window.App.Widgets.CreateWritButton;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
