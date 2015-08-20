(function() {
  'use strict';

  var SectionRaw = window.App.Widgets.SectionRaw;
  var test = tape;

  var sandbox = document.createElement('div');
  var labelText = 'My section';
  var content = document.createElement('p');
  content.textContent = 'section content';

  var section = new SectionRaw(labelText, [content]);
  section.appendTo(sandbox);

  document.body.appendChild(sandbox);

  test('SectionRaw label', function(t) {
    var fieldset = sandbox.querySelector('fieldset');
    t.ok(fieldset, 'renders a <fieldset/>');
    t.equal(fieldset.childElementCount, 2, '<fieldset> renders 2 children: the <legend> and the <p>');

    var legend = fieldset.querySelector('legend');
    t.ok(legend, 'renders a <legend> inside the <fieldset>');
    t.equal(legend.textContent, labelText, 'legend has the text given in the “label” attribute');

    var content = fieldset.querySelector('p');
    t.equal(content.textContent, 'section content', 'renders its children as children of the <fieldset>');

    t.end();
  });

  test('SectionRaw fieldset CSS', function(t) {
    var fieldset = sandbox.querySelector('fieldset');
    var css = window.getComputedStyle(fieldset);
    var parentCss = window.getComputedStyle(fieldset.parentNode);
    t.equal(css.float, 'left', 'is floated left to allow for two columns');

    var width = Math.round(parseInt(css.width));
    var parentWidth = Math.round(parseInt(parentCss.width));
    t.equal(width, parseInt(parentWidth * 0.43), 'is 43% wide to accommodate 2 columns and some spacing between them');

    t.equal(css.marginRight, '99.671875px', 'spacing with the width get to half of the horizontal space');
    t.equal(css.marginLeft, '0px', 'no left spacing');
    t.equal(css.marginTop, '0px', 'no spacing at the top');
    t.equal(css.marginBottom, '10px', '10px space at the bottom to keep away fron the next row of sections');
    t.equal(css.border, '0px none rgb(0, 0, 0)', 'explicitly removing fieldset border');
    t.equal(css.paddingLeft, '0px', 'remove fieldset’s default left padding');
    t.equal(css.paddingRight, '0px', 'remove fieldset’s default right padding');
    t.equal(css.paddingTop, '10px', 'has some vertical padding to allow some space between the legend and the content');
    t.equal(css.paddingBottom, '0px', 'remove fieldset’s default bottom padding');

    t.end();
  });

  test('SectionRaw legend CSS', function(t) {
    var css = window.getComputedStyle(sandbox.querySelector('fieldset>legend'));
    t.equal(css.color, 'rgb(255, 255, 255)', 'has inverted font and background colors to stand out');
    t.equal(css.backgroundColor, 'rgb(51, 51, 51)', 'background color is not full black because it’s too strong');
    t.equal(css.width, '612.3125px', 'take all the horizontal space');
    t.equal(css.fontWeight, 'bold', 'text is bold to stand out on the dark background');
    t.equal(css.fontSize, '22px', 'text is big enough to stand out');
    t.equal(css.paddingTop, '8px', 'allow some padding at the top for a stronger effect');
    t.equal(css.paddingBottom, '8px', 'mirror the top  padding');
    t.equal(css.paddingLeft, '6px', 'the left padding aligns with label to form a stronger vertical line');
    t.equal(css.paddingRight, '0px', 'no need for right padding');

    document.body.removeChild(sandbox);
    t.end();
  });
}());
