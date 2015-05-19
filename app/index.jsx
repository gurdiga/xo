'use strict';

var UI = require('./ui.jsx');

React.render(<UI/>, document.body);

if (process.env.NODE_ENV === "development") {
  window.expect = window.chai.expect;
  window.chai.config.truncateThreshold = 2048;

  window.mocha.setup({
    ui: 'bdd',
    reporter: window.WebConsole
  });

  UI.test();

  var allGlobals = ['AppView', 'WebView'];

  window.mocha.checkLeaks();
  window.mocha.globals(allGlobals);
  window.mocha.run();
}
