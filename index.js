(function() {
  'use strict';

  /*global chrome*/
  chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
      /*
      'bounds': {
        'width': 1000,
        'height': 800
      },
      */
      'state': 'maximized'
    });
  });

}());
