(function() {
  'use strict';

  function InquiryActivity() {
    var activity = new Activity(
      'InquiryActivity',
      'Cererea creditorului', [
        new LabeledTextField('Numărul de înregistrare')
      ]
    );

    this.appendTo = delegateTo(activity, 'appendTo');
  }

  var Activity = window.App.Widgets.Activity;
  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var delegateTo = window.App.Utils.delegateTo;

  window.App.Widgets.InquiryActivity = InquiryActivity;

}());
