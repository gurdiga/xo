import {CompletionLabel} from "app/widgets/CompletionLabel";
import {createDOMElement} from "app/utils/createDOMElement";
import * as moment from "moment";
import {assert, getWidgetDOMElement} from "test/helper";

describe('CompletionLabel', function() {
  'use strict';

  var completionLabel, domElement, completionTime;

  beforeEach(function() {
    completionTime = new Date('2000-11-23T17:15:28.484Z');
    completionLabel = new CompletionLabel(completionTime);
    domElement = getWidgetDOMElement(completionLabel);
  });

  it('has the appropriate DOM structure', function() {
    assert.equal(domElement.tagName, 'COMPLETION-LABEL', 'has the appropriate tag name');

    var preposition = domElement.childNodes[0];
    assert.equal(preposition.nodeType, Element.TEXT_NODE, 'the preposition is a text node');
    assert.equal(preposition.textContent, 'completat la ', 'the preposition has the appropriate text');

    var timeElement = domElement.childNodes[1];
    assert.equal(timeElement.tagName, 'TIME', 'the second child is a <time> element');

    var humanlyReadableDate = moment(completionTime).format('DD.MM.YYYY HH:mm');
    assert.equal(timeElement.textContent, humanlyReadableDate, '<time> has the appropriate text content');
    assert.equal(timeElement.getAttribute('datetime'), completionTime.toISOString(),
      '<time>’s “datetime” attribute contains ISO 8601-formatted current date');
  });

  it('has the appropriate style', function() {
    var style = domElement.style;

    assert.equal(style.fontSize, '12px', 'has a smaller font-size than the main content');
    assert.equal(style.color, 'gray', 'is a little dimmed compared to the main content');
  });

  it('can be set additional style', function() {
    var additionalStyle = {
      'color': 'green'
    };

    completionLabel.setStyle(additionalStyle);
    assert.equal(domElement.style.color, additionalStyle.color, 'custom color is applied');
  });

  it('can tell its data', function() {
    var data = completionLabel.getData();
    assert.deepEqual(data, '2000-11-23T17:15:28.484Z', 'returns the ISO 8601-formatted timestamp');
  });

  it('can be told to remove itself', function() {
    var container = createDOMElement('div');
    completionLabel.appendTo(container);

    assert(container.children.length === 1, 'label added itself to the container');
    completionLabel.remove();
    assert(container.children.length === 0, 'label removed itself to the container');
  });

  it('validates input', function() {
    assert.throws(function() {
      new CompletionLabel(); // eslint-disable-line no-new
    },
      'CompletionLabel expects the completionTime argument to be a Date object'
    );
  });
});
