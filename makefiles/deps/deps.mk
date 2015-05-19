deps: install-npm-packages install-bower-packages

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
