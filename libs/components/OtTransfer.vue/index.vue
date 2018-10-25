<template>
    <div ot class="ot-transfer" :class="$style.root">
        <ot-transfer-list :class="$style.list" :round="round"
            :label="labels[0]" :search="search"
            :placeholder="placeholders[0]" :top="top"
            :list="_leftList" v-model="leftSelectItems" @change="handleChange">
        </ot-transfer-list>
        <div :class="$style.middle">
            <ot-button :disabled="leftSelectItems.length <= 0" :class="$style.btn" :theme="$otTheme" icon="angle-right" circle @click="handleSwitchRight"></ot-button>
            <ot-button :disabled="rightSelectItems.length <= 0" :class="$style.btn" :theme="$otTheme" icon="angle-left" circle @click="handleSwitchLeft"></ot-button>
        </div>
        <ot-transfer-list :class="$style.list" :round="round"
            :label="labels[1]" :search="search"
            :placeholder="placeholders[1]" :top="top"
            :list="_rightList" v-model="rightSelectItems" @change="handleChange">
        </ot-transfer-list>
    </div>
</template>

<script>
import isObject from 'lodash/isObject.js';
import isUndefined from 'lodash/isUndefined.js';
export default {
    name: 'ot-transfer',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
        model: {
            type: Array,
            default() {
                return [];
            },
        },
        labels: {
            type: Array,
            default() {
                return [];
            },
        },
        placeholders: {
            type: Array,
            default() {
                return [];
            },
        },
        search: {
            type: Boolean,
            default: false,
        },
        top: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            leftList: [],
            rightList: [],
            leftSelectItems: [],
            rightSelectItems: [],
        };
    },
    watch: {
        list(newV) {
            this.initKey(newV);
        },
    },
    computed: {
        _leftList() {
            return this.leftList;
        },
        _rightList() {
            return this.rightList;
        },
    },
    methods: {
        initKey(array) {
            this.leftList.length = 0;
            this.rightList.length = 0;
            this.leftSelectItems.length = 0;
            this.rightSelectItems.length = 0;
            this.leftList = array.map((item, _key) => {
                if (isObject(item)) {
                    return {
                        _key,
                        name: isUndefined(item.name) ? item.value : item.name,
                        value: isUndefined(item.value) ? item.name : item.value,
                        ...item,
                    };
                }
                return {
                    _key,
                    name: item,
                    value: item,
                };
            });
        },
        handleSwitchRight() {
            // left --> right
            this.leftList = this._leftList.filter(n => {
                if (this.leftSelectItems.includes(n.value)) {
                    this.rightList.push(n);
                    return false;
                }
                return true;
            });
            this.sortRightList();
            this.updateModel();
        },
        handleSwitchLeft() {
            this.rightList = this._rightList.filter(n => {
                if (this.rightSelectItems.includes(n.value)) {
                    this.leftList.push(n);
                    return false;
                }
                return true;
            });
            this.sortLeftList();
            this.updateModel();
        },
        sortRightList() {
            this.rightList = this._rightList.sort((a, b) => {
                return a._key - b._key;
            });
        },
        sortLeftList() {
            this.leftList = this._leftList.sort((a, b) => {
                return a._key - b._key;
            });
        },
        handleChange(e) {
            this.$emit('change', e);
        },
        updateModel() {
            this.$emit('update', this.rightList);
        },
    },
    created() {
        this.initKey(this.list);
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;

    @include __ot_size__;

    .list {
        display: inline-block;
        vertical-align: middle;
    }

    .middle {
        display: inline-block;
        padding: 1em;
        vertical-align: middle;

        .btn {
            display: block;
            margin: 1em 0;
        }
    }
}
</style>

