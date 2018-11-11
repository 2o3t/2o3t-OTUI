<template>
    <li ot :theme="$otTheme" class="ot-menu-group" :size="$otSize" :expanded="bCollapse"
         :class="$style.root">
         <div v-if="label" ot v-ot-bind="$otColors" :class="$style.label" :collapse="isCollapse" @click="handleClickToggle">
             <h5>{{ label }}</h5>
             <ot-arrow :class="$style.arrow" :placement="bCollapse ? 'up' : 'down'" animation border></ot-arrow>
         </div>
         <ot-collapse-transition>
            <ul v-if="$slots.default" v-show="bCollapse">
                <slot></slot>
            </ul>
         </ot-collapse-transition>
    </li>
</template>

<script>
import theme from './OtMenuGroupTheme.js';
export default {
    name: 'ot-menu',
    mixins: [ theme ],
    provide() {
        return {
            $OtMenuGroup: this,
        };
    },
    inject: [ '$OtMenu' ],
    props: {
        // 组标题
        label: [ String ],
        // 是否支持收缩
        expand: {
            type: Boolean,
            default: true,
        },
        // 默认是否展开
        defaultExpanded: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            bCollapse: this.defaultExpanded,
        };
    },
    computed: {
        isCollapse() {
            let result = false;
            if (this.$OtMenu && this.$OtMenu.isCollapse) {
                result = this.$OtMenu.isCollapse;
            }
            return result;
        },
    },
    methods: {
        handleClickToggle() {
            if (!this.expand) {
                return;
            }
            this.bCollapse = !this.bCollapse;
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
    list-style-type: disc;
    list-style-position: inside;

    @include __ot_size__;

    .label {
        position: relative;
        height: 3em;
        line-height: 3em;
        margin: 0.4em 0;
        box-sizing: border-box;
        padding-right: 2em;

        transform: scaleY(1);
        transition: all .3s;

        &[collapse=true] {
            transform: scaleY(0);
        }

    }

    .arrow {
        position: absolute;
        right: 1em;
        bottom: 0.4em;
    }
}
</style>
