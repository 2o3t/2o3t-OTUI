# OtSlider API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| model | ***必填***, - | Number,Array | - |
| disabled | - | Boolean | - |
| step | - | Number | 0 |
| showStep | - | Boolean | - |
| range | - | Boolean | - |
| vertical | - | Boolean | - |
| min | - | Number | 0 |
| max | - | Number | 100 |
| tip | - | Boolean | true |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update |  range 模式下, 更新 v-model 的值为两位数组 | ([ one, two ]): Void | - |
| @update |  更新 v-model 的值 | (one): Void | - |

