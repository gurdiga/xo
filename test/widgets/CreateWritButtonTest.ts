import {CreateWritButton} from "app/widgets/CreateWritButton";
import {assert, getWidgetDOMElement} from "test/helper";

describe('CreateWritButton', function() {
  'use strict';

  var createWritButton, domElement;

  before(function() {
    createWritButton = new CreateWritButton();
    domElement = getWidgetDOMElement(createWritButton);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.getAttribute('widget-name'), 'CreateWritButton',
      'has the appropriate “widget-name” attribute');
    assert.equal(domElement.textContent, 'afişează încheiere', 'has the appropriate label');
  });

  it('has the appropriate style', function() {
    var css = domElement.style;

    assert.equal(css.fontFamily, 'sans-serif', 'has sans-serif font family');
    assert.equal(css.fontSize, '14px', 'has the appropriate font size');
    assert.equal(css.fontWeight, 'bold', 'is bold');
    assert.equal(css.padding, '5px 14px', 'has a nice padding');
    assert.equal(css.border, '1px solid silver', 'has a nice border');
    assert.equal(css.borderRadius, '5px', 'has 5px-rounded corners');
    assert.equal(css.color, 'rgb(119, 119, 119)', 'has the appropriate text color');
    assert.equal(css.background, 'transparent', 'has transparent background');
    assert.equal(css.marginTop, '5px', 'leaves some space at the top');
  });
});
