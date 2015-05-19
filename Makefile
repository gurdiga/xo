JS_FILES=$(shell find app -name '*.jsx' -or -name '*.js' -or -name '*.json') config/package.json

chrome: ui build/manifest.json build/background.js build/index.html
	@/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--load-and-launch-app=$$(pwd)/build/ \
		&> /dev/null

ui: node_modules lintspaces jsxhint build/react.js
	@browserify \
		--transform reactify \
		--exclude react \
		app/main.jsx > build/main.js

build/manifest.json: app/manifest.json
	@cp $< build/

build/background.js: app/background.js
	@cp $< build/

build/index.html: app/index.html
	@cp $< build/

build/react.js: build 
	@browserify --require react > build/react.js

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
