<template>
    <div ot v-ot-bind="$otColors" class="ot-list" :size="$otSize"
        :class="$style.root" :round="round">
        <div ot v-ot-bind="$otColors.top" :class="$style.top" v-if="top" :size="$otSize" :round="round">
            <slot name="top">
                <ot-checkbox :theme="$otTheme" :value="true" v-model="checkAll"
                    :size="$otSize" :round="round"
                    @change="handleAllChange" :indeterminate="indeterminate">
                    <span>{{ label }}</span>
                </ot-checkbox>
                <span ot v-ot-bind="$otColors.count" :class="$style.count">{{selectItems.length}}/{{_list.length}}</span>
            </slot>
        </div>
        <ot-line v-if="top"></ot-line>
        <div :class="$style.search" v-if="search">
            <ot-input v-model="searchInput" :placeholder="placeholder" clearable icon="search"
                :size="$otSize" circle
                @update="handleInputChange">
            </ot-input>
        </div>
        <div ot :class="$style.list">
            <slot :selectItems="selectItems" :all="checkAll" :list="_list">
                <ot-checkbox-group :class="$style.group" :theme="$otTheme" v-model="selectItems"
                    :all="checkboxAll" @changeStatus="handleChangeStatus" :size="$otSize" :round="round">
                    <ot-checkbox :class="$style.item" :theme="$otTheme" v-for="(item, index) in _list" :key="index"
                        :value="item.value" :disabled="item.disabled">
                        <span>{{ item.name }}</span>
                    </ot-checkbox>
                </ot-checkbox-group>
            </slot>
        </div>
    </div>
</template>

<script>
import isObject from 'lodash/isObject.js';
import isUndefined from 'lodash/isUndefined.js';
import _difference from 'lodash/difference.js';
export default {
    name: 'ot-list',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        top: {
            type: Boolean,
            default: true,
        },
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
        label: {
            type: String,
            default: '全选/反选',
        },
        placeholder: {
            type: String,
            default: '请输入',
        },
        search: {
            type: Boolean,
            default: true,
        },
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    top: {
                        normal: [ 'def-f', 'def-bg' ],
                    },
                    count: {
                        normal: [ 'grey-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-b' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    top: {
                        normal: [ 'def-f', 'def-bg' ],
                    },
                    count: {
                        normal: [ 'grey-f' ],
                    },
                };
        }
    },
    data() {
        return {
            checkAll: false,
            checkboxAll: false,
            indeterminate: false,
            selectItems: [],
            currentList: [],
            filterList: [],
            searchInput: '',
        };
    },
    watch: {
        selectItems(newV) {
            this.$emit('update', newV);
        },
        list(newV) {
            this.initKey(newV);
        },
    },
    computed: {
        _list() {
            return this.filterList;
        },
    },
    methods: {
        initKey(array) {
            const list = array.map(item => {
                if (isObject(item)) {
                    return {
                        name: isUndefined(item.name) ? item.value : item.name,
                        value: isUndefined(item.value) ? item.name : item.value,
                        ...item,
                    };
                }
                return {
                    name: item,
                    value: item,
                };
            });
            this.fixSelectItems(list);
            this.currentList = list;
            this.filterList = list;
        },
        fixSelectItems(list) {
            // 移除 selectItems 中错误的数据
            const flatten = list.map(item => {
                return item.value;
            });
            const remove = _difference(this.selectItems, flatten);
            this.selectItems = this.selectItems.filter(item => {
                return !remove.includes(item);
            });
        },
        handleAllChange() {
            this.checkboxAll = !this.checkboxAll;
        },
        handleChangeStatus(status/* , val*/) {
            switch (status) {
                case 'half':
                    this.indeterminate = true;
                    this.checkAll = true;
                    break;
                case 'all':
                    this.indeterminate = false;
                    this.checkboxAll = true;
                    this.checkAll = true;
                    break;
                default:
                    this.indeterminate = true;
                    this.checkboxAll = false;
                    this.checkAll = false;
                    break;
            }

            this.$emit('change', this.selectItems);
        },
        handleInputChange() {
            const searchInput = this.searchInput;
            if (searchInput.length) {
                this.filterList = this.currentList.filter(item => {
                    return item.name ? item.name.indexOf(searchInput) >= 0 : false;
                });
            } else {
                this.filterList = this.currentList;
            }
            this.fixSelectItems(this.filterList);
        },
    },
    created() {
        this.initKey(this.list);
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    position: relative;
    width: 14em;
    margin: 0;
    padding: 0;
    box-sizing: content-box;

    @include __ot_size__;

    &[round] {
        @include __ot_round__;
    }

    $padding-offset: 1em;

    .top {
        display: block;
        position: relative;
        height: 3em;
        line-height: 3em;
        box-sizing: border-box;
        padding-left: $padding-offset;

        &[round] {
            @include __ot_round__;
        }

        .count {
            font-size: 0.8em;
            float: right;
            padding-right: 0.5em;
        }
    }

    .search {
        padding: 0.6em 1.2em 0;
    }

    .list {
        position: relative;
        height: 20em;
        overflow-y: auto;
        overflow-x: hidden;

        .group {
            display: block;
            clear:both;
            padding: 0.4em 0;
            box-sizing: border-box;

            .item {
                display: block;
                padding-left: $padding-offset;
                float: none;
                margin: 0;
            }
        }
    }
}
</style>

