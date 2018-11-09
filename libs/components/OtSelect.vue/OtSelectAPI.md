# OtSelect API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| placeholder | - | String | - |
| type | - | String | 'text' |
| disabled | - | Boolean | - |
| model | - | String,Number | '' |
| name | - | String | - |
| readonly | - | Boolean | - |
| list | - | Array | - |
| direction | - | String | - |
| clearable | - | Boolean | - |
| icon | - | String | - |
| custom | 不限制下拉框大小, 用于组件扩展 | Boolean | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @close | - | ( ): Void | - |
| @update | - | (value): Void | - |
| @update | - | (item): Void | - |
| @select | - | (item): Void | - |
| @update | - | (value): Void | - |
| @update | - | (''): Void | - |
| @show | - | ( ): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | - | - | - |
| default | - | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| up | - | - | - |
| item | - | :item="item" | - |
| down | - | - | - |
| item | - | :item="item" | - |

