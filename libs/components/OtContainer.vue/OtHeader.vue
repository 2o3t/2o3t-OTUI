<template>
    <header ot class="ot-header" :class="$style.root" :size="$otSize" :style="{ height }">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'ot-header',
    inject: [ '$OtContainer' ],
    props: {
        height: {
            type: String,
            default: '6em',
        },
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
}
</style>

