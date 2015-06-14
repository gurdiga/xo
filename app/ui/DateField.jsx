'use strict';

var DateField = {};

DateField.render = function() {
  return (
    <FieldLabel text={this.props.label}>

      <input
        ref='input'
        type='text'
        value={this.state.value}
        {...this.makeEditable()}
        {...this.makeStyled()}
        {...this.makeOutlinedOnFocus()}
      />

      <button
        style={buttonStyle}
        onClick={toggleDatePickerFor(this)}
        title='Deschide calendarul'
      ></button>

    </FieldLabel>
  );
};

function toggleDatePickerFor(dateField) {
  return function() {
    if (datePickerIsAlreadyDisplayedFor(dateField)) {
      hideDatePicker();
    } else {
      showDatePickerNextTo(dateField);
      syncDatePickerToReflectValueIn(dateField);
    }
  };
}

function datePickerIsAlreadyDisplayedFor(dateField) {
  return DateField.current === dateField;
}

function hideDatePicker() {
  datePicker.hide();
  document.body.appendChild(datePicker.el);
  DateField.current = null;
}

function showDatePickerNextTo(dateField) {
  var inputDomElement = React.findDOMNode(dateField.refs.input);
  inputDomElement.parentNode.insertBefore(datePicker.el, inputDomElement);
  datePicker.show();
  DateField.current = dateField;
}

function syncDatePickerToReflectValueIn(dateField) {
  var DO_NOT_TRIIGER_SELECT;
  datePicker.setDate(getDateFormattedForDatePicker(dateField), DO_NOT_TRIIGER_SELECT = true);
}

function getDateFormattedForDatePicker(dateField) {
  var currentValue = dateField.getValue();
  var date = currentValue ? DateFormatting.parse(dateField.getValue(), DATE_FORMAT) : new Date();

  return DateFormatting.format(date, DATE_PICKER_DATE_FORMAT);
}

/*global Pikaday*/
var datePicker = new Pikaday({
  onSelect: function(newDate) {
    setFieldValueTo(newDate);
    hideDatePicker();
  },
  onClose: focusDateField,
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

function setFieldValueTo(newDate) {
  var formattedDate = DateFormatting.format(newDate, DATE_FORMAT);
  DateField.current.setState({value: formattedDate});
}

function focusDateField() {
  var inputDomElement = React.findDOMNode(DateField.current.refs.input);

  /* setTimeout here is needed because onSelect is triggered
   * by mousedown, and because the click is not finished,
   * synchronous focus() doesn’t work as expected */
  window.setTimeout(function() {
    inputDomElement.focus();
  });
}

var DATE_FORMAT = 'dd.mm.yyyy';
var DATE_PICKER_DATE_FORMAT = 'yyyy-mm-dd';

DateField.getInitialState = function() {
  return {
    value: this.props.value
  };
};

DateField.getValue = function() {
  return this.state.value;
};

DateField.statics = {
  DATE_FORMAT: DATE_FORMAT
};

var buttonStyle = {
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

DateField.mixins = [
  require('mixins/editable.js'),
  require('mixins/styled.js'),
  require('mixins/outlined-on-focus.js')
];

var FieldLabel = require('./FieldLabel.jsx');
var DateFormatting = require('utils/DateFormatting');

var TextFieldInput = require('./TextFieldInput.jsx');
DateField.style = TextFieldInput.style;

module.exports = React.createClass(DateField);
