<template>
    <span ot v-ot-bind="$otColors" class="ot-tag" :size="$otSize" type="tag" :class="$style.root"
        :disabled="disabled" :round="round" :circle="circle">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'ot-tag',
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
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'def-f', 'def-b' ],
                    disabled: [ 'light-f-dis', 'grey-bg-dis', 'light-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
};
</script>

<style lang="scss" module>
.root {
    @import './globals';
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
