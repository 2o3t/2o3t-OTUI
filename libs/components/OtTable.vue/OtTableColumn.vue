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
        name: {
            type: String,
            required: true,
        },
        label: [ String ],
        labelWidth: {
            type: [ String ],
            default: '150px',
        },
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
