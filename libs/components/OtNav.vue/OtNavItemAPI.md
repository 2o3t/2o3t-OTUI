# OtNavItem API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| icon | 标题左侧图标 | String | - |
| index | 唯一标志, 与 menu 的 model 对应, 可以是 router 路径 | String | - |
| disabled | 是否禁用 | Boolean | false |
| href | 跳转路径 | String | null |
| to | 路由跳转, 具体参照 ot-link | String,Object | null |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | 不支持 collapse 的标题容器 | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 自定义标题容器 |  | - |

