<template>
    <span ot v-ot-bind="$otColors" class="ot-tag" :size="$otSize" type="tag" :class="$style.root"
        :disabled="disabled" :round="round" :circle="circle">
        <slot></slot>
    </span>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-tag',
    mixins: [ theme ],
    props: {
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        circle: {
            type: [ Boolean ],
            default: false,
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    box-sizing: border-box;
    padding: 0 0.3em;
    display: inline-block;
    white-space: nowrap;

    @include __ot_size__;

    &[round] {
        @include __ot_round__;
    }

    &[circle] {
        @include __ot_circle__;
    }
}
</style>
