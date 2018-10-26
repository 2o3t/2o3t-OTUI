# OtPagination API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| currentPage | - | Number | 1 |
| pageSize | - | Number | 10 |
| pageSizes | - | Array | ()=> {   return [10, 20, 30, 40, 50, 100]; } |
| total | - | Number | - |
| pagerCount | - | Number | 7 |
| disabled | - | Boolean | false |
| background | - | Boolean | false |
| showTotal | - | Boolean | false |
| showJumper | - | Boolean | false |
| showPageSizes | - | Boolean | false |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update | - | (current): Void | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| total | 总 | :total="total" | - |
| prev | - | - | - |
| next | - | - | - |
| jumper | 前往 | :current="current" :jump="handleJumper" | - |

