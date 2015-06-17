'use strict';

var Section = require('../../app/ui/Section.jsx');
var test = tape;

var sandbox = document.createElement('div');
var labelText = 'My section';
var content = <p>section content</p>;
var section = React.render(
  <Section
    label={labelText}
  >{content}</Section>,
  sandbox
);

test('Section label', function(t) {
  var fieldset = sandbox.querySelector('fieldset');
  t.ok(fieldset, 'renders a <fieldset/>');
  t.equal(fieldset.childElementCount, 2, '<fieldset> renders 2 children: the <legend> and the content');

  var legend = fieldset.querySelector('legend');
  t.ok(legend, 'renders a <legend/> inside the <fieldset/>');
  t.equal(legend.textContent, labelText, 'legend has the text given in the “label” attribute');

  var content = fieldset.querySelector('p');
  t.equal(content.textContent, 'section content', 'renders its children as children of the <fieldset>');

  t.ok(section); // TODO: remove me
  t.end();
});

test('Section fieldset CSS', function(t) {
  var css = sandbox.querySelector('fieldset').style;
  t.equal(css.float, 'left', 'is floated left to allow for two columns');
  t.equal(css.width, '43%', 'is 43% wide to accommodate 2 columns and some spacing between them');
  t.equal(css.marginRight, '7%', 'spacing with the width get to half of the horizontal space');
  t.equal(css.marginLeft, '0px', 'no left spacing');
  t.equal(css.marginTop, '0px', 'no spacing at the top');
  t.equal(css.marginBottom, '10px', '10px space at the bottom to keep away fron the next row of sections');
  t.equal(css.border, 'none', 'explicitly removing fieldset border');
  t.equal(css.paddingLeft, '0px', 'remove fieldset’s default left padding');
  t.equal(css.paddingRight, '0px', 'remove fieldset’s default right padding');
  t.equal(css.paddingTop, '10px', 'has some vertical padding to allow some space between the legend and the content');
  t.equal(css.paddingBottom, '0px', 'remove fieldset’s default bottom padding');

  t.end();
});

test('Section legend CSS', function(t) {
  var css = sandbox.querySelector('fieldset>legend').style;
  t.equal(css.color, 'white', 'has inverted font and background colors to stand out');
  t.equal(css.backgroundColor, 'rgb(51, 51, 51)', 'background color is not full black because it’s too strong');
  t.equal(css.width, '100%', 'take all the horizontal space');
  t.equal(css.fontWeight, 'bold', 'text is bold to stand out on the dark background');
  t.equal(css.fontSize, '22px', 'text is big enough to stand out');
  t.equal(css.paddingTop, '8px', 'allow some padding at the top for a stronger effect');
  t.equal(css.paddingBottom, '8px', 'mirror the top  padding');
  t.equal(css.paddingLeft, '6px', 'the left padding aligns with label to form a stronger vertical line');
  t.equal(css.paddingRight, '0px', 'no need for right padding');

  t.end();
});

// TODO: how do I test propTypes? should I?
