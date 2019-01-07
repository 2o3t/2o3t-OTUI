# OtPagination API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 可选, 更改主题颜色, 支持 `light`, `dark` | String | light |
| size | 可选, 选择控件大小, 可选参数 `mini`, `small`, `normal`, `big` | String | normal |
| color | 可选, 更改主题色, 可选参数 `default`, `primary`, `success`, `warning`, `danger`, `info` | String | default |
| border | 可选(非必支持), UI增加边框 | Boolean | false |
| round | 可选(非必支持), UI边框圆角 | Boolean | false |
| model | 当前页数 | Number | 1 |
| pageSize | 每页显示条目个数 | Number | 10 |
| pageSizes | 每页显示条目个数 | Array | ()=> {   return [10, 20, 30, 40, 50, 100]; } |
| total | ***必填***, 总条目数 | Number | - |
| pagerCount | 页码按钮的数量，当总页数超过该值时会折叠 | Number | 7 |
| disabled | 禁用 | Boolean | false |
| background | 是否带有背景, 只改变UI | Boolean | false |
| showTotal | 显示总页数 | Boolean | false |
| showJumper | 显示控制跳转页输入框 | Boolean | false |
| showPageSizes | 显示每页展示的数量选择器 | Boolean | false |

## Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| @update |  更新 `v-model` 当前页数 | (current): Void | - |
| @changePage |  当前页面发生改变事件 | (current): Void | - |
| @jumperEvent |  jumper事件 | (item): Void | - |
| @selectPageSize |  切换每页显示条目个数事件 | (item): Void | - |

## ScopedSlots

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| total | 总条数显示容器 | :total="total" | - |
| prev | 上一页的箭头容器 | - | - |
| next | 下一页的箭头容器 | - | - |
| jumper | 跳转页面容器 | :current="current" :jump="handleJumper" | - |

