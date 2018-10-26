<template>
    <div ot v-ot-bind="$otColors" :class="$style.root" class="ot-card">
        <div ot v-ot-bind="$otColors.left" :class="$style.left">
            <slot name="left"></slot>
        </div>
        <div :class="$style.right">
            <slot name="right">
                <div :class="$style.top">
                    <slot name="right-top"></slot>
                </div>
                <ot-line></ot-line>
                <div :class="$style.bottom">
                    <slot name="right-bottom"></slot>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-card',
    mixins: [ theme ],
    props: {
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    height: 200px;
    display: flex;
    flex-direction: row;
    min-width: 320px;
    border-radius: 3px;
    box-sizing: border-box;
    @include __ot_box_shadow__;

    .left {
        width: 80px;
        flex: 0 0 80px;
        text-align: center;
    }
    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        .top {
            position: relative;
            flex: 1;
            padding: 10px;
        }
        .bottom {
            position: relative;
            flex: 0 0 30px;
            height: 30px;
            line-height: 1;
            text-align: right;
        }
    }
}
</style>

