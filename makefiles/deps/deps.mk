deps: install-npm-packages node_modules/mixins

install-npm-packages: package.json node_modules

package.json:
	ln --force --symbolic makefiles/deps/package.json

node_modules:
	npm prune && \
	npm install

node_modules/mixins:
	ln --force --symbolic ../mixins --target node_modules
