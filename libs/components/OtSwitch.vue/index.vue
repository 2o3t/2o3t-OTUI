<template>
    <div ot :class="$style.root" v-bind="$otColors" :size="$otSize" :disabled="disabled">
        <span ot v-bind="$otColors.activeLabel" v-if="$slots.inactive" :class="[$style.left, $style.label]" :selected="!value" :disabled="disabled">
            <slot name="inactive"></slot>
        </span>
        <span ot v-bind="$otColors.switch" :class="$style.switch" :selected="value" :style="initStyle" :disabled="disabled">
            <span ot v-bind="$otColors.front" :class="$style.front" :selected="value"></span>
            <input :class="$style.input" type="checkbox"
                :name="name"
                v-on="$listeners"
                :disabled="disabled"
                @change="handleChange"
                :checked="value">
        </span>
        <span ot v-bind="$otColors.activeLabel" v-if="$slots.active" :class="[$style.right, $style.label]" :selected="value" :disabled="disabled">
            <slot name="active"></slot>
        </span>
        <span ot v-bind="$otColors.activeLabel" v-else-if="$slots.default && !$slots.active" :class="[$style.right, $style.label]" :selected="value" :disabled="disabled">
            <slot></slot>
        </span>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-switch',
    mixins: [ theme ],
    props: {
        name: [ String ],
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [ Boolean ],
            required: true,
        },
        activeColor: [ String ],
        inactiveColor: [ String ],
    },
    computed: {
        initStyle() {
            const style = {};
            if (!this.value && this.inactiveColor) {
                style.backgroundColor = this.inactiveColor;
            } else if (this.value && this.activeColor) {
                style.backgroundColor = this.activeColor;
            }
            if (style.backgroundColor) {
                style.borderColor = style.backgroundColor;
            }
            return style;
        },
    },
    methods: {
        handleChange(e) {
            this.$emit('change', e);
            this.$emit('input', Boolean(e.target.checked));
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
    line-height: 1;

    .label {
        display: inline-block;
        position: relative;
        vertical-align: middle;
        box-sizing: border-box;
        padding: 0 0.5em;
        opacity: 0.6;
        transition: opacity .3s;

        &[selected] {
            opacity: 1;
        }
    }

    .left {
        text-align: right;
        padding-left: 0;
    }

    .right {
        text-align: left;
        padding-right: 0;
    }

    .switch {
        display: inline-block;
        position: relative;
        box-sizing: content-box;
        vertical-align: middle;
        overflow: hidden;

        .input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            margin: 0;
            padding: 0;
            cursor: pointer;

            &[disabled] {
                cursor: not-allowed;
            }
        }

        .front {
            display: block;
            border-radius: 50%;
            margin: auto 0.2rem;
            transform: translateX(0%);
            transition: all .3s;
            overflow: hidden;
            position: absolute;
            box-sizing: border-box;
            top: 0; left: 0; bottom: 0; right: 0;

            &[selected] {
                transform: translateX(100%);
            }
        }
    }

    @include __ot_size__;

    &[size=mini] {
        .switch {
            border-radius: $--ot-mini-default;
            height: $--ot-mini-default;
            width: $--ot-mini-default * 2 - $--ot-offset-default;
        }

        .front {
            height: $--ot-mini-default - $--ot-offset-default;
            width: $--ot-mini-default - $--ot-offset-default;
        }
    }

    &[size=small] {
        .switch {
            border-radius: $--ot-small-default;
            height: $--ot-small-default;
            width: $--ot-small-default * 2 - $--ot-offset-default;
        }

        .front {
            height: $--ot-small-default - $--ot-offset-default;
            width: $--ot-small-default - $--ot-offset-default;
        }
    }

    &[size=normal] {
        .switch {
            border-radius: $--ot-normal-default;
            height: $--ot-normal-default;
            width: $--ot-normal-default * 2 - $--ot-offset-default;
        }

        .front {
            height: $--ot-normal-default - $--ot-offset-default;
            width: $--ot-normal-default - $--ot-offset-default;
        }
    }

    &[size=big] {
        .switch {
            border-radius: $--ot-big-default;
            height: $--ot-big-default;
            width: $--ot-big-default * 2 - $--ot-offset-default;
        }

        .front {
            height: $--ot-big-default - $--ot-offset-default;
            width: $--ot-big-default - $--ot-offset-default;
        }
    }
}
</style>

