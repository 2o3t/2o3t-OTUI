<template>
    <transition name="fade">
        <span v-if="visible" ot v-bind="$otColors" class="ot-tag" :size="$otSize" type="tag" :class="$style.root"
            :disabled="disabled" :round="round" :circle="circle">
            <slot></slot>
            <ot-link v-if="closable" @click="close">
                <ot-icon icon="close" size="mini" v-bind="$otColors.close" :class="$style.close" circle
                    width="1.4rem"  height="1.4rem"></ot-icon>
            </ot-link>
        </span>
    </transition>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-tag',
    mixins: [ theme ],
    props: {
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        circle: {
            type: [ Boolean ],
            default: false,
        },
        closable: Boolean,
    },
    data() {
        return {
            visible: true,
        };
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('close'); // 关闭alert时触发的事件
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    white-space: nowrap;
    padding: 0.2em 1em;

    @include __ot_size__;

    &[round] {
        @include __ot_round__;
    }

    &[circle] {
        @include __ot_circle__;
    }

    .close {
        display: inline-block;
        box-sizing: border-box;
        margin-left: 0.5em;

        &[circle] {
            border-radius: 50%;
        }
    }
}
</style>
