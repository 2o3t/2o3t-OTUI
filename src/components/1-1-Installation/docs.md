

[![](https://img.shields.io/npm/v/2o3t-ui.svg?style=flat)](https://www.npmjs.com/package/2o3t-ui)
[![](https://img.shields.io/badge/UIKit-@2o3t.cn-red.svg)](http://uikit.2o3t.cn)
[![](https://img.shields.io/npm/dt/2o3t-ui.svg)]()

### npm 安装

使用 npm 的方式安装。

```shell
npm install -S 2o3t-ui
```

### yarn 安装 (推荐)

推荐使用 yarn 的方式安装

```shell
yarn add 2o3t-ui
```

### 初始化引入

你可以引入整个 2o3t-ui 组件。

我们的图标库依赖于 [2o3t-icon-font](https://2o3t.github.io/2o3t-icon-font/)。

<ot-notice round>
一些三方库的引用, 需要通过初始化时注入其中. 否则部分组件会显示不正常.
</ot-notice>


```js
import '2o3t-icon-font/dist/font-ot.css';
import '2o3t-ui/libs/styles.css';
import OTUI from '2o3t-ui';

// 三方库
const hljs = require('highlight.js');
const markdownit = require('markdown-it');
const clipboard = require('clipboard-polyfill');
const moment = require('moment');
Vue.use(OTUI, {
    global: true,
    plugins: {
        markdownit,
        moment,
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
