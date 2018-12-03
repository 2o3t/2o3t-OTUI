<template>
    <div ot class="ot-layout" :class="$style.root" :size="$otSize" :gutter="gutter">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-layout',
    props: {
        gutter: Boolean,
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    @include __ot_size__;
}
</style>

<style lang="scss">
.root {

    &[gutter] [ot].ot-row {
        margin-bottom: 1em;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>

