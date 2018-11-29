# OtInput API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| placeholder | 提示信息 | String | - |
| type | input 类型 | String | 'text' |
| disabled | 禁用状态 | Boolean | - |
| model | v-model 数据源 | String,Number | - |
| name | name 属性 | String | - |
| clearable | 是否可清除按钮 | Boolean | - |
| icon | 前置图标样式 | String | - |
| cols | textarea 的 cols | Number,String | - |
| rows | textarea 的 rows | Number,String | - |
| readonly | 是否只读内容 | Boolean | - |
| autocomplete | 同原生 | String,Boolean | - |
| maxlength | 最大长度 | Number,String | - |
| fixable | 是否自动适应圆角 | Boolean | true |
| circle | 圆形边框 | Boolean | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update | - | (value): Void | - |
| @clear | - | (e): Void | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefix | - | - | - |
| suffix | - | - | - |

