<template>
    <div ot class="ot-pagination" :size="$otSize" :class="$style.root">
        <span :class="$style.total" v-if="showTotal">
            <!-- 总 -->
            <slot name="total" :total="total">
                共 {{ total }} 条
            </slot>
        </span>
        <span :class="$style.pageSizeSelect" v-if="showPageSizes">
            <!-- 每页条数 -->
            <ot-select placeholder="请选择" :size="$otSize" :round="round"
                readonly :disabled="disabled"
                v-model="currentPageSize"
                :list="pageSizes">
            </ot-select>
        </span>
        <ul :class="$style.pager">
            <li ot v-bind="_itemUIColors" :class="$style.item" @click="handlePrevPage"
                :disabled="disabled || current === 1" :size="$otSize" :round="round">
                <slot name="prev">
                    <ot-icon icon="angle-left" :size="$otSize"></ot-icon>
                </slot>
            </li>
            <!-- 首页 -->
            <li ot v-bind="_itemUIColors" v-if="pageCount >= 1"
                :class="$style.item" :size="$otSize" :round="round"
                :selected="1 === current" :disabled="disabled"
                @click="handleSpecifyPage(1)">
                <span>1</span>
            </li>
            <li ot v-bind="_itemUIColors" v-if="shownPrevEllipsis" @click="handlePrevPrevPage"
                :class="$style.item" :size="$otSize" :round="round" :disabled="disabled"
                @mouseover="ellipsisPrevHover=true" @mouseout="ellipsisPrevHover=false">
                <span v-if="!ellipsisPrevHover">...</span>
                <ot-icon v-else icon="angle-double-left"></ot-icon>
            </li>
            <li ot v-bind="_itemUIColors" :class="$style.item" v-for="(item, index) in pageItem" :key="index" :size="$otSize" :round="round"
                :selected="(item + pageFirstIndex) === current" :disabled="disabled"
                @click="handleSpecifyPage(item + pageFirstIndex)">
                <span>{{ item + pageFirstIndex }}</span>
            </li>
            <li ot v-bind="_itemUIColors" v-if="shownNextEllipsis" @click="handleNextNextPage"
                :class="$style.item" :size="$otSize" :round="round" :disabled="disabled"
                @mouseover="ellipsisNextHover=true" @mouseout="ellipsisNextHover=false">
                <span v-if="!ellipsisNextHover">...</span>
                <ot-icon v-else icon="angle-double-right"></ot-icon>
            </li>
            <!-- 最后一页 -->
            <li ot v-bind="_itemUIColors" :class="$style.item" :size="$otSize" :round="round" v-if="pageCount > _pagerCount"
                :selected="pageCount === current" :disabled="disabled"
                @click="handleSpecifyPage(pageCount)">
                <span>{{ pageCount }}</span>
            </li>
            <li ot v-bind="_itemUIColors" :class="$style.item" @click="handleNextPage"
                :disabled="disabled || current === pageCount" :size="$otSize" :round="round">
                <slot name="next">
                    <ot-icon icon="angle-right" :size="$otSize"></ot-icon>
                </slot>
            </li>
        </ul>
        <span :class="$style.jumper" v-if="showJumper">
            <!-- 前往 -->
            <slot name="jumper" :current="current" :jump="handleJumper">
                <ot-input :size="$otSize" :round="round" :model="current" :disabled="disabled"
                    @blur="handleJumper" @keyup.enter="handleJumper">
                    <span slot="prefix">前往</span>
                    <span slot="suffix">页</span>
                </ot-input>
            </slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'ot-pagination',
    model: {
        prop: 'currentPage',
        event: 'update',
    },
    props: {
        currentPage: {
            type: [ Number ],
            default: 1,
        },
        pageSize: { // 每页显示条目个数
            type: [ Number ],
            default: 10,
        },
        pageSizes: { // 每页显示条目个数
            type: [ Array ],
            default() {
                return [ 10, 20, 30, 40, 50, 100 ];
            },
        },
        total: { // 总条目数
            type: [ Number ],
            required: true,
        },
        pagerCount: { // 页码按钮的数量，当总页数超过该值时会折叠
            type: [ Number ],
            default: 7,
        },
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        background: {
            type: [ Boolean ],
            default: false,
        },
        showTotal: {
            type: [ Boolean ],
            default: false,
        },
        showJumper: {
            type: [ Boolean ],
            default: false,
        },
        showPageSizes: {
            type: [ Boolean ],
            default: false,
        },
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'light-b-a' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    item: {
                        normal: [ 'light-f', 'def-b' ],
                        hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                        active: [ 'def-bg-a', 'light-b-a' ],
                        selected: [ 'light-f-s', 'pri-bg-s' ],
                        disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                    },
                    noBgItem: {
                        normal: [ 'light-f' ],
                        hover: [ 'pri-f-hov' ],
                        active: [ 'light-f-a', 'def-bg-a' ],
                        selected: [ 'light-f-s', 'pri-bg-s' ],
                        disabled: [ 'def-f-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                    active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    item: {
                        normal: [ 'def-f', 'def-bg', 'def-b' ],
                        hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                        active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                        selected: [ 'light-f-s', 'pri-bg-s' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    noBgItem: {
                        normal: [ 'def-f' ],
                        hover: [ 'def-f-hov' ],
                        active: [ 'light-f-act' ],
                        selected: [ 'light-f-s', 'pri-bg-s' ],
                        disabled: [ 'def-f-dis' ],
                    },
                };
        }
    },
    watch: {
        currentPage(nv, ov) {
            if (nv !== ov) {
                this.current = nv;
            }
        },
    },
    data() {
        return {
            current: this.currentPage,
            ellipsisNextHover: false,
            ellipsisPrevHover: false,
            currentPageSize: this.pageSize,
        };
    },
    computed: {
        _itemUIColors() {
            if (this.background) {
                return this.$otColors.item;
            }
            return this.$otColors.noBgItem;
        },
        _pagerCount() { // fixed 修正
            return this.pagerCount - 1;
        },
        pageCount() { // 总页数
            return Math.ceil(this.total / this.currentPageSize);
        },
        pageItem() { // 显示页数
            const count = this.pageCount < this._pagerCount ? this.pageCount : this._pagerCount;
            const num = count - 1;
            return num >= 0 ? num : 0;
        },
        pageFirstIndex() { // 当前展示的首页
            const firstPage = this.current - Math.ceil(this._pagerCount / 2);
            if (firstPage <= 1) {
                return 1;
            }
            if (firstPage + this._pagerCount >= this.pageCount) {
                const count = this.pageCount - this._pagerCount;
                return count <= 1 ? 1 : count;
            }
            return firstPage;
        },
        shownPrevEllipsis() {
            return this.pageFirstIndex > 1;
        },
        shownNextEllipsis() {
            return this.pageCount > this._pagerCount && this.pageFirstIndex < (this.pageCount - this._pagerCount);
        },
    },
    methods: {
        handleNextPage() {
            if (this.disabled) return;
            if (this.current >= this.pageCount) return;
            this.current++;
            this.updateModel();
        },
        handleNextNextPage() {
            if (this.disabled) return;
            const len = this._pagerCount;
            for (let i = 1; i < len; i++) {
                if (this.current >= this.pageCount) break;
                this.current++;
            }
            this.updateModel();
        },
        handlePrevPage() {
            if (this.disabled) return;
            if (this.current <= 1) return;
            this.current--;
            this.updateModel();
        },
        handlePrevPrevPage() {
            if (this.disabled) return;
            const len = this._pagerCount;
            for (let i = 1; i < len; i++) {
                if (this.current <= 1) break;
                this.current--;
            }
            this.updateModel();
        },
        handleSpecifyPage(item) {
            if (this.disabled) return;
            if (item < 1 || item > this.pageCount) return;
            if (item === this.current) {
                return;
            }
            this.current = item;
            this.updateModel();
        },
        updateModel() {
            console.log(this.current);
            this.$emit('update', this.current);
        },
        handleJumper(e) {
            const item = parseInt(e.target.value);
            this.handleSpecifyPage(item);
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    font-weight: 700;
    text-align: center;
    user-select: none;

    @include __ot_size__;

    .pager {
        flex: 1 0 auto;
        list-style: none;
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }

    .item {
        display: inline-block;
        box-sizing: content-box;
        margin-right: 1em;
        width: 2em;
        height: 2em;
        line-height: 2em;

        &[round] {
            @include __ot_round__;
        }
    }

    .total {
        margin-right: 1em;
        vertical-align: middle;
    }

    .pageSizeSelect {
        margin-right: 1em;
        vertical-align: middle;
    }

    .jumper {
        vertical-align: middle;
    }
}
</style>

<style lang="scss">
.ot-pagination {
    .ot-input {
        min-width: 8em;
        width: 10em;
    }
}
</style>
