export default {
    LABEL: 'Pagination 分页',
    DESC: '当数据量过多时，使用分页分解数据。',
    COMPONENTS: {
        Base: {
            LABEL: '基础用法',
            DESC: '页数较少时会全部展示, 大于 7 页时会有收缩效果',
        },
        PagerCount: {
            LABEL: '设置最大页码按钮数',
            DESC: '默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过 pager-count 属性可以设置最大页码按钮数。',
        },
        Round: {
            LABEL: '圆角',
            DESC: '',
        },
        Background: {
            LABEL: '带有背景色的分页',
            DESC: '提供边框和背景的样式',
        },
        PageSizes: {
            LABEL: '每页显示条目个数',
            DESC: '可以显示和调整每页显示条数. 默认为 [ 10, 20, 30, 40, 50, 100 ]',
        },
        Disabled: {
            LABEL: '禁用状态',
            DESC: '',
        },
        Total: {
            LABEL: '总数',
            DESC: '通过 show-total 显示总条目数',
        },
        Size: {
            LABEL: '大小',
            DESC: '提供了 mini、small、normal、big 四种尺寸.',
        },
        Jumper: {
            LABEL: '显示跳转到',
            DESC: '通过 show-jumper 提供跳转到操作功能.',
        },
        AllFunc: {
            LABEL: '完整功能',
            DESC: '一个完整功能的案例.',
        },
    },
};
