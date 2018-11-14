#!/usr/bin/env sh

# abort on errors
set -e

# version ctrl
node ./bin/libsVersionCtrl.js

# build
npm run build:libs

# publish
npm publish

# deploy
npm run deploy

# finish
echo 'Deploy Finish...'
