<template>
    <table :class="$style.root">
        <colgroup>
            <col v-for="(name, index) in columns"
                :key="`ot_table_cell_body_${name}_${index}`"
                :name="`ot_table_cell_body_${name}`"
                :width="calcWidth(name)">
        </colgroup>
        <tbody :style="getBodyStyle()">
            <tr :class="$style.row" v-for="(item, index) in _list" :key="index" :stripe="stripe">
                <td v-for="(name, index) in columns"
                    :style="getBodyCellStyle(name)"
                    :key="`ot_table_cell_body_${name}_${index}`">
                    <slot :id="name" :index="index" :label="item[name]">
                        <div>
                            {{ item[name] }}
                        </div>
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
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
            return column.labelWidth;
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
                background-color: #aaaaaa;
            }
        }
    }
}
</style>
