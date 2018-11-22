#!/usr/bin/env sh

# abort on errors
set -e

export BUILD_TARGET=lib
# build
rollup -c ./libs/rollup.config.js
vue-cli-service build --target lib --name OTUI --dest dist libs/index.js

# finish
echo 'Build Libs Finish...'
