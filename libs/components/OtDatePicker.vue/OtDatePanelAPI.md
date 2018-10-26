# OtDatePanel API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| model | - | String | '' |
| weeksLabel | - | Array | ()=> {   return ['日', '一', '二', '三', '四', '五', '六']; } |
| format | - | String | 'YYYY-MM-DD' |
| week | - | Boolean | - |
| footer | - | Boolean | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update | - | (currentWeek[0].format(_format)): Void | - |
| @change | - | (currentWeek): Void | - |
| @update | - | (currentDate.format(_format)): Void | - |
| @change | - | (currentDate): Void | - |
| @ok | - | (undefined): Void | - |

