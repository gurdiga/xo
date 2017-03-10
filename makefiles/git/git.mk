skip:
	@echo skipping make pre-commit

pre-commit: lib-all lint-force

git-hook: .git/hooks/pre-commit

.git/hooks/pre-commit: makefiles/git/pre-commit-hook
	cp $< $@
