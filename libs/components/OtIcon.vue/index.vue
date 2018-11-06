<template>
    <i v-if="!$slots.default" ot :class="[$style.root, {[`fa fa-${icon}`]: !!icon}]" :url="!!url" :style="imageUrl" :size="$otSize" v-on="$listeners" :loading="loading"></i>
    <span ot :class="$style.root" v-else v-on="$listeners">
        <i ot :class="[$style.root, $style.label, {[`fa fa-${icon}`]: !!icon}]" :url="!!url" :style="imageUrl" :size="$otSize" :loading="loading"></i>
        <!-- 跟随图标后面的容器 -->
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'ot-icon',
    props: {
        // 图标名称
        icon: [ String ],
        // url链接地址
        url: [ String ],
        // 宽度大小
        width: [ String ],
        // 高度大小
        height: [ String ],
        // 是否为等待状态
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
@import '../globals';
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
        display: inline-table;
        margin-right: 5px;

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

