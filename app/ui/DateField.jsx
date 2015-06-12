'use strict';

var DateField = {};

DateField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <TextFieldInput
        ref='input'
        value={this.props.value}
      />
      <button style={buttonStyle} onClick={this.showCalendar}>cal</button>
    </FieldLabel>
  );
};

DateField.getValue = function() {
  return this.refs.input.getValue();
};

DateField.showCalendar = function() {
  var inputDomElement = React.findDOMNode(this.refs.input);
  positionDatePickerUnder(inputDomElement);
};

var DATE_FORMAT = 'dd.mm.yyyy';

DateField.statics = {
  DATE_FORMAT: DATE_FORMAT
};

/*global Pikaday*/
var datePicker = new Pikaday({
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

function positionDatePickerUnder(inputDomElement) {
  inputDomElement.parentNode.insertBefore(datePicker.el, inputDomElement);
}

var buttonStyle = {
  marginLeft: '-2em',
  position: 'absolute'
};

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');

module.exports = React.createClass(DateField);
