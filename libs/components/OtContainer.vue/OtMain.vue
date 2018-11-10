<template>
    <main ot class="ot-main" :class="$style.root" :size="$otSize">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'ot-main',
    inject: [ '$OtContainer' ],
    created() {
        if (this.$OtContainer) {
            this.$OtContainer.addMain(this);
        }
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    @include __ot_size__;
    @include __ot_root_block__;

    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;

    @include __ot_scroll_bar__;
}
</style>

