(function() {
  'use strict';

  DateFieldRaw.DATE_FORMAT = 'dd.mm.yyyy';

  function DateFieldRaw(labelText, value, additionalStyle) {
    var domElement = document.createElement('date-field');
    domElement.style.display = 'block';

    var input = new TextFieldInputRaw(value, additionalStyle);
    var datePickerButton = createDatePickerButton(this);

    var label = new FieldLabelRaw(labelText, {}, [input, datePickerButton]);
    label.appendTo(domElement);

    this.appendTo = function(parentDomElement) {
      parentDomElement.appendChild(domElement);
    };

    this.getValue = function() {
      return input.getValue();
    };

    this.addDatePicker = function(datePickerDomElement) {
      var inputDomElement = domElement.querySelector('input');
      inputDomElement.parentNode.insertBefore(datePickerDomElement, inputDomElement);
    };

    this.getDate = function() {
      var text = input.getValue();
      return text ? DateFormatting.parse(text, DateFieldRaw.DATE_FORMAT) : new Date();
    };

    this.setDate = function(date) {
      var formattedDate = DateFormatting.format(date, DateFieldRaw.DATE_FORMAT);
      input.setValue(formattedDate);
      window.setTimeout(input.focus);
    };
  }

  function createDatePickerButton(dateField) {
    var button = document.createElement('button');

    button.addEventListener('click', function(e) {
      e.stopPropagation();
      DatePicker.instance.toggleFor(dateField);
    });
    _.extend(button.style, datePickerButtonStyle);
    button.title = 'Deschide calendarul';

    return button;
  }

  var datePickerButtonStyle = {
    width: '20px',
    height: '20px',
    padding: '0',
    border: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAF4VF24AAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAG9JREFUGBltTu0RgCAIFc4FWiHdoJ1sptqpWVrAg3x2eHTGDx+8DyQEVEqp9CbkNSvhwTiaV/PMLFnIsK9C0Ig54lW4GISvT0RJ906Q0iksV8MDbggsvDUs3VClLn6N9ZHjPc4BiU/tPJujuYF/mx55tzEWYjQMAAAAAABJRU5ErkJggg==)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    marginLeft: '-18px',
    position: 'absolute'
  };

  var DatePicker = window.App.Widgets.DatePicker;
  var FieldLabelRaw = window.App.Widgets.FieldLabelRaw;
  var TextFieldInputRaw = window.App.Widgets.TextFieldInputRaw;

  var DateFormatting = window.App.Utils.DateFormatting;

  window.App.Widgets.DateFieldRaw = DateFieldRaw;

}());
