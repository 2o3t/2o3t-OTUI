<template>
    <aside ot class="ot-aside" :class="$style.root" :size="$otSize" :style="{ width }">
        <!-- 侧边容器 -->
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'ot-aside',
    inject: [ '$OtContainer' ],
    props: {
        // 侧边栏宽度
        width: {
            type: String,
            default: '20em',
        },
    },
    created() {
        if (this.$OtContainer) {
            this.$OtContainer.addAside(this);
        }
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    @include __ot_size__;
    @include __ot_root_block__;

    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>

