<template>
    <div ot :class="$style.root" class="ot-radio-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-radio-button-group',
    props: {
        value: [ String ],
    },
    watch: {
        value(newV, oldV) {
            if (newV === oldV) return;
            this.checkSelected(newV);
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
                    }
                });
            }
        },
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
            this.$emit('input', value);
            this.$emit('change', value);
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
@import './globals';
.ot-radio-button-group[ot] .ot-radio-button[ot] {
    float: left;
    position: relative;
    margin-left: -1px;
    box-sizing: border-box;

    &[round] {
        border-radius: 0;

        &:first-child {
            border-top-left-radius: $--ot-normal-radius;
            border-bottom-left-radius: $--ot-normal-radius;

            &[size=mini] {
                border-top-left-radius: $--ot-mini-radius;
                border-bottom-left-radius: $--ot-mini-radius;
            }

            &[size=small] {
                border-top-left-radius: $--ot-small-radius;
                border-bottom-left-radius: $--ot-small-radius;
            }

            &[size=normal] {
                border-top-left-radius: $--ot-normal-radius;
                border-bottom-left-radius: $--ot-normal-radius;
            }

            &[size=big] {
                border-top-left-radius: $--ot-big-radius;
                border-bottom-left-radius: $--ot-big-radius;
            }
        }

        &:last-child {
            border-top-right-radius: $--ot-normal-radius;
            border-bottom-right-radius: $--ot-normal-radius;

            &[size=mini] {
                border-top-right-radius: $--ot-mini-radius;
                border-bottom-right-radius: $--ot-mini-radius;
            }

            &[size=small] {
                border-top-right-radius: $--ot-small-radius;
                border-bottom-right-radius: $--ot-small-radius;
            }

            &[size=normal] {
                border-top-right-radius: $--ot-normal-radius;
                border-bottom-right-radius: $--ot-normal-radius;
            }

            &[size=big] {
                border-top-right-radius: $--ot-big-radius;
                border-bottom-right-radius: $--ot-big-radius;
            }
        }
    }

    &:hover, &:active {
        z-index: 1;
    }
}
</style>
