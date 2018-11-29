<template>
    <i v-if="!$slots.default" ot :class="[$style.root, $style.icon, {[`${lib} ${lib}-${icon}`]: !!icon}, customClass]" :url="!!url" :style="customStyle" :size="$otSize" v-on="$listeners" :loading="loading" v-ot-bind="$otColors" :local-ratio="localRatio"></i>
    <span ot :class="$style.root" v-else v-on="$listeners" v-ot-bind="$otColors">
        <i ot :class="[$style.icon, {[`${lib} ${lib}-${icon}`]: !!icon}, customClass]" :url="!!url" :style="customStyle" :size="$otSize" :loading="loading" :local-ratio="localRatio"></i>
        <span :class="$style.append">
            <!-- 跟随图标后面的容器 -->
            <slot></slot>
        </span>
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
        width: [ String, Number ],
        // 高度大小
        height: [ String, Number ],
        // 是否为等待状态
        loading: {
            type: [ Boolean ],
            default: false,
        },
        // icon-font lib
        lib: {
            type: String,
            default: 'font-ot',
        },
        // 自定义 class
        customClass: {
            type: String,
            default: '',
        },
        // 锁定图标宽高比例
        localRatio: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        customStyle() {
            const style = {};
            return Object.assign(style, this.sizeStyle, this.fontStyle, this.imageUrl);
        },
        sizeStyle() {
            const style = {};
            if (this.$otSize) {
                style.width = '1em';
                style.height = '1em';
            }
            if (this.width) {
                if (typeof this.width === 'string') {
                    style.width = this.width;
                } else {
                    style.width = this.width + 'px';
                }
            }
            if (this.height) {
                if (typeof this.height === 'string') {
                    style.height = this.height;
                    style.lineHeight = this.height;
                } else {
                    style.height = this.height + 'px';
                    style.lineHeight = this.height + 'px';
                }
            }
            return style;
        },
        imageUrl() {
            const style = {};
            if (this.url) {
                style.backgroundImage = `url('${this.url}')`;
            }
            return style;
        },
        fontStyle() {
            const style = {};
            if ([ 'mini', 'small', 'normal', 'big' ].includes(this.$otSize)) {
                return style;
            }
            return {
                fontSize: this.$otSize,
            };
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
    box-sizing: border-box;
    vertical-align: middle;

    @include __ot_size__;

    .append {
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
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

.icon {
    display: inline-block;
    line-height: 1;
    overflow: hidden;
    list-style: none;
    font-style: normal;
    border-width: 0;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;

    &[url] {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
    }

    &[local-ratio] {
        width: 1em;
        height: 1em;
    }
}
</style>

