# 2O3T-UI

[![](https://img.shields.io/npm/v/2o3t-ui.svg?style=flat)](https://www.npmjs.com/package/2o3t-ui)
![](https://img.shields.io/badge/language-javascript-blue.svg)
![](https://img.shields.io/npm/dt/2o3t-ui.svg)

[![](https://img.shields.io/badge/UIKit-@2o3t.cn-red.svg)](http://uikit.2o3t.cn)

![](https://avatars1.githubusercontent.com/u/43493256?s=200&v=4)

## Documentation

Visit [2o3t.cn](https://2o3t.github.io/2o3t-ui).

## init

```js
import '2o3t-icon-font/dist/font-ot.css';
import '2o3t-ui/libs/styles.css';
import OTUI from '2o3t-ui';

// 三方库
const hljs = require('highlight.js');
const markdownit = require('markdown-it');
const cheerio = require('cheerio');
const clipboard = require('clipboard-polyfill');
Vue.use(OTUI, {
    global: true,
    plugins: {
        markdownit,
        cheerio,
        clipboard,
        hljs,
    },
});
```

or 引入 CDN

```html
<script src="https://cdn.bootcss.com/highlight.js/9.13.1/highlight.min.js"></script>
<script src="https://cdn.bootcss.com/markdown-it/8.4.2/markdown-it.min.js"></script>
<script src="https://cdn.bootcss.com/clipboard-polyfill/3.0.0-beta3/clipboard-polyfill.promise.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
```

```js
import '2o3t-icon-font/dist/font-ot.css';
import '2o3t-ui/libs/styles.css';
import OTUI from '2o3t-ui';

Vue.use(OTUI, {
    global: true,
});
```
