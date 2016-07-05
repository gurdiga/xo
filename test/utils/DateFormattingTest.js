describe('DateFormatting', function() {
  'use strict';

  describe('.format', function() {
    var date, formattedDate;

    before(function() {
      date = new Date(2015, 10, 7);
      formattedDate = DateFormatting.format(date, 'DD/MM/YYYY');
    });

    it('works for the happy path', function() {
      assert.equal(formattedDate, '07/11/2015', 'returns a string representing the date formatted according to the given mask');
    });

    it('throws meaningful errors', function() {
      assert.throws(function runWithoutTheFirstArgument() {
        DateFormatting.format();
      },
        'DateFormatting.format: the first argument is required and has to be a JS Date instance'
      );

      assert.throws(function runWithoutTheSecondArgument() {
        DateFormatting.format(date);
      },
        'DateFormatting.format: the second argument is required and has to be a string representing the date format mask to represent date as'
      );
    });
  });

  describe('.parse', function() {
    var date;

    before(function() {
      date = DateFormatting.parse('2015-06-07', 'YYYY-MM-DD');
    });

    it('works for the happy path', function() {
      assert(_.isDate(date),
        'parses the string given as the first argument according' +
        ' to the string mask passed in the second argument and returns a date object');

      assert.equal(date.getDate(), 7, 'returned date has the appropriate date');
      assert.equal(date.getMonth(), 5, 'returned date has the appropriate month');
      assert.equal(date.getFullYear(), 2015, 'returned date has the appropriate year');
    });

    it('throws meaningful errors', function() {
      assert.throws(function runWithoutTheFirstArgument() {
        DateFormatting.parse();
      },
        'DateFormatting.parse: the first argument is required and has to be a string representing the date'
      );

      assert.throws(function runWithEmptyStringAsFirstArgument() {
        DateFormatting.parse('');
      },
        'DateFormatting.parse: the first argument is required and has to be a string representing the date'
      );

      assert.throws(function runWithoutTheSecondArgument() {
        DateFormatting.parse('2015-06-07');
      },
        'DateFormatting.parse: the second argument is required and has to be a string representing the date format mask'
      );
    });
  });

  var DateFormatting = window.App.Utils.DateFormatting;

  var assert = window.TestHelpers.assert;

});
