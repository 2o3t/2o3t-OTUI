<template>
    <div ot :theme="$otTheme" class="ot-menu-group" :size="$otSize"
         :class="$style.root">
         <div v-if="label" ot v-ot-bind="$otColors" :class="$style.label" :collapse="isCollapse">{{ label }}</div>
         <slot></slot>
    </div>
</template>

<script>
import theme from './OtMenuGroupTheme.js';
export default {
    name: 'ot-menu',
    mixins: [ theme ],
    props: {
        label: [ String ],
    },
    computed: {
        isCollapse() {
            let result = false;
            if (this.$parent && this.$parent.isCollapse) {
                result = this.$parent.isCollapse;
            }
            return result;
        },
    },
};
</script>

<style module lang='scss'>
@import '../globals';
.root {
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all .3s;
    box-sizing: border-box;

    @include __ot_size__;

    .label {
        padding: 0.6em 0.6em 0;
        transform: scaleY(1);
        transition: all .3s;

        &[collapse=true] {
            transform: scaleY(0);
        }
    }
}
</style>
