<template>
    <div ot class="ot-avatar" :class="$style.root" v-ot-bind="$otColors" :size="$otSize" :style="fontStyle" :circle="circle">
        <!-- 内容插槽 -->
        <slot>
            <ot-icon :class="$style.icon" class="ot-avatar__icon" :icon="icon" :lib="lib" :url="url" :fill="fill"></ot-icon>
        </slot>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-avatar',
    mixins: [ theme ],
    props: {
        // icon-font 图标名称
        icon: [ String ],
        // url链接地址
        url: [ String ],
        // icon-font 图标库
        lib: [ String ],
        // 是否为圆形
        circle: Boolean,
        // 头像填充满
        fill: Boolean,
    },
    computed: {
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
    position: relative;
    text-align: center;
    line-height: 3em;
    width: 3em;
    height: 3em;
    vertical-align: middle;
    overflow: hidden;

    @include __ot_size__;

    &[round] {
        @include __ot_round__;
    }

    &[circle] {
        border-radius: 50%;
    }

    .icon {
        &[fill] {
            width: 100%;
            height: 100%;
            font-size: 3em;
            vertical-align: baseline;
        }
    }
}
</style>

