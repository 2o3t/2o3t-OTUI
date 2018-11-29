<template>
    <ot-table-ui :class="$style.root">
        <colgroup>
            <col v-for="(name, index) in columns"
                :key="`ot_table_cell_body_${name}_${index}`"
                :name="`ot_table_cell_body_${name}`"
                :width="calcWidth(name)">
        </colgroup>
        <tbody :style="getBodyStyle()">
            <tr :class="$style.row" v-for="(item, rowIndex) in _list" :key="rowIndex" :stripe="stripe">
                <td v-for="(name, index) in columns" :class="$style.cell"
                    :style="getBodyCellStyle(name)"
                    :key="`ot_table_cell_body_${name}_${index}`">
                    <slot :id="name" :index="index" :item="item[name]" :rowItem="item" :rowIndex="rowIndex">
                        <div :class="$style.cell">
                            {{ item[name] }}
                        </div>
                    </slot>
                </td>
            </tr>
        </tbody>
    </ot-table-ui>
</template>

<script>
export default {
    name: 'ot-table-body',
    inject: [ '$OtTable' ],
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
        stripe: [ Boolean ],
    },
    data() {
        return {
            columns: [],
            _columns: {},
        };
    },
    computed: {
        _list() {
            return this.list;
        },
    },
    methods: {
        calcWidth(name) {
            const column = this._columns[name];
            return column.width;
        },
        getBodyStyle() {
            if (this.$OtTable && this.$OtTable.bodyStyle) {
                return this.$OtTable.bodyStyle();
            }
            return {};
        },
        getBodyCellStyle(name) {
            const column = this._columns[name];
            return column ? column.bodyCellStyle(name) : {};
        },
        notify() {
            if (this.$OtTable) {
                this._columns = this.$OtTable.getAllColumns();
                this.columns = Object.keys(this._columns);
            }
        },
    },
    created() {
        if (this.$OtTable) {
            return this.$OtTable.registerMembers('body', this);
        }
    },
    beforeDestroy() {
        if (this.$OtTable) {
            return this.$OtTable.unregisterMembers('body');
        }
    },
};
</script>

<style lang="scss" module>
.root {

    .row {

        &[stripe] {
            &:nth-child(odd) {

            }
            &:nth-child(even) {
                background-color: #fafafa;
            }
        }

        .cell {
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: normal;
            word-break: break-all;
        }
    }
}
</style>
