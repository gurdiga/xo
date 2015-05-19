JS_FILES=$(shell find app -name '*.jsx' -or -name '*.js' -or -name '*.json') config/package.json

dist: ui chrome-app-package build/jquery.min.js
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/ \
		&> /dev/null

ui: node_modules lintspaces jsxhint build/react.min.js
	@browserify \
		--transform reactify \
		app/index.jsx > build/index.js

chrome-app-package: build/manifest.json build/background.js build/index.html

build/manifest.json: build app/manifest.json
	@cp app/manifest.json build/

build/background.js: build app/background.js
	@cp app/background.js build/

build/index.html: build app/index.html
	@cp app/index.html build/

build/react.min.js: build
	@cp node_modules/react/dist/react.min.js build/

build/jquery.min.js: build
	@cp node_modules/jquery/dist/jquery.min.js build/
	@cp node_modules/jquery/dist/jquery.min.map build/

build:
	@mkdir build

jsxhint:
	@jsxhint \
		--show-non-errors \
		--config config/jshint.json \
		$(JS_FILES)

deps: node_modules
node_modules: package.json
	@npm install && touch node_modules

package.json:
	ln -s config/package.json .

lintspaces:
	@lintspaces \
		--newline \
		--maxnewlines 2 \
		--trailingspaces \
		--indentation spaces \
		$(JS_FILES)

clean:
	rm -rf build/
