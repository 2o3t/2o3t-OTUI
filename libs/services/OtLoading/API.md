# OtLoading Service API

## 实例方法

调用 `this.$loading(options)` 会返回当前 OtLoading 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 方法名 | 说明 |
| --- | --- |
| close() | 关闭当前的 OtLoading |

## Options

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| target | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点 | object/string | — | document.body |
| body | 同 v-loading 指令中的 body 修饰符 | boolean | — | false |
| fullscreen | 同 v-loading 指令中的 fullscreen 修饰符 | boolean | — | true |
| lock | 同 v-loading 指令中的 lock 修饰符 | boolean | — | false |
| text | 显示在加载图标下方的加载文案 | string | — | — |
| spinner | 自定义加载图标类名 | string | — | — |
| background | 遮罩背景色 | string | — | — |
| customClass | Loading 的自定义类名 | string | — | — |

