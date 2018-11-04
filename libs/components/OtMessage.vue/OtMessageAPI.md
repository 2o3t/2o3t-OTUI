# OtMessage API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| title | 提示标题 | String | '' |
| description | 辅助性文字。也可通过默认 slot 传入 | String | '' |
| type | **可选参数 [ `success`, `warning`, `info`, `error`, `question` ]**, 图标样式 | String | 'info' |
| closable | 是否显示关闭按钮 | Boolean | true |
| closeText | 关闭按钮自定义文本 | String | '' |
| showIcon | 是否显示图标 | Boolean | true |
| center | 是否内容居中 | Boolean | false |
| message | 允许使用 html 文本内容, 或者使用 VNode | String,VNode | '' |
| icon | 自定义图标的类名，会覆盖 `type` | String | '' |
| customClass | 自定义 class | String | '' |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | Number | 3000 |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | Function | null |
| position | **可选参数 [ `left`, `right`, `center` ]**, 消息框显示位置 | String | 'center' |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | Description | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题的内容 | - | - |

