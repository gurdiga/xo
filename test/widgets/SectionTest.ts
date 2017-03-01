describe('Section', function() {
  'use strict';

  var Section = window.App.Widgets.Section;

  var labelText, section, domElement, label;

  before(function() {
    labelText = 'My section';
    section = new Section(labelText);
    domElement = getWidgetDOMElement(section);
    label = domElement.firstChild;
  });

  it('has the approrpiate DOM structure', function() {
    assert.equal(domElement.getAttribute('widget-name'), 'LabeledContainer', 'has a container');
    assert.equal(label.textContent, labelText, 'has the approrpiate label text');
  });

  it('has the approrpiate style', function() {
    var style = domElement.style;

    assert.equal(style.paddingLeft, '5px', 'left padding');
    assert.equal(style.paddingRight, '0px', 'right padding');
    assert.equal(style.paddingTop, '10px', 'top padding');
    assert.equal(style.paddingBottom, '40px', 'bottom padding');
  });

  it('can be asked to setStyle', function() {
    var style = {
      'background-color': 'red'
    };

    section.setStyle(style);

    assert.equal(domElement.style.backgroundColor, style['background-color'],
      'the background color is set approrpiately');
  });

  it('has its label styled', function() {
    var style = label.style;

    assert.equal(style.color, 'white', 'has inverted font and background colors to stand out');
    assert.equal(style.backgroundColor, 'rgb(51, 51, 51)', 'background color is not full black because it’s too strong');
    assert.equal(style.fontWeight, 'bold', 'text is bold to stand out on the dark background');
    assert.equal(style.fontSize, '22px', 'text is big enough to stand out');
    assert.equal(style.fontFamily, 'TitleFont', 'text has the font family of TitleFont');
    assert.equal(style.marginLeft, '-5px', 'align with fieldset’s border');
    assert.equal(style.paddingTop, '8px', 'allow some padding at the top for a stronger effect');
    assert.equal(style.paddingBottom, '8px', 'mirror the top  padding');
    assert.equal(style.paddingLeft, '6px', 'the left padding aligns with label to form a stronger vertical line');
    assert.equal(style.paddingRight, '0px', 'no need for right padding');
  });

  it('can be asked to appendWidgets', function() {
    var childWidgets = [
      new LabeledTextField('I am a text field')
    ];
    var childWidgetsDOMElements = childWidgets.map(getWidgetDOMElement);

    section.appendWidgets(childWidgets);
    assert.equal(domElement.children[1], childWidgetsDOMElements[0], 'has appended the given widget');
  });

  var LabeledTextField = window.App.Widgets.LabeledTextField;

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
