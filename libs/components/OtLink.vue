<template>
    <a ot v-bind="$otColors" class="ot-link" :class="$style.root" :href="href" @click="handleClick">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'ot-link',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'pri-f' ],
                    hover: [ 'pri-f-h', 'pri-bb-h' ],
                    active: [ 'pri-f-a', 'light-bb-a' ],
                    disabled: [ 'pri-f-dis' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-hov', 'def-bb-hov' ],
                    active: [ 'pri-f-act', 'pri-bb-act' ],
                    disabled: [ 'def-f-dis' ],
                };
        }
    },
    props: {
        href: {
            type: [ String ],
            default: null,
        },
        router: {
            type: [ String, Object ],
            default: null,
        },
    },
    methods: {
        handleClick() {
            if (this.router && this.$router) {
                this.$router.push(this.router);
            }
        }
    }
}
</script>

<style lang="scss" module>
@import './globals';
.root {
    cursor: pointer;
    box-sizing: border-box;
    vertical-align: middle;
    text-decoration: none;

    @include __ot_size__;
}
</style>
