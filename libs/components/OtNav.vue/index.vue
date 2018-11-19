<template>
    <nav ot v-ot-bind="$otColors" class="ot-nav" :size="$otSize"
         :class="$style.root" :collapse="isCollapse">
        <div v-if="$slots.left" :class="$style.left">
            <!-- 左侧容器, 一般为 logo -->
            <slot name="left"></slot>
        </div>
        <div v-show="_showMenu" ot class="ot-nav__content" :class="$style.nav" :placement="placement" :theme="$otTheme">
            <slot></slot>
        </div>
        <div v-if="!isCollapse && $slots.right" :class="$style.right">
            <!-- 右侧容器 -->
            <slot name="right"></slot>
        </div>
        <div v-else-if="isCollapse" :class="$style.right">
            <ot-icon :class="$style.menuBar" icon="menu" lib="font-ot" @click="handleMenuClick">
            </ot-icon>
        </div>
        <ot-line v-if="line" type="bottom"></ot-line>
    </nav>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-nav',
    mixins: [ theme ],
    provide() {
        return {
            $OtNav: this,
        };
    },
    model: {
        prop: 'value',
        event: 'update',
    },
    props: {
        // 是否可收缩, 一般为手机用途
        isCollapse: [ Boolean ],
        // 默认选择项, v-model 数据源
        value: [ String ], // 子组件使用
        // 底部边线
        line: {
            type: [ Boolean ],
            default: false,
        },
        // 方向
        placement: {
            type: String,
            default: 'left', // right
        },
    },
    data() {
        return {
            bShown: false,
        };
    },
    computed: {
        _showMenu() {
            if (this.isCollapse) {
                return this.bShown;
            }
            return true;
        },
    },
    methods: {
        updateSelect(index) {
            this.$emit('update', index); // 更新 v-model 数据源
        },
        handleMenuClick() {
            this.bShown = !this.bShown;
        },
    },
};
</script>

<style module lang='scss'>
@import '../globals';
.root {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    transition: all .3s;
    box-sizing: border-box;
    align-items: center;
    vertical-align: middle;

    @include __ot_size__;
    @include __ot_root_block__;

    .left {
        flex: 0 0 auto;
        align-items: center;
        margin-right: 2em;
        overflow: hidden;
        vertical-align: middle;
        box-sizing: border-box;
    }

    .right {
        flex: 0 0 auto;
        align-items: center;
        justify-content: flex-end;
        margin-left: 2em;
        overflow: hidden;
        vertical-align: middle;
        box-sizing: border-box;

        .menuBar {
            font-size: 2em;
            position: absolute;
            top: 1em;
            right: 1em;
        }
    }

    .nav {
        flex: 1 1 auto;
        align-items: center;
        list-style: none;
        position: relative;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        box-sizing: border-box;
        margin: 0 2em;

        &[placement=right] {
            justify-content: flex-end;
        }
    }

    .bottom {
        flex: 0 0 auto;
    }
}
</style>

<style lang="scss">
@import '../globals';
.ot-nav[ot] {
    $--ot-nav-line-height: 6em;

    height: 6em;
    line-height: $--ot-nav-line-height;

    .ot-nav-item[ot] {
        flex: 0 0 auto;
    }

    &[collapse]>.ot-nav__content {
        flex-direction: column;
        position: absolute;
        top: $--ot-nav-line-height;
        left: 0;
        right: 0;
        z-index: 100;
        margin: 0;
        padding: 0 2em;
        align-items: flex-start;

        &[theme=dark] {
            background-color: rgba(255,255,255,0.95);
        }

        &[theme=light] {
            background-color: rgba(255,255,255,0.95);
        }

        .ot-nav-item[ot] {
            width: 100%;
        }

        @include __ot_box_shadow__;
    }
}
</style>
