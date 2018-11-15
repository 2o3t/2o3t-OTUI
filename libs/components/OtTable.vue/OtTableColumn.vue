<script>
export default {
    name: 'ot-table-column',
    provide() {
        return {
            $OtTableColumn: this,
        };
    },
    render() {
        return null;
    },
    inject: [ '$OtTable' ],
    props: {
        // 维一标识
        name: {
            type: String,
            required: true,
        },
        // 列名
        label: [ String ],
        // 列宽
        width: {
            type: [ String ],
            default: '150px',
        },
        // 文字对齐方式
        align: {
            type: String,
            default: 'left',
        },
        headCellStyle: {
            type: Function,
            default() {
                return {};
            },
        },
        bodyCellStyle: {
            type: Function,
            default() {
                return {};
            },
        },
    },
    data() {
        return {

        };
    },
    created() {
        if (this.$OtTable) {
            this.$OtTable.addColumn(this.name, this);
        }
    },
    beforeDestroy() {
        if (this.$OtTable) {
            this.$OtTable.removeColumn(this.name, this);
        }
    },
};
</script>
