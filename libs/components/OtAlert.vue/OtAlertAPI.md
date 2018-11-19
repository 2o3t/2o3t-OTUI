# OtAlert API

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
| type | **[ 'success', 'warning', 'info', 'error', 'question' ]**, 图标样式 | String | 'info' |
| closable | 是否可关闭 | Boolean | true |
| closeText | 关闭按钮自定义文本 | String | '' |
| showIcon | 是否显示图标 | Boolean | - |
| center | 是否内容居中 | Boolean | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @close |  关闭alert时触发的事件 | ( ): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | Description | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题的内容 | - | - |

