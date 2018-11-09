#!/usr/bin/env sh

# abort on errors
set -e

# version ctrl
node ./bin/libsVersionCtrl.js

# build
npm run sass:base:build
npm run sass:main:build
npm run build:libs

# publish
npm publish

# deploy
npm run deploy

# finish
echo 'Finish...'
