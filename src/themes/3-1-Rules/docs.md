
### 命名规则

颜色规则采取了如下的方式定义:

> ${PREFIX}-${NAME}-${PROP}-${ACTION}

PREFIX: 表示前缀, 默认为 ot-color

NAME: 表示规则名称, 默认提供了 `font`, `background`, `border`, `border-top`, `border-right`, `border-bottom`, `border-left`

ACTION: 表示动作状态, 默认提供了 `normal`, `hover`, `active`, `focus`, `selected`, `disabled`

### 使用方式

我们提供了多种内置方法, 最主要的是 `otDefaultColors(theme)` .

可通过如下配置:

```js
import OTUIColors from '2o3t-css-colors/dist/2o3t-ui/index.js';
const { setOptions, otMixin } = OTUIColors;

setOptions({
    color: 'primary', // 颜色
    theme: 'light', // 亮色
});
Vue.mixin(otMixin);
```

接着, 你就可以在所有组件中使用配色规则了. 下面提供一个🌰:

```js
otDefaultColors(theme) {
    switch (theme) {
        case 'dark':
            return {
                normal: [ 'def-f', 'def-b', 'border' ],
                hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                active: [ 'def-bg-a', 'def-b-a' ],
                selected: [ 'dark-f-s', 'def-bg-s' ],
                disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
            };
        case 'light':
        default:
            return {
                normal: [ 'def-f', 'def-bg', 'def-b' ],
                hover: [ 'light-f-hov', 'def-bg-hov', 'def-b-hov' ],
                active: [ 'def-bg-act', 'def-b-act' ],
                selected: [ 'light-f-s', 'def-bg-s' ],
                disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
            };
    }
},
```

在默认情况下, 你只需要定义一个 `otDefaultColors` 方法, 组件会默认帮你将所有 `default` 前缀的命名, 替换成其它配色方案, 并生成对应的方法注入, 如下:

| 方法名 | 参数 | 备注 |
| --- | --- | --- |
| otDefaultColors | theme | 默认配色(原色) |
| otPrimaryColors | theme | 主配色(主题色) |
| otSuccessColors | theme | 成功配色(辅助色) |
| otWarningColors | theme | 警告配色(辅助色) |
| otDangerColors | theme | 危险配色(辅助色) |
| otInfoColors | theme | 信息配色(辅助色) |

### 整个栗子

<ot-notice color="info">
在开发时, 使用 `v-ot-bind={}` 进行配置. 如果需要丢弃原组件配置则使用 `:ot-bind={}` .
</ot-notice>

```js
<template>
    <div :class="$style.root" :size="$otSize">
        <div :class="$style.spinner">
            <ot-icon ot v-ot-bind="$otColors.spinner" :class='$style.spinner' icon="loading" selected loading></ot-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ot-loading',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    spinner: [ 'def-f-sel' ],
                };
            case 'light':
            default:
                return {
                    spinner: [ 'pri-f-sel' ],
                };
        }
    },
    props: {
        label: [ String ],
    },
    methods: {},
};
</script>

<style lang="scss" module>
.root {
  position: relative;
  box-sizing: border-box;
  min-height: 8em;
  min-width: 16em;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;

  .spinner {
    width: 1em;
    height: 1em;
    display: block;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>


```
