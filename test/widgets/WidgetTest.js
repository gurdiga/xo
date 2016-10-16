describe('Widget', function() {
  'use strict';

  // TODO: should this be WidgetDecorator?
  var Widget = window.App.Widgets.Widget;

  it('can decorate a given widget class', function() {
    function Field() {
      var domElement = createDOMElement('field');

      this.domElement = domElement;

      Widget.call(this, domElement);
    }

    var field = new Field();
    var container = createDOMElement('container');

    assert.isFunction(field.appendTo, 'adds the `appendTo` method');

    field.appendTo(container);
    assert.equal(container.firstChild, field.domElement,
      '`appendTo` adds the widget’s DOM element to the given one');

    assert.isFunction(field.remove, 'adds the `remove` method');

    field.remove();
    assert(container.childNodes.length === 0,
      '`remove` removes the widget’s DOM element from its parent');
  });

  it('puts the given internal name in the “internal-name” attribute', function() {
    // TODO
  });

  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;
});
