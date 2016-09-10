describe('activityDetails', function() {
  'use strict';

  var activityDetails = window.App.Widgets.activityDetails;

  var domStructure, domElement;

  before(function() {
    domStructure = activityDetails();
    domElement = render(domStructure);
    document.body.appendChild(domElement);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'ACTIVITY-DETAILS', 'tag name');
    assert.equal(domElement.textContent, domStructure.children[0], 'text content');
  });

  var render = window.App.Utils.render;
  var assert = window.TestHelpers.assert;

});
