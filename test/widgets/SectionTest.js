describe('Section', function() {
  'use strict';

  var Section = window.App.Widgets.Section;

  var labelText, content, section, domElement, fieldset, legend;

  before(function() {
    labelText = 'My section';
    content = document.createElement('p');
    content.textContent = 'section content';

    section = new Section(labelText, [content]);
    domElement = getWidgetDOMElement(section);

    fieldset = getWidgetDOMElement(section);
    legend = fieldset.firstChild;
  });

  it('has the approrpiate DOM structure', function() {
    assert.equal(fieldset.tagName, 'FIELDSET', 'has the approrpiate tag name');
    assert.equal(fieldset.childElementCount, 2, '<fieldset> renders 2 children: the <legend> and the <p>');

    assert.equal(legend.tagName, 'LEGEND', 'legend is rendered');
    assert.equal(legend.textContent, labelText, 'legend has the text given in the “label” attribute');

    var content = fieldset.querySelector('p');
    assert.equal(content.textContent, 'section content', 'renders its children as children of the <fieldset>');
  });

  it('has its fieldset styled', function() {
    var css = fieldset.style;

    assert.equal(css.margin, '0px', 'no outer spacing');
    assert.equal(css.borderWidth, '0px', 'explicitly removing fieldset border');
    assert.equal(css.paddingLeft, '5px', 'reset fieldset’s default left padding');
    assert.equal(css.paddingRight, '0px', 'remove fieldset’s default right padding');
    assert.equal(css.paddingTop, '10px', 'has some vertical padding to allow some space between the legend and the content');
    assert.equal(css.paddingBottom, '40px', 'keep some space at the bottom');
  });

  it('can be asked to setStyle', function() {
    var style = {
      'background-color': 'red'
    };

    section.setStyle(style);

    assert.equal(domElement.style.backgroundColor, style['background-color'],
      'the background color is set approrpiately');
  });

  it('has its legend styled', function() {
    var css = legend.style;

    assert.equal(css.color, 'white', 'has inverted font and background colors to stand out');
    assert.equal(css.backgroundColor, 'rgb(51, 51, 51)', 'background color is not full black because it’s too strong');
    assert.equal(css.fontWeight, 'bold', 'text is bold to stand out on the dark background');
    assert.equal(css.fontSize, '22px', 'text is big enough to stand out');
    assert.equal(css.fontFamily, 'TitleFont', 'text has the font family of TitleFont');
    assert.equal(css.marginLeft, '-5px', 'align with fieldset’s border');
    assert.equal(css.paddingTop, '8px', 'allow some padding at the top for a stronger effect');
    assert.equal(css.paddingBottom, '8px', 'mirror the top  padding');
    assert.equal(css.paddingLeft, '6px', 'the left padding aligns with label to form a stronger vertical line');
    assert.equal(css.paddingRight, '0px', 'no need for right padding');
  });

  var assert = window.TestHelpers.assert;
  var getWidgetDOMElement = window.TestHelpers.getWidgetDOMElement;
});
