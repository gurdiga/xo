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
