deps: install-npm-packages install-bower-packages node_modules/mixins

install-npm-packages: package.json node_modules

package.json:
	ln --force --symbolic makefiles/deps/package.json

node_modules:
	npm prune && \
	npm install

install-bower-packages: bower.json bower_components

bower.json:
	ln --force --symbolic makefiles/deps/bower.json

bower_components:
	bower prune && \
	bower install

node_modules/mixins:
	ln --force --symbolic ../mixins --target node_modules
