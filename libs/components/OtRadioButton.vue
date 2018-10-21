<template>
    <button ot v-ot-bind="$otColors" @click="handleClick" :size="$otSize" type="button" :class="$style.root" class="ot-radio-button"
        :selected="selected" :disabled="disabled" :round="round">
        <ot-icon v-if="icon" :icon="icon"></ot-icon>
        <slot></slot>
    </button>
</template>

<script>
import OtButton from './OtButton.vue';
export default {
    name: 'ot-radio-button',
    extends: OtButton,
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f', 'def-b' ],
                    hover: [ 'light-f-hov', 'def-bg-h', 'def-b-h' ],
                    active: [ 'def-bg-a', 'light-b-a' ],
                    selected: [ 'light-f-s', 'pri-bg-s' ],
                    disabled: [ 'def-f-dis', 'grey-bg-dis', 'def-b-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f', 'def-bg', 'def-b' ],
                    hover: [ 'def-f-hov', 'light-bg-hov', 'def-b-hov' ],
                    active: [ 'light-f-act', 'def-bg-act', 'def-b-act' ],
                    selected: [ 'light-f-s', 'pri-bg-s' ],
                    disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                };
        }
    },
    props: {
        value: {
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
                this.$parent.$emit('update:ot:radio:group', this.value);
            }
        },
        updateSelected(isSelected) {
            this.selected = isSelected;
        },
    },
};
</script>
