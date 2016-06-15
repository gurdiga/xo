describe('TodoItem', function() {
  'use strict';

  var TodoItem = window.App.Widgets.TodoItem;

  it('exists', function() {
    assert(typeof TodoItem === 'function', 'it’s a function');
  });

  var assert = window.TestHelpers.assert;
});
