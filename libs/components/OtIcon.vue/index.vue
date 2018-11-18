<template>
    <i v-if="!$slots.default" ot :class="[$style.root, $style.icon, {[`${lib} ${lib}-${icon}`]: !!icon}, customClass]" :url="!!url" :style="imageUrl" :size="$otSize" v-on="$listeners" :loading="loading"></i>
    <span ot :class="$style.root" v-else v-on="$listeners">
        <i ot :class="[$style.icon, {[`${lib} ${lib}-${icon}`]: !!icon}, customClass]" :url="!!url" :style="imageUrl" :size="$otSize" :loading="loading"></i>
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
        width: [ String ],
        // 高度大小
        height: [ String ],
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
            return Object.assign(style, this.fontStyle);
        },
        fontStyle() {
            const style = {};
            if ([ 'mini', 'small', 'normal', 'big' ].includes(this.size)) {
                return style;
            }
            return {
                fontSize: this.size,
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

    &[url] {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
    }

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
}
</style>

