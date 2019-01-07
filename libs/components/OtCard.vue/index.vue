<template>
    <div ot v-bind="$otColors" :class="$style.root" class="ot-card" :style="{ height }" :size="$otSize" :round="round" :border="border"
        :animation="animation" :shadow="shadow">
        <div v-if="$slots.left" ot v-bind="$otColors.left" :class="[$style.left, $style.padding]" class="ot-card__left" :border="line">
            <slot name="left"></slot>
        </div>
        <div :class="[$style.right, { [$style.padding]: !!$slots.default }]">
            <slot>
                <div :class="[$style.top, $style.padding]" class="ot-card__top">
                    <slot name="top"></slot>
                </div>
                <ot-line v-if="line && $slots.bottom" class="ot-card__line"></ot-line>
                <div v-if="$slots.bottom" :class="[$style.bottom, $style.padding]" class="ot-card__bottom">
                    <slot name="bottom"></slot>
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
        // 卡片高度
        height: {
            type: String,
            default: 'auto',
        },
        // 分割线
        line: {
            type: Boolean,
            default: false,
        },
        // 是否有 hover 动画
        animation: Boolean,
        // 是否有阴影
        shadow: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    min-height: 10em;
    display: flex;
    flex-direction: row;
    min-width: 26em;
    box-sizing: border-box;
    vertical-align: middle;

    @include __ot_size__;

    &[round] {
        @include __ot_round__;
    }

    &[shadow] {
        @include __ot_box_shadow__;
    }

    &[animation] {
        transition: all .4s;

        &:hover {
            transform: translateY(-2%);
            box-shadow: 1px 10px 20px 2px rgba(20, 20, 20, 0.2);
        }
    }

    .left {
        width: 8em;
        flex: 0 0 8em;
        text-align: center;
        box-sizing: border-box;
        vertical-align: middle;

        &>* {
            vertical-align: middle;
        }
    }
    .right {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        vertical-align: middle;

        .top {
            position: relative;
            flex: 1 1 auto;
            box-sizing: border-box;
            vertical-align: middle;

            &>* {
                vertical-align: middle;
            }
        }
        .bottom {
            position: relative;
            flex: 0 0 auto;
            min-height: 2em;
            box-sizing: border-box;

            &>* {
                vertical-align: middle;
            }
        }
    }

    .padding {
        padding: 0.4em 1.6em;
    }
}
</style>

