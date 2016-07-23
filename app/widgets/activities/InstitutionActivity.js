(function() {
  'use strict';

  function InstitutionActivity() {
    var descriptionText = 'Intentarea';
    var todoList = new TodoList();

    var activity = new Activity(
      'InstitutionActivity',
      descriptionText
    );

    activity.setDetailWidgets([
      todoList,
      new CreateWritButton()
    ]);

    this.getDescription = delegateTo(activity, 'getDescription');
    this.appendTo = delegateTo(activity, 'appendTo');
    this.setDetailWidgets = delegateTo(activity, 'setDetailWidgets');

    this.setData = function(data) {
      todoList.setItemData(data['todo-items']);
    };
  }

  InstitutionActivity.NEXT_ACTIVITY_OPTIONS = [];

  var Activity = window.App.Widgets.Activity;

  InstitutionActivity.createWithData = Activity.createWithData;

  var CreateWritButton = window.App.Widgets.CreateWritButton;
  var TodoList = window.App.Widgets.TodoList;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.Activities.InstitutionActivity = InstitutionActivity;

}());
