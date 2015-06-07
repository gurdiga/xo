'use strict';

var DateFormatting = require('utils/DateFormatting.js');
var test = tape;

test('DateFormatting.format', function(t) {
  var date = new Date(2015, 10, 7);
  var formattedDate = DateFormatting.format(date, 'dd/mm/yyyy');

  t.equal(formattedDate, '07/11/2015', 'returns a string representing the date formatted according to the given mask');

  t.throws(function runWithoutTheFirstArgument() {
    DateFormatting.format();
  },
    /DateFormatting.format: the first argument is required and has to be a JS Date instance/,
    'throws a meaningful exception when the first argument is not given'
  );

  t.throws(function runWithoutTheSecondArgument() {
    DateFormatting.format(date);
  },
    /DateFormatting.format: the second argument is required and has to be a string representing the date format mask to represent date as/,
    'throws a meaningful exception when the second argument is not given');

  t.end();
});

test('DateFormatting.parse', function(t) {
  var date = DateFormatting.parse('2015-06-07', 'yyyy-mm-dd');

  t.ok(_.isDate(date),
    'parses the string given as the first argument according' +
    ' to the string mask passed in the second argument and returns a date object');

  t.equal(date.getDate(), 7, 'returned date has the appropriate date');
  t.equal(date.getMonth(), 5, 'returned date has the appropriate month');
  t.equal(date.getFullYear(), 2015, 'returned date has the appropriate year');

  t.throws(function runWithoutTheFirstArgument() {
    DateFormatting.parse();
  },
    /DateFormatting.parse: the first argument is required and has to be a string representing the date/,
    'throws a meaningful exception when the first argument is not given'
  );

  t.throws(function runWithoutTheSecondArgument() {
    DateFormatting.parse('2015-06-07');
  },
    /DateFormatting.parse: the second argument is required and has to be a string representing the date format mask/,
    'throws a meaningful exception when the second argument is not given');

  t.end();
});
