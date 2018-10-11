<template>
    <i v-if="!$slots.default" ot :class="[$style.root, {[`fa fa-${icon}`]: !!icon}]" :style="imageUrl" :size="$otSize" @click="$emit('click', $event)"></i>
    <span ot :class="$style.root" v-else>
        <i ot :class="[$style.label, {[`fa fa-${icon}`]: !!icon}]" :style="imageUrl" :size="$otSize" @click="$emit('click', $event)"></i>
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'ot-icon',
    props: {
        icon: [ String ],
        url: [ String ],
    },
    computed: {
        imageUrl() {
            const style = {};
            if (this.url) {
                style.backgroundImage = `url('${this.url}')`;
            }
            return style;
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
    border-width: 0;
    text-align: center;
    line-height: 1;
    box-sizing: border-box;

    .label {
        padding-right: 5px;
    }

    @include __ot_size__;

    // &[size=mini] {
    //     font-size: $--ot-mini-size;
    // }

    // &[size=small] {
    //     font-size: $--ot-small-size;
    // }

    // &[size=normal] {
    //     font-size: $--ot-normal-size;
    // }

    // &[size=big] {
    //     font-size: $--ot-big-size;
    // }
}
</style>

