# OtForm API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| action | 原生 action | String | - |
| autocomplete | 原生 autocomplete | String | - |
| enctype | 原生 enctype | String | - |
| method | 原生 method | String | - |
| name | 原生 name | String | - |
| target | 原生 `target` 可为 `_self`, `_blank` | String | - |
| model | `v-model` 绑定属性 | Object | ()=> {   return {}; } |
| rules | 验证规则 | Object | ()=> {   return {}; } |
| horizontal | 表单展示方向 | Boolean | - |
| submitLabel | 提交按钮显示文字, false 为不显示 | String,Boolean | '确认' |
| resetLabel | 重置按钮显示文字, false 为不显示 | String,Boolean | '重置' |
| cancelLabel | 取消按钮显示文字, false 为不显示 | String,Boolean | '取消' |
| labelPosition | Label 的显示位置, 可选 `left`, `right`, `center`, `top` | String | 'right' |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update |  与 `v-model` 互动更新数据 | (model): Void | - |
| @event |  按钮点击动作事件, `action` 是行为动作 | (action, model): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | - | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| submit | - | :validate="validate" :reset="resetFields" | - |

