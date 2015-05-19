export
	JS_FILES=$(shell find app config -name '*.jsx' -or -name '*.js' -or -name '*.json')
	NODE_ENV=development

dist: ui chrome-app-package build/jquery.min.js
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/ \
		&> /dev/null

ui: deps testing-tools lintspaces jsxhint build/react-with-addons.min.js
	@browserify \
		--transform reactify \
		--transform envify \
		app/index.jsx > build/index.js

chrome-app-package: build/manifest.json build/background.js build/index.html

build/manifest.json: build app/manifest.json
	@cp app/manifest.json build/

build/background.js: build app/background.js
	@cp app/background.js build/

build/index.html: build app/index.html
	@cp app/index.html build/

build/react-with-addons.min.js: build
	@cp node_modules/react/dist/react-with-addons.min.js build/

testing-tools: build/jquery.min.js build/mocha.js build/WebConsole.js build/chai.js build/chai-jquery.js

build/jquery.min.js: build
	@cp node_modules/jquery/dist/jquery.min.js build/

build/mocha.js:
	@cp node_modules/mocha/mocha.js build/

build/WebConsole.js:
	@cp bower_components/WebConsole/WebConsole.js build/

build/chai.js:
	@cp node_modules/chai/chai.js build/

build/chai-jquery.js:
	@cp node_modules/chai-jquery/chai-jquery.js build/

build:
	@mkdir build

jsxhint:
	@jsxhint \
		--show-non-errors \
		--config config/jshint.json \
		$(JS_FILES)

deps: node_modules bower_modules

node_modules: package.json
	@npm install && touch node_modules

package.json:
	@ln -s config/package.json .

bower_modules: bower.json
	@bower install

bower.json:
	@ln -s config/bower.json

lintspaces:
	@lintspaces \
		--newline \
		--maxnewlines 2 \
		--trailingspaces \
		--indentation spaces \
		$(JS_FILES)

clean:
	rm -rf build/
