<template>
    <button ot v-bind="$otColors" class="ot-button" @click="handleClick" :size="$otSize" type="button" :class="$style.root"
        :disabled="disabled" :round="round">
        <ot-icon v-if="icon" :icon="icon"></ot-icon>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ot-button',
    props: {
        icon: [ String ],
        disabled: [ Boolean ],
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
            // return [ 'dark-b', 'light-f', 'pri-bg', 'light-b-hov', 'pri-bg-h', 'light-b-act', 'pri-bg-a', 'pri-bg-sel' ];
                return {
                    normal: [ 'light-f', 'pri-bg', 'light-b' ],
                    hover: [ 'pri-bg-h', 'pri-b-h' ],
                    active: [ 'pri-bg-a', 'light-b-a' ],
                    disabled: [ 'light-f-dis', 'grey-bg-dis', 'light-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'light-bg', 'grey-b' ],
                    hover: [ 'pri-f-hov', 'def-bg-hov', 'def-b-hov' ],
                    active: [ 'pri-f-act', 'def-bg-act', 'pri-b-act' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
    otPrimeryColors() {
        return [ 'a', 'hov', 'sel' ];
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

    &[size=mini] {
        padding: 0px 15px;
        min-height: $--ot-mini-height;
        font-size: $--ot-mini-size;

        &[round] {
            border-radius: $--ot-mini-radius;
        }
    }

    &[size=small] {
        padding: 0px 15px;
        min-height: $--ot-small-height;
        font-size: $--ot-small-size;

        &[round] {
            border-radius: $--ot-small-radius;
        }
    }

    &[size=normal] {
        padding: 0px 20px;
        min-height: $--ot-normal-height;
        font-size: $--ot-normal-size;

        &[round] {
            border-radius: $--ot-normal-radius;
        }
    }

    &[size=big] {
        padding: 0px 25px;
        min-height: $--ot-big-height;
        font-size: $--ot-big-size;

        &[round] {
            border-radius: $--ot-big-radius;
        }
    }
}
</style>

