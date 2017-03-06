import {WidgetRole} from "app/widgets/WidgetRole"; // TODO: should this be WidgetDecorator?
import {createDOMElement} from "app/utils/createDOMElement";
import {assert} from "test/helper";

describe('WidgetRole', function() {
  'use strict';

  var field, container, firstChild, secondChild;

  before(function() {
    function Field() {
      var domElement = createDOMElement('field');

      this.domElement = domElement;

      WidgetRole.apply(this, [domElement]);
    }

    field = new Field();

    container = createDOMElement('container');
    firstChild = createDOMElement('first-child');
    secondChild = createDOMElement('second-child');
    container.appendChild(firstChild);
    container.appendChild(secondChild);
  });

  it('adds the `appendTo` method', function() {
    assert.isFunction(field.appendTo);
    field.appendTo(container);

    assert.equal(container.childNodes[2], field.domElement,
      '`appendTo` adds the widget’s DOM element to the given one');
  });

  it('adds the `setStyle` method', function() {
    assert.isFunction(field.setStyle);

    var style = {
      'margin-left': '2em'
    };

    field.setStyle(style);
    assert.equal(field.domElement.style.marginLeft, style['margin-left'],
      '`setStyle` applies the given style to widget’s DOM element');
  });

  it('adds the `insertAfter` method', function() {
    assert.isFunction(field.insertAfter);
    field.insertAfter(firstChild);
    assert.equal(firstChild.nextSibling, field.domElement,
      '`insertAfter` inserts widget’s DOM element after the given one');
  });

  it('adds the `hide` and `show` methods', function() {
    assert.isFunction(field.hide, 'hide');
    field.hide();
    assert.equal(field.domElement.style.display, 'none', 'sets widget’s DOM element display to none');

    assert.isFunction(field.show, 'show');
    field.show();
    assert.equal(field.domElement.style.display, '', 'sets widget’s DOM element display to empty string');
  });

  it('can tell wether widget’s DOM element is shown or hidden', function() {
    assert.isFunction(field.isShown, 'isShown');

    field.hide();
    assert.isFalse(field.isShown(), 'tells when it’s hidden');

    field.show();
    assert.isTrue(field.isShown(), 'tells when it’s shown');
  });

  it('adds the `toggle` method', function() {
    assert.isFunction(field.toggle);

    field.toggle();
    assert.isFalse(field.isShown(), 'hides widget’s DOM element when it’s visible');

    field.toggle();
    assert.isTrue(field.isShown(), 'shows widget’s DOM element when it’s hidden');
  });

  it('adds the `setInternalName` method', function() {
    assert.isFunction(field.setInternalName);
    field.setInternalName('my-custom-field');
    assert.equal(field.domElement.getAttribute('internal-name'), 'my-custom-field',
      '`setInternalName` puts the given name in the “internal-name” attribute');
  });

  it('adds the `remove` method', function() {
    assert.isFunction(field.remove);
    field.remove();
    assert.equal(container.childNodes.length, 2,
      '`remove` removes the widget’s DOM element from its parent');
  });
});
