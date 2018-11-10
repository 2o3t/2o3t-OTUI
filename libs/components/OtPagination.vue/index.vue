<template>
    <div ot class="ot-pagination" :size="$otSize" :class="$style.root">
        <span :class="$style.total" v-if="showTotal">
            <!-- 总条数显示容器 -->
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
                <!-- 上一页的箭头容器 -->
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
                <!-- 下一页的箭头容器 -->
                <slot name="next">
                    <ot-icon icon="angle-right" :size="$otSize"></ot-icon>
                </slot>
            </li>
        </ul>
        <span :class="$style.jumper" v-if="showJumper">
            <!-- 跳转页面容器 -->
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
import theme from './theme.js';
export default {
    name: 'ot-pagination',
    mixins: [ theme ],
    model: {
        prop: 'currentPage',
        event: 'update',
    },
    props: {
        // 当前页数
        currentPage: {
            type: [ Number ],
            default: 1,
        },
        // 每页显示条目个数
        pageSize: {
            type: [ Number ],
            default: 10,
        },
        // 每页显示条目个数
        pageSizes: {
            type: [ Array ],
            default() {
                return [ 10, 20, 30, 40, 50, 100 ];
            },
        },
        // 总条目数
        total: {
            type: [ Number ],
            required: true,
        },
        // 页码按钮的数量，当总页数超过该值时会折叠
        pagerCount: {
            type: [ Number ],
            default: 7,
        },
        // 禁用
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        // 是否带有背景, 只改变UI
        background: {
            type: [ Boolean ],
            default: false,
        },
        // 显示总页数
        showTotal: {
            type: [ Boolean ],
            default: false,
        },
        // 显示控制跳转页输入框
        showJumper: {
            type: [ Boolean ],
            default: false,
        },
        // 显示每页展示的数量选择器
        showPageSizes: {
            type: [ Boolean ],
            default: false,
        },
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
            this.$emit('update', this.current); // 更新 `v-model` 当前页数
        },
        handleJumper(e) {
            const item = parseInt(e.target.value);
            this.handleSpecifyPage(item);
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
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

         & input {
            text-align: center;
         }
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
