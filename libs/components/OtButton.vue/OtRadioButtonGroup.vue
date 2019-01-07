<template>
    <div ot :class="$style.root" class="ot-radio-button-group" :round="round" :circle="circle">
        <!-- ot-radio-button 容器 -->
        <slot></slot>
    </div>
</template>

<script>
import OtButtonGroup from './OtButtonGroup.vue';
// const ExtendsOtButtonGroup = Object.assign({}, OtButtonGroup, { beforeCreate: null }); // 修复 cssmodule
export default {
    name: 'ot-radio-button-group',
    extends: OtButtonGroup,
    props: {
        // 数据源
        value: [ String ],
        // 大圆弧边UI
        circle: {
            type: [ Boolean ],
            default: false,
        },
    },
    watch: {
        value(newV, oldV) {
            if (newV === oldV) return;
            this.checkSelected(newV);
        },
    },
    methods: {
        checkSelected(value) {
            const children = this.$children;
            for (const child of children) {
                if (child.value === value) {
                    child.updateSelected(true);
                } else {
                    child.updateSelected(false);
                }
            }
        },
        handleInput(value) {
            this.$emit('input', value); // v-model 数据输入事件
            this.$emit('change', value); // 改变数据时, 回调
        },
    },
    mounted() {
        this.$on('update:ot:radio:group', value => {
            this.checkSelected(value);
            this.handleInput(value);
        });
        this.checkSelected(this.value);
    },
    beforeDestroy() {
        this.$off('update:ot:radio:group');
    },
};
</script>

<style lang="scss">
@import './scss/group';
</style>

