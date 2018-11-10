<template>
    <div ot v-ot-bind="$otColors" class="ot-menu" :size="$otSize"
         :class="$style.root" :collapse="isCollapse">
        <div :class="$style.top">
            <!-- 最顶部插槽 -->
            <slot name="top"></slot>
        </div>
        <ul :class="$style.content">
            <!-- 默认容器 -->
            <slot></slot>
        </ul>
        <div :class="$style.bottom">
            <!-- 最底部插槽 -->
            <slot name="bottom"></slot>
        </div>
        <ot-line v-if="line" type="right"></ot-line>
    </div>
</template>

<script>
export default {
    name: 'ot-menu',
    provide() {
        return {
            $OtMenu: this,
        };
    },
    model: {
        prop: 'value',
        event: 'update',
    },
    props: {
        // 是否横向收缩
        isCollapse: [ Boolean ],
        // 默认选择项, v-model 数据源
        value: [ String ], // 子组件使用
        // 右侧分割线
        line: {
            type: [ Boolean ],
            default: false,
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
    flex-direction: column;
    height: 100%;
    transition: all .3s;
    box-sizing: border-box;

    @include __ot_size__;
    @include __ot_root_block__;

    .top {
        flex: 0 0 auto;
        overflow: hidden;
    }

    .content {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
    }

    .bottom {
        flex: 0 0 auto;
        overflow: hidden;
    }
}
</style>

<style lang="scss">
.ot-menu[ot] {
    padding-left: 10%;
    width: 100%;

    &[collapse] {
        width: 6.4em;
    }

    .ot-menu-item[ot] {

    }
}
</style>
