# OtTimePicker API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| model | 数据源 `v-model` | String,Number,Array | ()=> {   return ''; } |
| options | 固定时间点选项 | Object | - |
| format | 时间格式化输出 | String | 'HH:mm:ss' |
| placeholder | 输入框的提示文字内容 | String | '请选择' |
| doublePlaceholder | double 模式下的文字提示内容 | String | - |
| readonly | 输入框只读 | Boolean | - |
| double | double 模式 | Boolean | - |
| clearable | 是否带有清除按钮 | Boolean | false |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update |  double 模式下 `v-model` 数据源更新 | ([ selectValue, selectDoubleValue ]): Void | - |
| @update |  `v-model` 数据源更新 | (selectValue): Void | - |

