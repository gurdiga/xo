(function() {
  'use strict';

  var Section = window.App.Widgets.Section;

  var sandbox = document.createElement('div');
  var labelText = 'My section';
  var additionalStyle = { width: '400px' };
  var content = document.createElement('p');
  content.textContent = 'section content';

  var section = new Section(labelText, [content], additionalStyle);
  section.appendTo(sandbox);

  var fieldset = sandbox.firstChild;
  var legend = fieldset.firstChild;

  tape('Section', function(t) {
    t.test('structure', function(t) {
      t.equal(fieldset.tagName, 'FIELDSET', 'has the approrpiate tag name');
      t.equal(fieldset.childElementCount, 2, '<fieldset> renders 2 children: the <legend> and the <p>');

      t.equal(legend.tagName, 'LEGEND', 'legend is rendered');
      t.equal(legend.textContent, labelText, 'legend has the text given in the “label” attribute');

      var content = fieldset.querySelector('p');
      t.equal(content.textContent, 'section content', 'renders its children as children of the <fieldset>');

      t.end();
    });

    t.test('fieldset syle', function(t) {
      var css = fieldset.style;

      t.equal(css.width, additionalStyle.width, 'accepts additional CSS as the 3rd argument');
      t.equal(css.margin, '0px', 'no outer spacing');
      t.equal(css.borderWidth, '0px', 'explicitly removing fieldset border');
      t.equal(css.paddingLeft, '5px', 'reset fieldset’s default left padding');
      t.equal(css.paddingRight, '0px', 'remove fieldset’s default right padding');
      t.equal(css.paddingTop, '10px', 'has some vertical padding to allow some space between the legend and the content');
      t.equal(css.paddingBottom, '40px', 'keep some space at the bottom');

      t.end();
    });

    t.test('legend style', function(t) {
      var css = legend.style;

      t.equal(css.color, 'white', 'has inverted font and background colors to stand out');
      t.equal(css.backgroundColor, 'rgb(51, 51, 51)', 'background color is not full black because it’s too strong');
      t.equal(css.fontWeight, 'bold', 'text is bold to stand out on the dark background');
      t.equal(css.fontSize, '22px', 'text is big enough to stand out');
      t.equal(css.fontFamily, 'TitleFont', 'text has the font family of TitleFont');
      t.equal(css.marginLeft, '-5px', 'align with fieldset’s border');
      t.equal(css.paddingTop, '8px', 'allow some padding at the top for a stronger effect');
      t.equal(css.paddingBottom, '8px', 'mirror the top  padding');
      t.equal(css.paddingLeft, '6px', 'the left padding aligns with label to form a stronger vertical line');
      t.equal(css.paddingRight, '0px', 'no need for right padding');

      t.end();
    });

    t.end();
  });

}());
