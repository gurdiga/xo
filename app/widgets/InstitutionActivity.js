(function() {
  'use strict';

  function InstitutionActivity() {
    var activity = new Activity(
      'InstitutionActivity',
      'Intentarea', [
        new CreateWritButton()
      ]
    );

    this.appendTo = delegateTo(activity, 'appendTo');
  }

  var Activity = window.App.Widgets.Activity;
  var CreateWritButton = window.App.Widgets.CreateWritButton;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.InstitutionActivity = InstitutionActivity;

}());
