(function() {
  'use strict';

  DatePicker.instance = new DatePicker();

  function DatePicker() {
    var onDateSelectedCallback = createDateSelectedCallback(this, getCurrentDateField);
    var widget = createWidget(onDateSelectedCallback);

    var currentDateField;

    this.showDate = function(dateField) {
      dateField.addDatePicker(widget.el);
      currentDateField = dateField;

      var DO_NOT_TRIGER_SELECT = true;
      widget.setDate(dateField.getDate(), DO_NOT_TRIGER_SELECT);
      widget.show();
    };

    this.hide = function() {
      currentDateField = undefined;
      widget.hide();
      document.body.appendChild(widget.el);
    };

    this.toggleFor = function(dateField) {
      if (dateField === currentDateField) {
        this.hide();
      } else {
        this.showDate(dateField);
      }
    };

    function getCurrentDateField() {
      return currentDateField;
    }
  }

  function createDateSelectedCallback(datePicker, getCurrentDateField) {
    return function(date) {
      var dateField = getCurrentDateField();

      dateField.setDate(date);
      setTimeout(dateField.focus);

      datePicker.hide();
    };
  }

  function createWidget(onDateSelectedCallback) {
    /*global Pikaday*/
    return new Pikaday({
      onSelect: onDateSelectedCallback,
      bound: false,
      theme: 'xo',
      firstDay: 1,
      i18n: {
        previousMonth: 'luna precedentă',
        nextMonth: 'luna următoare',
        months: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        weekdays: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sîmbătă'],
        weekdaysShort: ['Du', 'Lu', 'Ma', 'Me', 'Jo', 'Vi', 'Sî']
      }
    });
  }

  window.App.Widgets.DatePicker = DatePicker;

}());
