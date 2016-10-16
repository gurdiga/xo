describe('WidgetRole', function() {
  'use strict';

  // TODO: should this be WidgetDecorator?
  var WidgetRole = window.App.Widgets.WidgetRole;

  it('can decorate a given widget class', function() {
    function Field() {
      var domElement = createDOMElement('field');

      this.domElement = domElement;

      WidgetRole.apply(this, [domElement]);
    }

    var field = new Field();
    var container = createDOMElement('container');
    var firstChild = createDOMElement('first-child');
    var secondChild = createDOMElement('second-child');
    container.appendChild(firstChild);
    container.appendChild(secondChild);

    assert.isFunction(field.appendTo, 'adds the `appendTo` method');
    field.appendTo(container);

    var fieldDOMElement = container.childNodes[2];
    assert.equal(fieldDOMElement, field.domElement,
      '`appendTo` adds the widget’s DOM element to the given one');

    assert.isFunction(field.setStyle, 'adds the `setStyle` method');

    var style = {
      'margin-left': '2em'
    };

    field.setStyle(style);
    assert.equal(fieldDOMElement.style.marginLeft, style['margin-left'],
      '`setStyle` applies the given style to widget’s DOM element');

    assert.isFunction(field.insertAfter, 'adds the `insertAfter` method');
    field.insertAfter(firstChild);
    assert.equal(firstChild.nextSibling, fieldDOMElement,
      '`insertAfter` inserts widget’s DOM element after the given one');

    assert.isFunction(field.setInternalName, 'adds the `setInternalName` method');
    field.setInternalName('my-custom-field');
    assert.equal(fieldDOMElement.getAttribute('internal-name'), 'my-custom-field',
      '`setInternalName` puts the given name in the “internal-name” attribute');

    assert.isFunction(field.remove, 'adds the `remove` method');
    field.remove();
    assert.equal(container.childNodes.length, 2,
      '`remove` removes the widget’s DOM element from its parent');
  });

  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;
});
