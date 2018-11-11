<template>
    <header ot class="ot-header" :class="$style.root" :size="$otSize" :style="{ height, lineHeight: height }" :shadow="shadow">
        <!-- 顶部容器 -->
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'ot-header',
    inject: [ '$OtContainer' ],
    props: {
        // 顶栏高度
        height: {
            type: String,
            default: '6em',
        },
        // shadow 投影
        shadow: Boolean,
    },
    created() {
        if (this.$OtContainer) {
            this.$OtContainer.addHeader(this);
        }
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    @include __ot_size__;
    @include __ot_root_block__;

    box-sizing: border-box;
    flex-shrink: 0;

    &[shadow] {
        @include __ot_box_shadow__;
    }
}
</style>

