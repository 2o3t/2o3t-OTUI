# OTUI

[![](https://img.shields.io/npm/v/2o3t-ui.svg?style=flat)](https://www.npmjs.com/package/2o3t-ui)
![](https://img.shields.io/badge/language-javascript-blue.svg)
![](https://img.shields.io/npm/dt/2o3t-ui.svg)

[![](https://img.shields.io/badge/UIKit-@2o3t.cn-red.svg)](http://uikit.2o3t.cn)


Watch this space!

## init

```js
// import hljs from 'highlight.js';
import 'font-awesome/css/font-awesome.min.css';
import '2o3t-ui/libs/styles.css';
import OTUI from '2o3t-ui';

const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');
const clipboard = require('clipboard-polyfill');
Vue.use(OTUI, {
    global: true, // 全局注册 mixins
    plugins: {
        markdownIt: MarkdownIt,
        cheerio,
        clipboard,
    },
});

```
