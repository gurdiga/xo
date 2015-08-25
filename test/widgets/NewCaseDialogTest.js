(function() {
  'use strict';

  var NewCaseDialog = window.App.Widgets.NewCaseDialog;
  var test = tape;

  var sandbox = document.createElement('div');
  document.body.appendChild(sandbox);

  var newCaseDialog = new NewCaseDialog();
  newCaseDialog.appendTo(sandbox);

  test('NewCaseDialog', function(t) {
    var domElement = sandbox.querySelector('new-case-dialog');

    t.ok(domElement, 'renders a <new-case-dialog/>');
    t.equal(domElement.style.display, 'block', '<new-case-dialog/> has display:block');

    var title = domElement.querySelector(':scope>h1');
    t.ok(title, 'has title');
    t.equal(title.textContent, 'Procedură de ordin general', 'title has the appropriate text');

    var css = window.getComputedStyle(title);
    t.equal(css.fontSize, '42px', 'title has the appropriate font size');
    t.equal(css.fontFamily, 'TitleFont', 'title has the appropriate font family');
    t.equal(css.fontWeight, 'bold', 'title has the appropriate font weight');

    t.end();
  });

}());
