<template>
    <div ot v-bind="$attrs" :class="$style.root" :placement="placement">
        <i ot v-bind="$otColors" :class="$style.arrow"
            :placement="placement"
            v-on="$listeners">
        </i>
    </div>
</template>

<script>
export default {
    name: 'ot-arrow',
    props: {
        placement: {
            type: [ String ],
            default: 'up',
        },
        hover: [ Boolean ],
    },
    otDefaultColors(theme) {
        const colors = {
            normal: [ 'def-bl', 'def-bt' ],
            selected: [ 'def-bl-sel', 'def-bt-sel' ],
            disabled: [ 'def-bl-dis', 'def-bt-dis' ],
        };
        if (this.hover) {
            Object.assign(colors, {
                hover: [ 'def-bl-hov', 'def-bt-hov' ],
                active: [ 'def-bl-act', 'def-bt-act' ],
            });
        }
        switch (theme) {
            case 'dark':
                return colors;
            case 'light':
            default:
                return colors;
        }
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    display: inline;
    box-sizing: border-box;
    vertical-align: middle;
    text-align: center;
    min-width: 0.6em;
    min-height: 0.6em;

    .arrow {
        display: block;
        margin: auto;
        width: 0.6em;
        height: 0.6em;
        transform: rotate(45deg);
        transform-origin: center;
        vertical-align: middle;

        &[placement=up] {
            transform: rotate(45deg);
        }

        &[placement=down] {
            transform: rotate(225deg);
        }

        &[placement=right] {
            transform: rotate(135deg);
        }

        &[placement=left] {
            transform: rotate(315deg);
        }

        &:after {
            content: '';
            display: table-cell;
        }

    }

    @include __ot_size__;
}
</style>

