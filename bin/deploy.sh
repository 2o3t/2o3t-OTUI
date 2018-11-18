#!/usr/bin/env sh

# abort on errors
set -e

#yarn
yarn

# lint
npm run lint

# build
npm run build

# navigate into the build output directory
cd webs

# if you are deploying to a custom domain
# echo 'uikit.2o3t.cn' > CNAME
# readme
cat ../README.MD > README.MD

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:2o3t/2o3t-ui.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:2o3t/2o3t-ui.git master:gh-pages

cd -
