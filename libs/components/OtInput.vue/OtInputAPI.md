# OtInput API

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
| model | - | String,Number | - |
| name | - | String | - |
| clearable | - | Boolean | - |
| icon | - | String | - |
| cols | - | Number,String | - |
| rows | - | Number,String | - |
| readonly | - | Boolean | - |
| autocomplete | - | String,Boolean | - |
| maxlength | - | Number,String | - |
| fixable | - | Boolean | true |
| circle | - | Boolean | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update | - | (v): Void | - |
| @update | - | (e.target.value): Void | - |
| @update | - | (''): Void | - |
| @clear | - | (e): Void | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefix | - | - | - |
| suffix | - | - | - |

