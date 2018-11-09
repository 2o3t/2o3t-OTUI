<!-- @api: OtPagination.vue/OtPaginationAPI.md -->

# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

> Base

页数较少时会全部展示, 大于 7 页时会有收缩效果

## 设置最大页码按钮数

> PagerCount

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过 `pager-count` 属性可以设置最大页码按钮数。

## 圆角

> Round

提供圆角UI展示.

## 带有背景色的分页

> Background

提供边框和背景的样式

## 每页显示条目个数

> PageSizes

可以显示和调整每页显示条数. 默认为 [ 10, 20, 30, 40, 50, 100 ]

## 禁用状态

> Disabled

禁止操作.

## 总数

> Total

通过 show-total 显示总条目数

## 大小

> Size

提供了 `mini`、`small`、`normal`、`big` 四种尺寸.

## 显示跳转到

> Jumper

通过 show-jumper 提供跳转到操作功能.

## 完整功能

> AllFunc

一个完整功能的案例.
