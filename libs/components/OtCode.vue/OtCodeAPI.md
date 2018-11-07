# OtCode API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| value | 源代码文本 | String | - |
| lang | 预览类型标识 | String | 'javascript' |
| copy | 是否显示 `复制代码` 按钮 | Boolean | true |
| showLang | 显示语言类型 | Boolean | true |
| tipTime | 设置提示框显示时长 ms | Number | 2000 |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @onCopy |  代码复制事件, `content` 为源代码. | (content): Void | - |
| @onDismiss |  提示框消失事件 | ( ): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | code 内容 | - | - |

