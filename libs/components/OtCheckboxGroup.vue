<template>
    <div ot :class="$style.root" class="ot-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-checkbox-group',
    props: {
        value: {
            type: [ Array ],
            required: true,
        },
        min: [ Number ],
        max: [ Number ],
        all: [ Boolean ],
    },
    data() {
        return {
            current: this.value,
        };
    },
    watch: {
        value(newV, oldV) {
            if (newV !== oldV) {
                if (Array.isArray(newV)) {
                    this.current = newV;
                }
            }
        },
        all(newV) {
            this._all(newV);
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
        },
        _on() {
            this.$on('update:ot:checkbox:group', (name, checked) => {
                const curr = this.current;
                if (checked) {
                    if (!this.max || this.max > curr.length) {
                        if (!Array.prototype.includes.call(curr, name)) {
                            curr.push(name);
                        }
                    }
                } else {
                    if (!this.min || this.min < curr.length) {
                        const index = Array.prototype.indexOf.call(curr, name);
                        if (index >= 0) {
                            Array.prototype.splice.call(curr, index, 1);
                        }
                    }
                }
                this.checkSelected();
            });
        },
        _off() {
            this.$off('update:ot:checkbox:group');
        },
        _all(checked) {
            const children = this.$children;
            for (const child of children) {
                child.updateSelected(checked && child.value);
            }
        },
        checkSelected() {
            const curr = this.current;
            const children = this.$children;
            for (const child of children) {
                const one = curr.find(v => {
                    return v === child.value;
                });
                if (one) {
                    child.updateSelected(child.value);
                }
            }
            this.handleInput();
        },
        handleInput() {
            const curr = this.current;
            const children = this.$children;
            if (curr.length === children.length) {
                this.$emit('changeStatus', 'all');
            } else if (curr.length <= 0) {
                this.$emit('changeStatus', null);
            } else {
                this.$emit('changeStatus', 'half');
            }
            this.$emit('input', curr);
            this.$emit('change', curr);
        },
    },
    mounted() {
        this._on();
        this._init_();
        this.checkSelected();
    },
    beforeDestroy() {
        this._off();
    },
};
</script>

<style lang="scss" module>
// FIXME: 状态图标未处理
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
.ot-checkbox-group[ot] .ot-checkbox[ot] {
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


