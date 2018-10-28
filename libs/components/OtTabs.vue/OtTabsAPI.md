# OtTabs API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| list | ***必填***, - | Array | - |
| select | - | Object | - |
| clearable | - | Boolean | - |
| offset | - | Number,String | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @action | - | ('active', tab): Void | - |
| @action | - | ('close', tab): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | - | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefix | - | - | - |
| title | - | :item="item" :index="index" | - |

