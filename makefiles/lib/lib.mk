lib-all: \
	lib/moment.js \
	lib/tape.js \
	lib/lodash.js \
	lib/pikaday.js \
	lib/pikaday.css

lib:
	mkdir -p lib

lib/moment.js: node_modules/moment/min/moment.min.js | lib
	cp $< $@

node_modules/moment/min/moment.min.js:
	npm install moment@2.10.6

lib/tape.js: node_modules/uglify-js node_modules/browserify node_modules/tape | lib
	browserify --require tape --standalone tape | uglifyjs > lib/tape.js

node_modules/uglify-js:
	npm install uglify-js@2.4.23

node_modules/browserify:
	npm install browserify@10.2.4

node_modules/tape:
	npm install tape@4.0.0

lib/lodash.js: node_modules/uglify-js node_modules/browserify node_modules/lodash | lib
	browserify --require lodash --standalone _ | uglifyjs > lib/lodash.js

node_modules/lodash:
	npm install lodash@3.9.3

lib/pikaday.js: node_modules/pikaday/pikaday.js | lib
	cp $< $@

lib/pikaday.css: node_modules/pikaday/css/pikaday.css | lib
	cp $< $@

node_modules/pikaday/pikaday.js: node_modules/pikaday
node_modules/pikaday/css/pikaday.css: node_modules/pikaday

node_modules/pikaday:
	npm install pikaday@1.3.3
