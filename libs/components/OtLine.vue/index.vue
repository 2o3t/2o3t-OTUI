<template>
    <div ot v-bind="$otColors" :class="$style.root" :mode="type" :style="initStyle"></div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-line',
    mixins: [ theme ],
    props: {
        type: [ String ], // top, left, right, bottom
        height: [ Number ],
        width: [ Number ],
    },
    computed: {
        initStyle() {
            const style = {};
            if (this.height) {
                style.margin = `${this.height}px 0px`;
            }
            if (this.width) {
                style.margin = `0px ${this.width}px`;
            }
            return style;
        },
    },
};
</script>

<style lang="scss" module>
.root {
    position: relative;
    display: block;
    box-sizing: border-box;
    border-width: 0;

    &:after {
        display: table;
        content: "";
        clear: both;
    }

    &[mode] {
        position: absolute;
    }

    &[mode=top] {
        top: 0;
        width: 100%;
    }

    &[mode=bottom] {
        bottom: 0;
        width: 100%;
    }

    &[mode=left] {
        left: 0;
        height: 100%;
    }

    &[mode=right] {
        right: 0;
        height: 100%;
    }
}
</style>

