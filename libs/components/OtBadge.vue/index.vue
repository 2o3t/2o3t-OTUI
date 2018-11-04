<template>
    <div ot class="ot-badge" :class="$style.root" :size="$otSize">
        <slot></slot>
        <transition name="fade">
            <sup ot v-ot-bind="$otColors" :border="border" :round="round" :size="$otSize"
                v-show="!hidden && (content || content === 0 || dot)"
                v-text="content" :fixed="!!$slots.default" :dot="dot"
                :class="$style.content">
            </sup>
        </transition>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-badge',
    mixins: [ theme ],
    props: {
        value: {},
        max: Number,
        dot: Boolean,
        hidden: Boolean,
    },
    computed: {
        content() {
            if (this.dot) return;
            const value = this.value;
            const max = this.max;
            if (typeof value === 'number' && typeof max === 'number') {
                return max < value ? `${max}+` : value;
            }
            return value;
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    vertical-align: middle;
    display: inline-block;

    @include __ot_size__;

    .content {
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;

        &[round] {
            @include __ot_round__;
        }

        &[fixed] {
            position: absolute;
            top: 0;
            right: 10px;
            transform: translateY(-50%) translateX(100%);
        }

        &[dot] {
            height: 8px;
            width: 8px;
            padding: 0;
            right: 0;
            border-radius: 50%;
        }

        &[fixed][dot] {
            right: 5px;
        }
    }
}
</style>

