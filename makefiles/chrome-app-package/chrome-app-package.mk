chrome-app-package: build build/manifest.json build/background.js build/style.css build/index.html

build/manifest.json: app/manifest.json
	cp app/manifest.json build/

build/background.js: app/background.js
	cp app/background.js build/

build/index.html: app/index.html
	cp app/index.html build/

build/react.js: build node_modules/react/dist/react.js
	cp node_modules/react/dist/react.js build/react.js

build/style.css: app/style.css
	cp app/style.css build/style.css

build:
	mkdir build
