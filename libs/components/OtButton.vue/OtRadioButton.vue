<template>
    <button ot v-bind="$otColors" @click="handleClick" :size="$otSize" type="button" :class="$style.root" class="ot-radio-button"
        :selected="selected" :disabled="disabled" :round="round">
        <ot-icon v-if="icon" :icon="icon">
            <!-- 有 icon 时 -->
            <slot></slot>
        </ot-icon>
        <!-- 无 icon 时 -->
        <slot v-else></slot>
    </button>
</template>

<script>
import theme from './theme.js';
import OtButton from './index.vue';
export default {
    name: 'ot-radio-button',
    extends: OtButton,
    mixins: [ theme ],
    props: {
        // 数据源
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
