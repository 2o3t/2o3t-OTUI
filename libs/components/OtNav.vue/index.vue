<template>
    <nav ot v-ot-bind="$otColors" class="ot-nav" :size="$otSize"
         :class="$style.root" :collapse="isCollapse">
        <div v-if="$slots.left" :class="$style.left">
            <!-- 左侧容器, 一般为 logo -->
            <slot name="left"></slot>
        </div>
        <div class="ot-nav__content" :class="$style.nav" :placement="placement">
            <slot></slot>
        </div>
        <div v-if="$slots.right" :class="$style.right">
            <!-- 右侧容器 -->
            <slot name="right"></slot>
        </div>
        <ot-line v-if="line" type="bottom"></ot-line>
    </nav>
</template>

<script>
export default {
    name: 'ot-nav',
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
    methods: {
        updateSelect(index) {
            this.$emit('update', index); // 更新 v-model 数据源
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
    }

    .nav {
        flex: 1 1 auto;
        align-items: center;
        list-style: none;
        position: relative;
        margin: 0 2em;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        box-sizing: border-box;

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

    &[collapse]>.ot-nav__content {
        flex-direction: column;
        position: absolute;
        top: $--ot-nav-line-height;
        left: 0;
        right: 0;

        @include __ot_box_shadow__;
    }

    .ot-nav-item[ot] {
        flex: 0 0 auto;
    }
}
</style>
