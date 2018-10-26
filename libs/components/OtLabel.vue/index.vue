<template>
    <label ot class="ot-label" :class="$style.root" @click="handleForClick" :position="position">
        <span ot v-ot-bind="$otColors" :class="$style.prefix" v-if="required">{{ prefix }}</span>
        <slot></slot>
    </label>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-label',
    mixins: [ theme ],
    inject: [ '$OtFormItem' ],
    props: {
        name: [ String ],
        for: {
            type: [ String ],
            default: 'input',
        },
        required: [ Boolean ],
        prefix: {
            type: [ String ],
            default: '*',
        },
        position: {
            type: [ String ],
            default: 'right',
        },
    },
    methods: {
        handleForClick() {
            const $OtFormItem = this.$OtFormItem;
            if ($OtFormItem) {
                const $slot = $OtFormItem.$slots.default;
                if ($slot && $slot.length) {
                    const $el = $slot[0].elm;
                    if ($el) {
                        const $input = $el.querySelector(this.for);
                        $input && $input.focus();
                    }
                }
            }
        },
    },
};
</script>

<style lang="scss" module>
.root {
    @import '../globals';
    position: relative;
    box-sizing: border-box;
    text-align: right;
    vertical-align: middle;

    &[position=left] {
        text-align: left;
    }

    &[position=center] {
        text-align: center;
    }

    @include __ot_size__;
    @include __ot_height__;

    &>.prefix {
        margin-right: 4px;
    }
}
</style>

