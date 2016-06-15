(function() {
  'use strict';

  function InstitutionActivity() {
    var descriptionText = 'Intentarea';
    var todoList = new TodoList([]);

    var activity = new Activity(
      'InstitutionActivity',
      descriptionText, [
        todoList,
        new CreateWritButton()
      ]
    );

    this.getDescription = delegateTo(activity, 'getDescription');
    this.appendTo = delegateTo(activity, 'appendTo');
    this.setDetailWidgets = delegateTo(activity, 'setDetailWidgets');

    this.setData = function(data) {
      todoList.setItems(data['todo-items']);
    };
  }

  InstitutionActivity.NEXT_ACTIVITY_OPTIONS = [];

  InstitutionActivity.createWithData = function(data) {
    var institutionActivity = new InstitutionActivity();

    institutionActivity.setData(data);

    return institutionActivity;
  };

  var Activity = window.App.Widgets.Activity;
  var CreateWritButton = window.App.Widgets.CreateWritButton;
  var TodoList = window.App.Widgets.TodoList;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.Activities.InstitutionActivity = InstitutionActivity;

}());
