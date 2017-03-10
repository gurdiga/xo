import {createDOMElement} from "app/utils/createDOMElement";
import {addStyle} from "app/utils/addStyle";
import {assert} from "test/helper";

describe('addStyle', function() {
  'use strict';

  var domElement, style;

  describe('happy path', function() {
    before(function() {
      domElement = createDOMElement('div');
      style = {
        'color': 'red'
      };
    });

    it('works for the happy path', function() {
      addStyle(domElement, style);

      assert.equal(domElement.style.color, style.color, 'sets the given style on the DOM element');
    });
  });

  describe('input validation', function() {
    it('throws meaningful error messages', function() {
      assert.throws(function() {
        addStyle(42);
      },
        'addStyle expects the first argument to be a DOM element'
      );

      assert.throws(function() {
        addStyle(createDOMElement('div'), 42);
      },
        'addStyle expects the second argument to be a hash'
      );
    });
  });
});
