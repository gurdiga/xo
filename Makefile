export
	NODE_ENV=development
	JS_FILES=$(shell \
		find \
			test app mixins utils makefiles \
			-name '*.jsx' \
			-or -name '*.js' \
			-or -name '*.json' \
			-and -not -name 'jshint.json' \
	)

default: ui chrome-app-package

open-in-browser: ui chrome-app-package
	@open build/index.html

dist: ui chrome-app-package open-app

pre-commit: clean lint-force dist

open-app:
	@open --new -a "Google Chrome" --args \
		--load-and-launch-app=$$(pwd)/build

ui: build deps lint files
	@browserify \
		--debug \
		--transform envify \
		app/main.js \
		> build/main.js

files: \
	build/app/UI.js \
	build/app/ui/LargeTextField.js \
	build/app/ui/FieldLabel.js \
	build/app/ui/SelectField.js \
	build/app/ui/Section.js \
	build/app/ui/PersonSection.js \
	build/app/ui/NewCaseButton.js \
	build/app/ui/NewCaseDialog.js \
	build/app/ui/DateField.js

build/app/%.js: app/%.js
	@mkdir -p $$(dirname $@)
	browserify --debug $< > $@

clean:
	rm -rf build/

include $(shell find makefiles -name '*.mk' | sort)

# experimental
build/%.js: app/%.jsx
	$(eval destination_dir=$(dir $@))
	@mkdir -p $(destination_dir)
	jsx $< > $@

build/%.js: app/%.js
	cp $< $@

build/%.json: app/%.json
	cp $< $@

#build/index.html: app/index.jade build/js-list.diff
#	node makefiles/common/compile-index.js < build/js-list.txt > $@

build/js-list.diff:: # double colon means “allways build”
	@mv build/js-list.txt build/js-list.txt.prev || touch build/js-list.txt.prev
	@find app test -type f -name '*.jsx' -or -name '*.js' > build/js-list.txt
	@diff --new-file build/js-list.txt build/js-list.txt.prev || touch $@
