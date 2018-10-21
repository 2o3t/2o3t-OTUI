<template>
    <button ot v-ot-bind="$otColors" class="ot-button" @click="handleClick" :size="$otSize" type="button" :class="$style.root"
        :disabled="disabled" :round="round" :circle="circle" :icon="icon && !$slots.default" :dashed="dashed">
        <ot-icon v-if="icon" :icon="icon"><slot></slot></ot-icon>
        <slot v-else></slot>
    </button>
</template>

<script>
export default {
    name: 'ot-button',
    props: {
        icon: [ String ],
        disabled: [ Boolean ],
        circle: [ Boolean ],
        dashed: [ Boolean ],
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
            // return [ 'dark-b', 'light-f', 'pri-bg', 'light-b-hov', 'pri-bg-h', 'light-b-act', 'pri-bg-a', 'pri-bg-sel' ];
                return {
                    normal: [ 'light-f', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'light-b-a' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                    active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    outline: none;
    box-shadow: none;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    transition: all .3s;
    font-weight: 500;
    user-select:none;
    line-height: 1;

    &[dashed] {
      border-style: dashed;
    }

    &[size=mini] {
        padding: 0px 15px;
        min-height: $--ot-mini-height;
        font-size: $--ot-mini-size;

        &[round] {
            border-radius: $--ot-mini-radius;
        }

        &[circle] {
            border-radius: $--ot-mini-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-mini-height;
            }
        }
    }

    &[size=small] {
        padding: 0px 15px;
        min-height: $--ot-small-height;
        font-size: $--ot-small-size;

        &[round] {
            border-radius: $--ot-small-radius;
        }

        &[circle] {
            border-radius: $--ot-small-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-small-height;
            }
        }
    }

    &[size=normal] {
        padding: 0px 20px;
        min-height: $--ot-normal-height;
        font-size: $--ot-normal-size;

        &[round] {
            border-radius: $--ot-normal-radius;
        }

        &[circle] {
            border-radius: $--ot-normal-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-normal-height;
            }
        }
    }

    &[size=big] {
        padding: 0px 25px;
        min-height: $--ot-big-height;
        font-size: $--ot-big-size;

        &[round] {
            border-radius: $--ot-big-radius;
        }

        &[circle] {
            border-radius: $--ot-big-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-big-height;
            }
        }
    }
}
</style>

