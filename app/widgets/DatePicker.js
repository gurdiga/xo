(function() {
  'use strict';

  DatePicker.instance = new DatePicker();

  function DatePicker() {
    var INTERNAL_DATE_FORMAT = 'yyyy-mm-dd';

    /*global Pikaday*/
    var widget = new Pikaday({
      onSelect: function(date) { onSelect(date); },
      bound: false,
      theme: 'xo',
      firstDay: 1,
      i18n: {
        previousMonth: 'luna precedentă',
        nextMonth: 'luna următoare',
        months: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
        weekdays: ['Duminică','Luni','Marţi','Miercuri','Joi','Vineri','Sîmbătă'],
        weekdaysShort: ['Du','Lu','Ma','Me','Jo','Vi','Sî']
      }
    });

    var currentDateField;

    this.showDate = function(dateField) {
      var dateAsText = DateFormatting.format(dateField.getDate(), INTERNAL_DATE_FORMAT);

      dateField.addDatePicker(widget.el);
      currentDateField = dateField;

      var DO_NOT_TRIGER_SELECT;
      widget.setDate(dateAsText, DO_NOT_TRIGER_SELECT = true);
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

    var onSelect = function(date) {
      currentDateField.setDate(date);
      this.hide();
    }.bind(this);
  }

  var DateFormatting = window.App.Utils.DateFormatting;

  window.App.Widgets.DatePicker = DatePicker;

}());
