<template>
    <footer ot class="ot-footer" :class="$style.root" :size="$otSize" :style="{ height }">
        <!-- 底栏容器 -->
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'ot-footer',
    inject: [ '$OtContainer' ],
    props: {
        // 底栏高度
        height: {
            type: String,
            default: '6em',
        },
    },
    created() {
        if (this.$OtContainer) {
            this.$OtContainer.addFooter(this);
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
}
</style>

