(function() {
  'use strict';

  var outlineFieldOnFocus = window.App.Utils.outlineFieldOnFocus;
  var input = document.createElement('input');

  tape('outlineFieldOnFocus', function(t) {
    t.equal(input.style.boxShadow, '', 'does not have the CSS box-shadow property set');
    t.ok(!input.hasAttribute('outline-on-focus'), 'doesn’t have the boolean outline-on-focus attribute added');

    outlineFieldOnFocus(input);

    input.dispatchEvent(new Event('focus'));
    t.equal(input.style.boxShadow, 'rgb(181, 213, 255) 0px 0px 3px 2px', 'has CSS box-shadow property set when focused');

    input.dispatchEvent(new Event('blur'));
    t.equal(input.style.boxShadow, '', 'has CSS box-shadow property removed when loses focus');

    t.ok(input.hasAttribute('outline-on-focus'), 'has the boolean outline-on-focus attribute added');

    t.end();
  });

}());
