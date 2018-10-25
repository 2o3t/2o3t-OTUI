<template>
    <button ot v-ot-bind="$otColors" @click="handleClick" :size="$otSize" type="button" :class="$style.root" class="ot-radio-button"
        :selected="selected" :disabled="disabled" :round="round">
        <ot-icon v-if="icon" :icon="icon"></ot-icon>
        <slot></slot>
    </button>
</template>

<script>
import OtButton from './index.vue';
import theme from './OtRadioButtonTheme.js';
export default {
    name: 'ot-radio-button',
    extends: OtButton,
    mixins: [ theme ],
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
