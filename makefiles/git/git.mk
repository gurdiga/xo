pre-commit: lib-all lint-force open

git-hook: .git/hooks/pre-commit

.git/hooks/pre-commit: makefiles/git/pre-commit-hook
	cp $< $@
