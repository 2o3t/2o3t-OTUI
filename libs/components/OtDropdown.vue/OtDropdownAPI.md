# OtDropdown API

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
| placement | **可选参数 [ auto, top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end ]**, 可固定方向 | String | 'auto' |
| offsetX | X偏移量 | Number | 0 |
| offsetY | Y偏移量 | Number | 0 |
| clickable | 是否可点击, 必须 manual= true | Boolean | false |
| width | 自定义宽度 | Number | 0 |
| textAlign | 文字内容方向 | String | 'center' |
| arrow | 是否有箭头 | Boolean | true |
| list | 下拉数据列表, { value } | Array | - |
| custom | 不限制下拉框大小, 用于组件扩展 | Boolean | - |
| value | 控制显示, v-model 数据源 | Boolean | - |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update |  与 v-model 数据源绑定, 更新当前状态 | (value): Void | - |
| @close |  当前 dropdown 关闭事件 | ( ): Void | - |
| @select |  选择某条item事件 | (item): Void | - |

## Slots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| default | - | - | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dropdown | 无 list 时, 下拉框容器 | - | - |
| item | 每条item进行修饰 | :item="item" | - |

