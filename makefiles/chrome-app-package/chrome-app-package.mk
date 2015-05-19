chrome-app-package: build/manifest.json build/background.js build/index.html

build/manifest.json: build app/manifest.json
	cp app/manifest.json build/

build/background.js: build app/background.js
	cp app/background.js build/

build/index.html: build app/index.html
	cp app/index.html build/

build/react-with-addons.min.js: build
	cp node_modules/react/dist/react-with-addons.min.js build/

testing-tools: build/jquery.min.js build/mocha.js build/WebConsole.js build/chai.js build/chai-jquery.js

build/jquery.min.js: build
	cp node_modules/jquery/dist/jquery.min.js build/

build/mocha.js:
	cp node_modules/mocha/mocha.js build/

build/WebConsole.js:
	cp bower_components/WebConsole/WebConsole.js build/

build/chai.js:
	cp node_modules/chai/chai.js build/

build/chai-jquery.js:
	cp node_modules/chai-jquery/chai-jquery.js build/

build:
	mkdir build
