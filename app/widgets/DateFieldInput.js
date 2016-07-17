(function() {
  'use strict';

  DateFieldInput.DATE_FORMAT = 'DD.MM.YYYY';
  DateFieldInput.DATE_PICKER_SELECTOR = '.pika-single';

  function DateFieldInput(value) {
    var input = new TextFieldInput(value);
    var datePickerButton = createDatePickerButton(this);

    this.getValue = delegateTo(input, 'getValue');
    this.setValue = delegateTo(input, 'setValue');
    this.focus = delegateTo(input, 'focus');
    this.addDatePicker = delegateTo(input, 'precedeWith');
    this.setStyle = delegateTo(input, 'setStyle');

    this.appendTo = function(parentDomElement) {
      input.appendTo(parentDomElement);
      parentDomElement.appendChild(datePickerButton);
    };

    this.getDate = function() {
      var text = input.getValue();
      return text ? DateFormatting.parse(text, DateFieldInput.DATE_FORMAT) : new Date();
    };

    this.setDate = function(date) {
      var formattedDate = DateFormatting.format(date, DateFieldInput.DATE_FORMAT);
      input.setValue(formattedDate);
    };
  }

  function createDatePickerButton(dateField) {
    var style = {
      width: '20px',
      height: '20px',
      padding: '0',
      border: 'none',
      backgroundColor: 'transparent',
      backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAF4VF24AAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAG9JREFUGBltTu0RgCAIFc4FWiHdoJ1sptqpWVrAg3x2eHTGDx+8DyQEVEqp9CbkNSvhwTiaV/PMLFnIsK9C0Ig54lW4GISvT0RJ906Q0iksV8MDbggsvDUs3VClLn6N9ZHjPc4BiU/tPJujuYF/mx55tzEWYjQMAAAAAABJRU5ErkJggg==")',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      marginTop: '2px',
      marginLeft: '-18px',
      position: 'absolute'
    };

    var attributes = {
      'title': 'Deschide calendarul'
    };

    var button = createDOMElement('button', style, attributes);

    makeShy(button);
    button.addEventListener('click', toggleDatePickerFor(dateField));
    hideOnEscapeOrOutsideClick(DatePicker.instance);

    return button;
  }

  function toggleDatePickerFor(dateField) {
    return function(e) {
      e.stopPropagation();

      // this is needed because <button>’s parent is a <label>, which
      // assumes clicks of its children and, in Firefox and Safari, propagates
      // them further to the <body> which causes the picker to be hidden by
      // its click handler.
      e.preventDefault();

      DatePicker.instance.toggleFor(dateField);
    };
  }

  var DatePicker = window.App.Widgets.DatePicker;
  var TextFieldInput = window.App.Widgets.TextFieldInput;

  var DateFormatting = window.App.Utils.DateFormatting;
  var makeShy = window.App.Utils.makeShy;
  var createDOMElement = window.App.Utils.createDOMElement;
  var delegateTo = window.App.Utils.delegateTo;
  var hideOnEscapeOrOutsideClick = window.App.Utils.hideOnEscapeOrOutsideClick;

  window.App.Widgets.DateFieldInput = DateFieldInput;

}());
