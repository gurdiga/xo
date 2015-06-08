chrome-app-package: \
	build \
	build/manifest.json \
	build/background.js \
	build/index.html \
	build/react.js \
	build/moment.js \
	build/tape.js \
	build/_.js \
	build/css/style.css \
	images

build/manifest.json: app/manifest.json
	cp app/manifest.json build/

build/background.js: app/background.js
	cp app/background.js build/

build/index.html: app/index.html
	cp app/index.html build/

build/css/style.css: build/css app/css/style.css
	cp app/css/style.css build/css/style.css

build/css:
	mkdir build/css

build/react.js: build node_modules/moment/min/moment.min.js
	cp node_modules/react/dist/react-with-addons.js build/react.js

build/moment.js: build node_modules/moment/min/moment.min.js
	cp node_modules/moment/min/moment.min.js build/moment.js

build/tape.js: build node_modules/uglify-js node_modules/browserify node_modules/tape
	browserify --require tape --standalone tape | uglifyjs > build/tape.js

build/_.js: build node_modules/uglify-js node_modules/browserify node_modules/lodash
	browserify --require lodash --standalone _ | uglifyjs > build/_.js

images:
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
