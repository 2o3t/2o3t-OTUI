<template>
    <div ot class="ot-background-mask" :class="$style.root" v-bind="$attrs" v-on="$listeners">
        <div ot v-if="enable" :animation="animation" :class="$style.mask" :white="white" :black="black" :style="maskStyle" :selected="selected" :disabled="disabled" v-bind="otColors"></div>
        <!-- 容器 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-background-mask',
    // TODO: 可扩展微交互
    props: {
        // 叠加白色
        white: {
            type: Boolean,
            default: false,
        },
        // 叠加黑色
        black: {
            type: Boolean,
            default: false,
        },
        // 透明度
        alpha: {
            type: Number,
            default: 100,
        },
        // 开启功能
        enable: {
            type: Boolean,
            default: false,
        },
        // otColors 对象
        otColors: {
            type: Object,
            default() {
                return {};
            },
        },
        // 选择状态
        selected: Boolean,
        // 禁用状态
        disabled: Boolean,
        // 动画
        animation: Boolean,
    },
    computed: {
        maskStyle() {
            const style = {
                opacity: this.alpha * 0.01 || 0,
            };
            return style;
        },
    },
};
</script>

<style lang="scss" module>
.root {
    display: flex;
    position: relative;
    box-sizing: border-box;

    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition: all .6s;

        &[white] {
            background: #ffffff;
        }

        &[black] {
            background: #000000;
        }

        &[animation] {
            right: auto;
            width: 0;

            &:hover {
                width: 100%;
            }
        }
    }
}
</style>
