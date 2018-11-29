# OtUploadAvatar API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| model | 返回数据 | Object | - |
| url | ***必填***, 上传地址 | String | - |
| width | 宽度大小 | String,Number | 100 |
| height | 高度大小 | String,Number | 100 |
| circle | 圆形 | Boolean | - |
| image | 图片URL | String | '' |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update | - | (value): Void | - |
| @success | - | (jsonData, field): Void | - |
| @error | - | (status, field): Void | - |

