<template>
    <li ot v-bind="$otColors" class="ot-nav-item" :size="$otSize"
        :class="$style.root" @click="handleClick"
        :disabled="disabled" :selected="isSelected">
        <ot-link :class="$style.link" :href="href" :router="router">
            <ot-icon :class="$style.icon" :icon="icon" v-if="icon"></ot-icon>
            <slot name="title" v-if="!isCollapse"></slot>
            <slot></slot>
        </ot-link>
    </li>
</template>

<script>
export default {
    name: 'ot-nav-item',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'dark-f' ],
                    hover: [ 'dark-f-h' ],
                    active: [ 'pri-bg-act' ],
                    selected: [ 'pri-bg-sel', 'light-f-s' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-h', 'def-bg-h' ],
                    active: [ 'pri-f-a', 'def-bg-a' ],
                    selected: [ 'pri-f-s', 'def-bb-s', 'after' ],
                    // disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                };
        }
    },
    props: {
        icon: [ String ],
        index: [ String ],
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        href: {
            type: [ String ],
            default: null,
        },
        router: {
            type: [ String, Object ],
            default: null,
        },
    },
    computed: {
        isCollapse() {
            let result = false;
            if (this.$parent && this.$parent.isCollapse) {
                result = this.$parent.isCollapse;
            }
            return result;
        },
        isSelected() {
            let result = false;
            if (this.$parent && this.$parent.value) {
                const s = this.$parent.value;
                result = (s === this.index);
            } else if (this.$route && this.router) {
                if (typeof this.router === 'string') {
                    result = (this.$route.fullPath === this.router);
                } else if (typeof this.router === 'object' && this.router.name) {
                    result = (this.$route.name === this.router.name);
                }
            }
            return result;
        },
    },
    methods: {
        handleClick() {
            if (this.$parent) {
                this.$parent.$emit('input', this.index);
            }
            if (this.$router) {
                if (this.index && !this.router && !this.href) {
                    this.$router.push(this.index);
                }
            }
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    display: block;
    cursor: pointer;
    transition: all .3s;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    list-style: none;

    .link {
        display: inline-block;
        padding: 0 2rem;
        position: relative;
        border: none !important;
        width: 100%;
        height: 100%;

        &:hover {
            color: inherit;
        }
    }

    @include __ot_size__;

    &:after {
        content: '';
        transition: width .3s;
        width: 0%;
    }

    &[selected] {
        &:after {
            display: block;
            position: absolute;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            bottom: 0;
            border-bottom-width: 3px !important;
        }
    }

    .icon {
        transition: padding .3s;
        padding-right: 10px;
    }
}
</style>

