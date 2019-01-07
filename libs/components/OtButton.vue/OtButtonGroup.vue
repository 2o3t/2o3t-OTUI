<template>
    <div ot :class="$style.root" class="ot-button-group" :round="round" :circle="circle">
        <!-- ot-button 容器 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-button-group',
    props: {
        // 大圆弧边UI
        circle: {
            type: [ Boolean ],
            default: false,
        },
    },
    created() {
        this.updateChild();
    },
    beforeUpdate() {
        this.updateChild();
    },
    methods: {
        updateChild() {
            const $slots = this.$slots && this.$slots.default;
            if ($slots) {
                $slots.forEach(item => {
                    if (item.data) {
                        if (!item.data.attrs) {
                            item.data.attrs = {};
                        }
                        item.data.attrs.round = this.round;
                        item.data.attrs.circle = this.circle;
                    }
                });
            }
        },
    },
};
</script>

<style lang="scss" module>
.root {
    display: inline-block;
    vertical-align: middle;

    &:before, &:after {
        display: table;
        content: "";
    }
    &:after {
        clear: both;
    }
}
</style>

<style lang="scss">
@import './scss/group';
</style>
