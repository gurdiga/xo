describe('resetChildren', function() {
  'use strict';

  var resetChildren = window.App.Utils.resetChildren;

  it('can reset the children of a given DOM element', function() {
    var container = createDOMElement('container');

    var child = createDOMElement('child');
    container.appendChild(child);

    var aNewChild = createDOMElement('new-child');
    var aWidget = new LabeledTextField('A field');
    resetChildren(container, [aNewChild, aWidget]);

    assert.equal(container.children.length, 2, 'has the appropriate number of children');
    assert.equal(container.children[0].tagName, aNewChild.tagName, 'contains the new children only');
    assert.equal(container.children[1].tagName, 'LABELED-TEXT-FIELD', 'contains the new children only');
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;
  var createDOMElement = window.App.Utils.createDOMElement;

  var assert = window.TestHelpers.assert;

});
