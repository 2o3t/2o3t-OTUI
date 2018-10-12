<template>
    <div ot :class="$style.root" v-bind="$otColors" :size="$otSize" :disabled="disabled">
        <span ot v-bind="$otColors.activeLabel" v-if="$slots.inactive" :class="[$style.left, $style.label]" :selected="!value" :disabled="disabled">
            <slot name="inactive"></slot>
        </span>
        <div ot v-bind="$otColors.switch" :class="$style.switch" :selected="value" :style="initStyle" :disabled="disabled">
            <div ot v-bind="$otColors.front" :class="$style.front" :selected="value"></div>
            <input :class="$style.input" type="checkbox" name=""
                :disabled="disabled"
                @change="handleChange"
                :checked="value">
        </div>
        <span ot v-bind="$otColors.activeLabel" v-if="$slots.active" :class="[$style.right, $style.label]" :selected="value" :disabled="disabled">
            <slot name="active"></slot>
        </span>
        <span ot v-bind="$otColors.activeLabel" v-else-if="$slots.default && !$slots.active" :class="[$style.right, $style.label]" :selected="value" :disabled="disabled">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: 'ot-switch',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    front: {
                        normal: [ 'light-bg' ],
                    },
                    switch: {
                        normal: [ 'light-f', 'dark-bg', 'pri-b' ],
                        hover: [ 'pri-f-h', 'pri-b-h' ],
                        active: [ 'pri-bg-a', 'light-b-a' ],
                        selected: [ 'pri-f-sel', 'pri-bg-sel', 'pri-b-sel' ],
                        disabled: [ 'pri-f-dis', 'pri-bg-dis', 'pri-b-dis' ],
                    },
                    activeLabel: {
                        normal: [ 'grey-f' ],
                        selected: [ 'pri-f-sel' ],
                        disabled: [ 'def-f-dis' ],
                    },
                    normal: [ 'light-f' ],
                };
            case 'light':
            default:
                return {
                    front: {
                        normal: [ 'light-bg' ],
                    },
                    switch: {
                        normal: [ 'def-f', 'def-bg', 'pri-b' ],
                        hover: [ 'pri-f-hov', 'pri-b-hov' ],
                        active: [ 'pri-bg-a', 'dark-b-a' ],
                        selected: [ 'pri-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    activeLabel: {
                        normal: [ 'grey-f' ],
                        selected: [ 'pri-f-sel' ],
                        disabled: [ 'def-f-dis' ],
                    },
                    normal: [ 'def-f' ],
                };
        }
    },
    props: {
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
@import './globals';
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
        padding: 0 5px;
    }

    .left {
        text-align: right;
    }

    .right {
        text-align: left;
    }

    .switch {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        align-items: center;
        vertical-align: middle;

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
            position: absolute;
            border-radius: 50%;
            box-sizing: border-box;
            margin: 1px;
            left: 0;
            transform: translateX(0%);
            transition: all .3s;

            &[selected] {
                transform: translateX(100%);
            }
        }
    }

    &[size=mini] {
        font-size: $--ot-mini-size;

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
        font-size: $--ot-small-size;

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
        font-size: $--ot-normal-size;

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
        font-size: $--ot-big-size;

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

