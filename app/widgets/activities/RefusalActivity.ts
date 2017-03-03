import {Activity} from "app/widgets/Activity";
import {delegateTo} from "app/utils/delegateTo";

export function RefusalActivity() {
  var descriptionText = 'Refuz';
  var activity = new Activity('RefusalActivity', descriptionText);

  activity.setDetailWidgets([
    document.createTextNode('RefusalActivity TODO')
  ]);

  this.getDescription = delegateTo(activity, 'getDescription');
  this.appendTo = delegateTo(activity, 'appendTo');

  this.setData = function() {
     // TODO
  };
}

RefusalActivity.createWithData = Activity.createWithData;
