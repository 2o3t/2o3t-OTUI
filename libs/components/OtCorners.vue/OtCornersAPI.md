# OtCorners API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| title | 悬停提示文字 | String | 'View source on GitHub' |
| href | `a` 标签地址 | String | null |
| to | vue-router 路由, 跳转 名称 或 对象. | String,Object | null |
| replace | vue-router 跳转是否为 `replace`. | Boolean | false |
| append | vue-router 中 `append` 模式 | Boolean | false |
| target | 原生 `a` 标签中`target`属性 | String | "_self" |
| position | **[ `right`, `left`, `bottom-right`, `bottom-left` ]**, 可选择位置 | String | 'right' |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | 可自定义图标 | - | - |

