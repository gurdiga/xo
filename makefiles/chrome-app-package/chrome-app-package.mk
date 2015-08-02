chrome-app-package: \
	build/manifest.json \
	build/background.js \
	build/index.html \
	build/react.js \
	build/pre-init.js \
	build/moment.js \
	build/tape.js \
	build/lodash.js \
	build/pikaday.js \
	build/css/pikaday.css \
	build/css/style.css \
	images

build/manifest.json: app/manifest.json | build
	cp app/manifest.json build/

build/background.js: app/background.js | build
	cp app/background.js build/

build/index.html: app/index.html | build
	cp app/index.html build/

build/css/style.css: app/css/style.css | build/css
	cp app/css/style.css build/css/style.css

build/css: | build
	mkdir build/css

build/react.js: node_modules/moment/min/moment.min.js | build
	cp node_modules/react/dist/react-with-addons.js build/react.js

build/pre-init.js: app/pre-init.js | build
	cp $< $@

build/moment.js: node_modules/moment/min/moment.min.js | build
	cp node_modules/moment/min/moment.min.js build/moment.js

build/tape.js: node_modules/uglify-js node_modules/browserify node_modules/tape | build
	browserify --require tape --standalone tape | uglifyjs > build/tape.js

build/lodash.js: node_modules/uglify-js node_modules/browserify node_modules/lodash | build
	browserify --require lodash --standalone _ | uglifyjs > build/lodash.js

build/pikaday.js: node_modules/pikaday/pikaday.js | build
	cp node_modules/pikaday/pikaday.js build/pikaday.js

build/css/pikaday.css: node_modules/pikaday/css/pikaday.css | build/css
	cp node_modules/pikaday/css/pikaday.css build/css/pikaday.css

images: | build
	@rsync \
		--delete \
		--quiet \
		--recursive \
		--force \
		--inplace \
		--whole-file \
		app/images \
		build/

build:
	mkdir build
