<template>
    <table :class="$style.root">
        <colgroup>
            <col v-for="(name, index) in columns"
                :key="`ot_table_header_cell_${name}_${index}`"
                :name="`ot_table_header_cell_${name}`"
                :width="calcWidth(name)">
        </colgroup>
        <thead :style="getHeaderStyle()">
            <tr :class="$style.row">
                <th v-for="(name, index) in columns"
                    :style="getHeadCellStyle(name)"
                    :key="`ot_table_cell_header_${name}_${index}`">
                    <slot :id="name" :index="index" :label="getLabel(name)">
                        <div>
                            {{ getLabel(name) }}
                        </div>
                    </slot>
                </th>
            </tr>
        </thead>
    </table>
</template>

<script>
export default {
    name: 'ot-table-header',
    inject: [ '$OtTable' ],
    props: {

    },
    data() {
        return {
            columns: [],
            _columns: {},
        };
    },
    methods: {
        calcWidth(name) {
            const column = this._columns[name];
            return column.labelWidth;
        },
        getLabel(name) {
            const column = this._columns[name];
            return column ? column.label : '';
        },
        getHeaderStyle() {
            if (this.$OtTable && this.$OtTable.headerStyle) {
                return this.$OtTable.headerStyle();
            }
            return {};
        },
        getHeadCellStyle(name) {
            const column = this._columns[name];
            return column ? column.headCellStyle(name) : {};
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
            return this.$OtTable.registerMembers('header', this);
        }
    },
    beforeDestroy() {
        if (this.$OtTable) {
            return this.$OtTable.unregisterMembers('header');
        }
    },
};
</script>

<style lang="scss" module>
.root {
    text-align: left;
    user-select: none;
}
</style>

