# OtMarkdown API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| content | html template 内容 | String | null |
| dangerouslyUseHTMLString | 是否直接传入 HTML 片段, 危险 | Boolean | false |
| customClass | 自定义 class | String | '' |
| data | 外部传入依赖的 data 数据 | Object | ()=> {   return {}; } |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | 内容 (不推荐使用) | - | - |

