(function() {
  'use strict';

  function UnlabeledDateField() {
    var domElement = document.createElement('unlabeled-date-field');

    var input = new DateFieldInput();
    input.appendTo(domElement);

    this.appendTo = getAppenderOf(domElement);
  }

  var DateFieldInput = window.App.Widgets.DateFieldInput;

  var getAppenderOf = window.App.Utils.getAppenderOf;

  window.App.Widgets.UnlabeledDateField = UnlabeledDateField;

}());
