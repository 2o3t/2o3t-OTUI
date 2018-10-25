
# Transfer 穿梭框

双栏穿梭选择框。
用直观的方式在两栏中移动元素，完成选择行为。
选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。

## 基础用法

> Base

最基本的用法.

## 定义名称

> Labels

提供列表名称自定义(只支持两位数组), 并支持全选功能.

## 搜索提示

> Search

提供列表搜索功能, 可通过 `placeholders` 增加提示语.

## 圆角

> Round

圆角看起来更舒服吧.

## 禁用状态

> Disabled



## 大小

> Size

提供了 mini、small、normal、big 四种尺寸.

## 单组件应用

> TransferList

提供单独列表的使用, 可通过 `top` 隐藏顶部, `label` 改变’全选/反选‘字样, `search` 因此搜索功能等.


### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 数据源，其中的数据将会被渲染到左边一栏中 | Array | [] |
| v-model | 右边选择的结果双向绑定。 | string[] | [] |
| ~~disabled~~ | 是否禁用 | boolean | false |
| labels | 接收两个 `string` 参数。 | string[] | [ '全选/反选', '全选/反选' ] |
| placeholders | 搜索框提示语, 接收两个 `string` 参数。 | string[] | [ '请输入', '请输入' ] |
| search | 开启搜索框 | boolean | false |
| top | 顶部UI | boolean | false |
| @change | 选中项发生改变时的回调函数 | (event: Event): void | - |
