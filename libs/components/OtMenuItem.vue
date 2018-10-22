<template>
    <li ot v-ot-bind="$otColors" :class="$style.root" class="ot-menu-item" :size="$otSize"
        :disabled="disabled" :selected="isSelected" :collapse="isCollapse">
        <ot-link :class="$style.link" :href="href" :to="router" @click="handleClick">
            <ot-icon :class="$style.icon" :icon="icon" v-if="icon"></ot-icon>
            <slot name="title" v-if="!isCollapse"></slot>
            <slot></slot>
        </ot-link>
    </li>
</template>

<script>
export default {
    name: 'ot-menu-item',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'pri-f-h' ],
                    active: [ 'pri-bg-act' ],
                    selected: [ 'light-f-s', 'pri-bg-sel'],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-h' ],
                    active: [ 'pri-f-a' ],
                    selected: [ 'pri-f-s', 'pri-br-s', 'after' ],
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

<style module lang='scss'>
@import './globals';
.root {
    cursor: pointer;
    transition: all .3s;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    list-style: none;
    height: 4em;
    line-height: 4em;

    .link {
        display: inline-block;
        padding: 0 2rem;
        position: relative;
        border: none !important;
        width: 100%;
        height: 100%;
        color: inherit;

        &:hover {
            color: inherit;
        }
    }

    @include __ot_size__;

    &:after {
        content: '';
        transition: height .3s;
        height: 0%;
    }

    &[selected] {
        &:after {
            display: block;
            position: absolute;
            right: 0;
            height: 100%;
            transform: translateY(-50%);
            top: 50%;
            border-right-width: 3px !important;
        }
    }

    .icon {
        transition: padding .3s;
        padding-right: 10px;
    }

    &[collapse] {

        .icon {
            padding: 0 6px;
        }
    }
}
</style>
