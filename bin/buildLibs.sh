#!/usr/bin/env sh

# abort on errors
set -e

# lint
npm run lint:libs

# build
# npm run sass:base:build
# npm run sass:main:build

rollup -c ./libs/rollup.config.js

# finish
echo 'Build Libs Finish...'
