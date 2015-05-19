ui: node_modules jsxhint build build/react.js
	@browserify \
		--transform reactify \
		--exclude react \
		app/main.jsx > build/main.js

build/react.js: build 
	@browserify --require react > build/react.js

build:
	@mkdir build

jsxhint:
	@jsxhint --show-non-errors app/

deps: node_modules

node_modules:
	@npm install \
		browserify \
		react \
		react-tools \
		reactify
