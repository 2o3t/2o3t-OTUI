#!/usr/bin/env sh

# abort on errors
set -e

# lint
npm run lint:libs
npm run lint

# sass
npm run sass:main:color

# build
npm run build

# navigate into the build output directory
cd webs

# if you are deploying to a custom domain
echo 'uikit.2o3t.cn' > CNAME
# readme
cat ../README.MD > README.MD

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:2o3t/2o3t.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
