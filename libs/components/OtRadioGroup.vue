<template>
    <div ot :class="$style.root" class="ot-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-radio-group',
    props: {
        value: {
            type: [ String, Number, Boolean ],
            required: true,
        },
        checked: [ String, Number, Boolean ],
    },
    watch: {
        value(newV, oldV) {
            if (newV !== oldV) {
                this.checkSelected(newV);
            }
        },
    },
    methods: {
        _init_() {
            const children = this.$children;
            for (const child of children) {
                if (this.border) {
                    child.border = this.border;
                }
                if (this.round) {
                    child.round = this.round;
                }
                if (this.size) {
                    child.size = this.size;
                }
            }

            if (this.checked) {
                this.checkSelected(this.checked);
            }
        },
        _on() {
            this.$on('update:ot:radio:group', name => {
                this.checkSelected(name);
            });
        },
        _off() {
            this.$off('update:ot:radio:group');
        },
        checkSelected(name) {
            const children = this.$children;
            for (const child of children) {
                child.updateSelected(name);
            }
            this.handleInput(name);
        },
        handleInput(name) {
            this.$emit('input', name);
            this.$emit('change', name);
        },
    },
    mounted() {
        this._on();
        this.checkSelected(this.value);
        this._init_();
    },
    beforeDestroy() {
        this._off();
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
.ot-radio-group[ot] .ot-radio[ot] {
    float: left;
    position: relative;
    margin-left: -1px;
    box-sizing: border-box;
    padding: 10px 20px;

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
        z-index: 10;
    }
}
</style>
