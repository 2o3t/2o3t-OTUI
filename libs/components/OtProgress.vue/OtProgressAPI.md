# OtProgress API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| type | **["line", "circle"]**, 进度条类型 | String | 'line' |
| percentage | ***必填***, **[0, 100]**, 百分比 | Number | 0 |
| status | **["success", "exception"]**, 进度条当前状态 | String | - |
| strokeWidth | 进度条的宽度，单位 px | Number | 6 |
| textInside | 进度条显示文字内置在进度条内（只在 type=line 时可用） | Boolean | false |
| width | 环形进度条画布宽度（只在 type=circle 时可用） | Number | 126 |
| showText | 是否显示进度条文字内容 | Boolean | true |
| animation | 进度条交互动画, 只支持 line 模式 | Boolean | true |

