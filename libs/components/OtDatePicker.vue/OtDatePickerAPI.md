# OtDatePicker API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| weeksLabel | 日历中星期Label文字内容 | Array | ()=> {   return ['日', '一', '二', '三', '四', '五', '六']; } |
| placeholder | 选择框提示内容 | String | '请选择' |
| readonly | 是否为只可读 | Boolean | - |
| clearable | 清除内容按钮 | Boolean | - |
| format | 输出文本格式化 | String | 'YYYY-MM-DD' |
| week | 是否为选择 周 . | Boolean | - |
| footer | 是否显示底部面板 | Boolean | - |
| model | 数据源 `v-model` | String | '' |
| icon | 展示的图标 | String | 'clock-o' |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @change |  改变事件 | (value): Void | - |
| @update |  `v-model` 数据更新 | (selectValue): Void | - |

