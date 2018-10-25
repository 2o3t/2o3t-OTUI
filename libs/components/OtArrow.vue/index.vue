<template>
    <div ot class="ot-arrow" v-bind="$attrs" :class="$style.root" :placement="placement">
        <div :class="$style.box" :placement="placement">
            <i ot v-ot-bind="$otColors" :class="$style.arrow"
                :placement="placement"
                v-on="$listeners">
            </i>
        </div>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-arrow',
    mixins: [ theme ],
    props: {
        placement: {
            type: [ String ],
            default: 'up',
        },
        hover: [ Boolean ],
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;

    &[placement=up] {
        transform: translateY(0.1em);
    }

    &[placement=down] {
        transform: translateY(-0.1em);
    }

    &[placement=left] {
        transform: translateX(0.1em);
    }

    &[placement=right] {
        transform: translateX(-0.1em);
    }
}
.box {
    display: block;
    box-sizing: border-box;
    text-align: center;

    .arrow {
        display: block;
        margin: auto;
        width: 0.6em;
        height: 0.6em;
        transform: rotate(45deg);
        transform-origin: center;

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

<style lang="scss">
.ot-button[ot]:hover {

    .ot-arrow[ot] {

    }
}
</style>
