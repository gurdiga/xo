import {Activity} from "app/widgets/Activity";
import {TodoList} from "app/widgets/TodoList";
import {delegateTo} from "app/utils/delegateTo";

export function InstitutionActivity() {
  var descriptionText = 'Intentarea';
  var activity = new Activity('InstitutionActivity', descriptionText);
  var todoList = new TodoList();

  activity.setDetailWidgets([todoList]);

  this.getDescription = delegateTo(activity, 'getDescription');
  this.appendTo = delegateTo(activity, 'appendTo');
  this.setDetailWidgets = delegateTo(activity, 'setDetailWidgets');

  this.setData = function(data) {
    todoList.setData(data['todo-items']);
  };
}

InstitutionActivity.NEXT_ACTIVITY_OPTIONS = [];
InstitutionActivity.createWithData = Activity.createWithData;
