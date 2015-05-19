'use strict';

var UI = require('./ui.jsx');

React.render(<UI/>, document.body);

if (process.env.NODE_ENV === "development") UI.test();
