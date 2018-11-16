# OtColorCard API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| name | 颜色名称 | String | 'Primary Color' |
| value | 主颜色值, 十六进制 | String,Object | '#207FF6' |
| white | 叠加白色基色 | String | '#FFFFFF' |
| black | 叠加黑色基色 | String | '#000000' |
| whiteArray | 白色百分比池子 | Array,Object,String | ()=> {   return [60, 40, 20]; } |
| blackArray | 黑色百分比池子 | Array,Object,String | ()=> {   return [10, 20, 40, 60]; } |
| horizontal | 水平样式展示 | Boolean | - |
| autoFont | 自动控制字体颜色 | Boolean | false |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @onCopy |  复制事件, `content` 为颜色值. | (content): Void | - |

