.PHONY: sass html js

all: sass html js

sass:
	sass scss/custom.scss build/styles.css

html:
	python render.py

js:
	rollup -c