<template>
    <div ot class="ot-table" :class="$style.root" :adapter="adapter">
        <div :class="$style.header" :style="_headerStyle">
            <slot name="header">
                <ot-table-header>
                    <template v-if="$scopedSlots['header-item']" slot-scope="{ id, index, item }">
                        <slot name="header-item" :id="id" :index="index" :item="item"></slot>
                    </template>
                </ot-table-header>
            </slot>
        </div>
        <div :class="$style.body" :style="_bodyStyle">
            <slot name="body">
                <ot-table-body :list="list" :stripe="stripe">
                    <template v-if="$scopedSlots['body-item']" slot-scope="{ id, index, item ,rowItem, rowIndex }">
                        <slot name="body-item" :id="id" :index="index" :item="item" :rowItem="rowItem" :rowIndex="rowIndex"></slot>
                    </template>
                </ot-table-body>
            </slot>
        </div>
        <div :class="$style.footer" :style="_footerStyle">
            <slot name="footer">
                <ot-table-footer>
                </ot-table-footer>
            </slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-table',
    provide() {
        return {
            $OtTable: this,
        };
    },
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
        // 是否为斑马纹 table
        stripe: [ Boolean ],
        height: [ String, Number ],
        maxHeight: [ String, Number ],
        headerStyle: {
            type: Function,
            default() {
                return {};
            },
        },
        bodyStyle: {
            type: Function,
            default() {
                return {};
            },
        },
        // 自适应宽度
        adapter: {
            tyep: [ Boolean ],
            default: true,
        },
    },
    data() {
        return {
            columns: {}, // 所有列
            members: {},

            allWidth: 0, // 总宽度
        };
    },
    computed: {
        _headerStyle() {
            const style = {};
            if (this.allWidth > 0 && !this.adapter) {
                style.width = this.allWidth + 'px';
            }
            return style;
        },
        _bodyStyle() {
            const style = {};
            if (this.height) {
                if (typeof this.height === 'number') {
                    style.height = this.height + 'px';
                } else {
                    style.height = this.height;
                }
            }
            if (this.maxHeight) {
                if (typeof this.maxHeight === 'number') {
                    style.maxHeight = this.maxHeight + 'px';
                } else {
                    style.maxHeight = this.maxHeight;
                }
            }
            if (this.allWidth > 0 && !this.adapter) {
                style.width = this.allWidth + 'px';
            }
            return style;
        },
        _footerStyle() {
            const style = {};
            if (this.allWidth > 0 && !this.adapter) {
                style.width = this.allWidth + 'px';
            }
            return style;
        },
    },
    methods: {
        registerMembers(name, member) {
            this.members[name] = member;
        },
        unregisterMembers(name) {
            delete this.members[name];
        },
        addColumn(name, column) {
            this.columns[name] = column;
        },
        removeColumn(name) {
            delete this.columns[name];
        },
        getAllColumns() {
            return Object.assign({}, this.columns);
        },
        calcAllWidth() {
            let width = 0;
            const columns = this.getAllColumns();
            Object.keys(columns).forEach(name => {
                width += columns[name] && parseInt(columns[name].width) || 0;
            });
            return width;
        },
        notifyAll() {
            this.allWidth = this.calcAllWidth();
            const members = this.members;
            Object.keys(members).forEach(name => {
                const member = members[name];
                member.notify && member.notify();
            });
        },
    },
    mounted() {
        this.notifyAll();
    },
    beforeUpdate() {
        this.notifyAll();
    },
};
</script>

<style lang="scss" module>
.root {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;
    overflow: auto;
    width: 100%;
    height: 100%;

    &:before {
        content: "";
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
    }

    .header {
        overflow: auto;
    }

    .body {
        overflow: auto;
    }

    .footer {
        overflow: auto;
    }
}
</style>
