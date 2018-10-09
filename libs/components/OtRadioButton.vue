<template>
    <button ot v-bind="$otColors" @click="handleClick" :size="$otSize" type="button" :class="$style.root" class="ot-radio-button"
        :selected="selected" :disabled="disabled" :round="round">
        <ot-icon v-if="icon" :icon="icon"></ot-icon>
        <slot></slot>
    </button>
</template>

<script>
import OtButton from './OtButton';
export default {
    name: 'ot-radio-button',
    extends: OtButton,
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'pri-b' ],
                    hover: [ 'pri-bg-h', 'pri-b-h' ],
                    active: [ 'pri-bg-a', 'light-b-a' ],
                    selected: [ 'light-f-s', 'pri-bg-s' ],
                    disabled: [ 'light-f-dis', 'grey-bg-dis', 'grey-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'light-bg', 'grey-b' ],
                    hover: [ 'pri-f-hov', 'def-bg-hov', 'def-b-hov' ],
                    active: [ 'pri-f-act', 'def-bg-act', 'pri-b-act' ],
                    selected: [ 'light-f-s', 'pri-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
    props: {
        name: {
            type: [ String ],
            required: true,
        },
    },
    data() {
        return {
            selected: false,
        };
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
            if (this.$parent) {
                this.$parent.$emit('update:ot:radio:group', this.name);
            }
        },
        updateSelected(isSelected) {
            this.selected = isSelected;
        },
    },
};
</script>
