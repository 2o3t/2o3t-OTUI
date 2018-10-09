<template>
    <span ot v-bind="$otColors" class="ot-input" :class="$style.root" :size="$otSize" :round="round">
        <div ot v-bind="$otColors.prefix" v-if="$slots.prefix" :class="$style.prefix" :round="round">
            <slot name="prefix"></slot>
        </div>
        <div ot v-bind="$otColors.subfix" v-if="$slots.subfix" :class="$style.subfix" :round="round">
            <slot name="subfix"></slot>
        </div>
        <input ot v-bind="$otColors.input" :round="round"
            :class="$style.input" :placeholder="placeholder" :type="type" :disabled="disabled"
            :name="name"
            @change="handleChange"
            :value="value"
            @input="handleInput">
    </span>
</template>

<script>
export default {
    name: 'ot-input',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    prefix: [ 'grey-bg', 'light-bl', 'light-bt', 'light-bb' ],
                    subfix: [ 'grey-bg', 'light-bt', 'light-br', 'light-bb' ],
                    input: {
                        normal: [ 'light-f', 'dark-bg', 'light-b' ],
                        hover: [ 'gery-bg-hov', 'pri-b-hov' ],
                        active: [ 'grey-bg-act', 'pri-b-act' ],
                        focus: [ 'pri-b-f' ],
                        disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    prefix: [ 'def-bg', 'grey-bl', 'grey-bt', 'grey-bb' ],
                    subfix: [ 'def-bg', 'grey-bt', 'grey-br', 'grey-bb' ],
                    input: {
                        normal: [ 'light-bg', 'grey-b' ],
                        hover: [ 'def-bg-hov', 'pri-b-hov' ],
                        active: [ 'def-bg-act', 'pri-b-act' ],
                        focus: [ 'pri-b-f' ],
                        disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    },
                };
        }
    },
    props: {
        placeholder: [ String ],
        type: {
            type: [ String ],
            default: 'text',
        },
        disabled: [ Boolean ],
        value: [ String ],
        name: [ String ],
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        handleChange(e) {
            this.$emit('onChange', e);
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    display: flex;
    position: relative;
    box-sizing: border-box;
    flex-direction: row;
    vertical-align: middle;

    .prefix {
        display: inline-block;
        flex: 0 0 auto;
        vertical-align: middle;
        padding: 0 15px;
        position: relative;
        box-sizing: border-box;

        &+.input[round] {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }

        &+.subfix+.input[round] {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }
    }

    .subfix {
        display: inline-block;
        flex: 0 0 auto;
        vertical-align: middle;
        padding: 0 15px;
        order: 3;
        position: relative;
        box-sizing: border-box;

        &+.input[round] {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
    }

    .input {
        display: inline-block;
        flex: 1 1 auto;
        outline: none;
        cursor: auto !important;
        padding: 2px 5px;
        position: relative;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        vertical-align: middle;
        overflow: hidden;

        &:focus {
            outline: none;
        }
    }

    &[size=mini] {
        height: $--ot-mini-height;
        line-height: $--ot-mini-height - 0.2rem;
        min-width: $--ot-mini-input-width;
        font-size: $--ot-mini-size;

        [round] {
            border-radius: $--ot-mini-radius;
        }

        .prefix {
            margin-right: -$--ot-mini-radius;
            padding-right: 1.5rem + $--ot-mini-radius;
        }

        .subfix {
            margin-left: -$--ot-mini-radius;
            padding-left: 1.5rem + $--ot-mini-radius;
        }
    }

    &[size=small] {
        height: $--ot-small-height;
        line-height: $--ot-small-height - 0.2rem;
        min-width: $--ot-small-input-width;
        font-size: $--ot-small-size;

        [round] {
            border-radius: $--ot-small-radius;
        }

        .prefix {
            margin-right: -$--ot-small-radius;
            padding-right: 1.5rem + $--ot-small-radius;
        }

        .subfix {
            margin-left: -$--ot-small-radius;
            padding-left: 1.5rem + $--ot-small-radius;
        }
    }

    &[size=normal] {
        height: $--ot-normal-height;
        line-height: $--ot-normal-height - 0.2rem;
        min-width: $--ot-normal-input-width;
        font-size: $--ot-normal-size;

        [round] {
            border-radius: $--ot-normal-radius;
        }

        .prefix {
            margin-right: -$--ot-normal-radius;
            padding-right: 1.5rem + $--ot-normal-radius;
        }

        .subfix {
            margin-left: -$--ot-normal-radius;
            padding-left: 1.5rem + $--ot-normal-radius;
        }
    }

    &[size=big] {
        height: $--ot-big-height;
        line-height: $--ot-big-height - 0.2rem;
        min-width: $--ot-big-input-width;
        font-size: $--ot-big-size;

        [round] {
            border-radius: $--ot-big-radius;
        }

        .prefix {
            margin-right: -$--ot-big-radius;
            padding-right: 1.5rem + $--ot-big-radius;
        }

        .subfix {
            margin-left: -$--ot-big-radius;
            padding-left: 1.5rem + $--ot-big-radius;
        }
    }
}
</style>

