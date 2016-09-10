describe('render', function() {
  'use strict';

  var render = window.App.Utils.render;

  var domStructure, domElement;

  before(function() {
    domStructure = {
      tagName: 'widget',
      attributes: {
        name: 'Magic',
        anyName: 'any value'
      },
      eventHanlders: {
        click: sinon.spy(),
        bark: sinon.spy()
      },
      children: [
        {
          tagName: 'h2',
          children: ['I am the title']
        }
      ]
    };

    domElement = render(domStructure);
  });

  it('returns a DOM element with the given tag name', function() {
    assert.instanceOf(domElement, HTMLElement, 'returns an HTML element');
    assert.equal(domElement.tagName, 'WIDGET', 'has the appropriate tag name');
  });

  it('returns a DOM element with the given attributes', function() {
    assert.equal(domElement.getAttribute('name'), domStructure.attributes.name,
      'has the appropriate attributes');
    assert.equal(domElement.getAttribute('anyName'), domStructure.attributes.anyName,
      'has the appropriate attributes');
  });

  it('returns a DOM element with the given event handlers', function() {
    domElement.click();
    assert.isTrue(domStructure.eventHanlders.click.called,
      'calls the click handler appropriately');

    domElement.dispatchEvent(new Event('bark'));
    assert.isTrue(domStructure.eventHanlders.bark.called,
      'calls the bark handler appropriately');
  });

  it('renders the children', function() {
    var h2 = domElement.firstChild;
    assert.equal(h2.tagName, 'H2', 'child has the appropriate tag name');
  });

  // TODO validate input

  var assert = window.TestHelpers.assert;
  var sinon = window.sinon;
});
