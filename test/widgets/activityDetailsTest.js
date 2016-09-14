describe('activityDetails', function() {
  'use strict';

  var activityDetails = window.App.Widgets.activityDetails;

  var domStructure, domElement;

  it('has the appropriate DOM structure', function() {
    domStructure = activityDetails();
    domElement = render(domStructure);
    assert.equal(domElement.tagName, 'ACTIVITY-DETAILS', 'tag name');
    assert.equal(domElement.textContent, domStructure.childNodes[0], 'text content');
  });

  it('accepts additional child nodes as input', function() {
    var additionalChildNodes = [
      {
        tagName: 'label',
        childNodes: ['I am a label']
      }
    ];

    domStructure = activityDetails({
      additionalChildNodes: additionalChildNodes
    });
    domElement = render(domStructure);

    assert.equal(domElement.childNodes.length, 2, 'renders the appropriate number of children nodes');
    assert.equal(domElement.childNodes[1].tagName.toLowerCase(), additionalChildNodes[0].tagName,
      'renders the given children nodes');
  });

  var render = window.App.Utils.render;
  var assert = window.TestHelpers.assert;

});
