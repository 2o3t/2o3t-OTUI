<template>
    <i v-if="!$slots.default" ot :class="[$style.root, {[`fa fa-${icon}`]: !!icon}]" :url="!!url" :style="imageUrl" :size="$otSize" @click="$emit('click', $event)" :loading="loading"></i>
    <span ot :class="$style.root" v-else>
        <i ot :class="[$style.root, $style.label, {[`fa fa-${icon}`]: !!icon}]" :url="!!url" :style="imageUrl" :size="$otSize" @click="$emit('click', $event)" :loading="loading"></i>
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'ot-icon',
    props: {
        icon: [ String ],
        url: [ String ],
        width: [ String ],
        height: [ String ],
        loading: {
            type: [ Boolean ],
            default: false,
        },
    },
    computed: {
        imageUrl() {
            const style = {};
            if (this.url) {
                style.backgroundImage = `url('${this.url}')`;
                if (this.$otSize) {
                    style.width = '1em';
                    style.height = '1em';
                }
                if (this.width) {
                    style.width = this.width;
                }
                if (this.height) {
                    style.height = this.height;
                }
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

    &[url] {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
    }

    @include __ot_size__;

    .label {
        margin-right: 5px;
        vertical-align: middle;

        &~* {
            vertical-align: middle;
        }
    }

    &[loading] {
        animation: spinner 2.4s linear infinite;
        transform-origin: center;
    }

    @keyframes spinner {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
}
</style>

