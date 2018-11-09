# OtTip API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| disabled | 禁用 | Boolean | false |
| manual | 手动操作 | Boolean | false |
| popperClass | 自定义 class | String | '' |
| placement | **可选参数 [ auto, top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end ]**, 方向 | String | 'auto' |
| value | 控制显示 | Boolean | - |
| enterable | 鼠标是否可进入到内容中 | Boolean | true |
| offsetX | X偏移量 | Number | 0 |
| offsetY | Y偏移量 | Number | 0 |
| transition | - | String | 'opacity .3s' |
| arrow | 是否有箭头 | Boolean | false |
| arrowAttrs | 箭头的属性值 | Object | ()=> {   return {}; } |
| clickable | 是否可点击, 必须 manual= true | Boolean | false |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update | - | (true): Void | - |
| @change | - | (bShown): Void | - |
| @update | - | (false): Void | - |
| @change | - | (bShown): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | - | - | - |

