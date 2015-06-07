'use strict';

var DateField = {};

DateField.render = function() {
  return (
    <FieldLabel text={this.props.label}>
      <TextFieldInput
        ref='input'
        value={formatForUI(this.props.value)}
      />
    </FieldLabel>
  );
};

DateField.getValue = function() {
  return formatForInternalUse(this.refs.input.getValue());
};

var UI_DATE_FORMAT = 'dd/mm/yyyy';
var INTERNAL_DATE_FORMAT = 'yyyy-mm-dd';

function formatForUI(dateString) {
  dateString = dateString || '';

  var date = DateFormatting.parse(dateString, INTERNAL_DATE_FORMAT);
  return DateFormatting.format(date, UI_DATE_FORMAT);
}

function formatForInternalUse(dateString) {
  var date = DateFormatting.parse(dateString, UI_DATE_FORMAT);
  return DateFormatting.format(date, INTERNAL_DATE_FORMAT);
}

DateField.statics = {
  UI_DATE_FORMAT: UI_DATE_FORMAT,
  INTERNAL_DATE_FORMAT: INTERNAL_DATE_FORMAT
};

var FieldLabel = require('./FieldLabel.jsx');
var TextFieldInput = require('./TextFieldInput.jsx');
var DateFormatting = require('utils/DateFormatting.js');

module.exports = React.createClass(DateField);
