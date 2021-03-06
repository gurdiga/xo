test-bundle:
	webpack --config webpack.test.js

bundle: app-bundle test-bundle

app-bundle:
	webpack --config webpack.app.js

TSCONFIG_OPTIONS=$(shell jq --raw-output '.compilerOptions | to_entries | map("--\(.key) \(.value) ") | add' tsconfig.json)

%.js: %.ts
	tsc $(TSCONFIG_OPTIONS) --outFile "$@" "$<"

js:
	tsc $(TSCONFIG_OPTIONS)

export
	NODE_ENV=development
	JS_FILES=$(shell \
		find . -regextype posix-extended \
			-type d -regex '^./(lib|node_modules)' -prune \
			-type f \
			-or -name '*.js' \
	)

default: lib-all lint

include $(shell find makefiles -name '*.mk' | sort)
