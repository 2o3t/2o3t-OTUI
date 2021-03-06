# OtRadioButton API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| value | ***必填***, 数据源 | String | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @click | - | (e): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | 有 icon 时 | - | - |
| default | 无 icon 时 | - | - |

