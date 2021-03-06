import {delegateTo} from "app/utils/delegateTo";
import {assert} from "test/helper";

describe('delegateTo', function() {
  'use strict';

  var date, dateWrapper;

  describe('happy path', function() {
    before(function() {
      date = new Date();
      date.format = 'YY-MM-DD';
      date.falsyProperty = '';

      dateWrapper = {
        toString: delegateTo(date, 'toString'),
        getFormat: delegateTo(date, 'format'),
        getFalsyProperty: delegateTo(date, 'falsyProperty')
      };
    });

    it('works', function() {
      assert.equal(dateWrapper.toString(), date.toString(), 'forwards calls to the other function');
      assert.equal(dateWrapper.getFormat(), date.format, 'forwards to properties');
      assert.equal(dateWrapper.getFalsyProperty(), date.falsyProperty, 'forwards to empty properties');
    });

  });

  describe('input validation', function() {
    it('throws a meaningful exception when the delegatee is missing', function() {
      var o = {
        toString: delegateTo(date, 'toSrtingWithATypo')
      };

      assert.throws(function() {
        o.toString();
      },
        'delegateTo: the delegatee doesn’t exist'
      );
    });
  });
});
