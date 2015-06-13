'use strict';

var DateField = {};

DateField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <TextFieldInput
        ref='input'
        value={this.state.value}
      />
      <button style={buttonStyle} onClick={this.showDatePicker}>cal</button>
    </FieldLabel>
  );
};

DateField.getInitialState = function() {
  return {
    value: this.props.value
  };
};

DateField.getValue = function() {
  return this.state.value;
};

DateField.dateForPicker = function() {
  var date = DateFormatting.parse(this.state.value, DATE_FORMAT);
  return DateFormatting.format(date, DATE_PICKER_DATE_FORMAT);
};

DateField.datePickerUpdate = function() {
  var DO_NOT_TRIIGER_ON_SELECT;
  datePicker.setDate(this.dateForPicker(), DO_NOT_TRIIGER_ON_SELECT = true);
};

DateField.datePickerInsert = function() {
  var inputDomElement = React.findDOMNode(this.refs.input);
  inputDomElement.parentNode.insertBefore(datePicker.el, inputDomElement);
};

DateField.showDatePicker = function() {
  this.datePickerInsert();
  this.datePickerUpdate();
  DateField.current = this;
};

DateField.update = function(newDate) {
  var formattedDate = DateFormatting.format(newDate, DATE_FORMAT);
  DateField.current.setState({value: formattedDate});
};

var DATE_FORMAT = 'dd.mm.yyyy';
var DATE_PICKER_DATE_FORMAT = 'yyyy-mm-dd';

DateField.statics = {
  DATE_FORMAT: DATE_FORMAT
};

/*global Pikaday*/
var datePicker = new Pikaday({
  onSelect: function(newDate) {
    DateField.current.update(newDate);
    datePicker.hide();
  },
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

var buttonStyle = {
  marginLeft: '-2em',
  position: 'absolute'
};

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');
var DateFormatting = require('utils/DateFormatting');

module.exports = React.createClass(DateField);
