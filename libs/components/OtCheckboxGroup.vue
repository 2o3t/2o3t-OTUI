<template>
    <div ot :class="$style.root" class="ot-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ot-checkbox-group',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        model: {
            type: [ Array ],
            required: true,
        },
        min: [ Number ],
        max: [ Number ],
        all: [ Boolean ],
    },
    watch: {
        model(newV) {
            if (Array.isArray(newV)) {
                this.$nextTick(() => {
                    this.checkSelected();
                });
            }
        },
        all(newV, oldV) {
            if (newV !== oldV) {
                this._all(newV);
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
        },
        _selectOne(value, checked) {
            const curr = this.model;
            if (checked) {
                if (!this.max || this.max > curr.length) {
                    if (!Array.prototype.includes.call(curr, value)) {
                        curr.push(value);
                    }
                }
            } else {
                if (!this.min || this.min < curr.length) {
                    const index = Array.prototype.indexOf.call(curr, value);
                    if (index >= 0) {
                        curr.splice(index, 1);
                    }
                }
            }
        },
        _on() {
            this.$on('update:ot:checkbox:group', (value, checked) => {
                this._selectOne(value, checked);
            });
        },
        _off() {
            this.$off('update:ot:checkbox:group');
        },
        _all(checked) {
            const children = this.$children;
            for (const child of children) {
                const value = child.value;
                this._selectOne(value, checked);
            }
            this.checkSelected();
        },
        checkSelected() {
            const curr = this.model;
            const children = this.$children;
            for (const child of children) {
                if (curr.includes(child.value)) {
                    child.updateSelected(child.value);
                } else {
                    child.updateSelected();
                }
            }
            this.handleInput();
        },
        handleInput() {
            const curr = this.model;
            this.$emit('update', curr);

            const children = this.$children;
            if (curr.length === children.length && curr.length !== 0) {
                this.$emit('changeStatus', 'all', curr);
            } else if (curr.length <= 0) {
                this.$emit('changeStatus', null, curr);
            } else {
                this.$emit('changeStatus', 'half', curr);
            }
        },
    },
    mounted() {
        this._on();
        this._init_();
        this.checkSelected();
    },
    updated() {
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
.ot-checkbox-group[ot] .ot-checkbox[ot] {
    float: left;
    position: relative;
    margin-left: -1px;
    box-sizing: border-box;
    padding: 0.6em 1.5em 0.6em 1.2em;

    @include __ot_size__;

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

