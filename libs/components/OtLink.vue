<template>
    <a ot v-bind="$otColors" class="ot-link" :class="$style.root" :href="href" @click="handleClick" :line="line"
        v-on="$listeners" :disabled="disabled"
        :target="target">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'ot-link',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark': {
                const c = {
                    normal: [ 'pri-f' ],
                    hover: [ 'pri-f-h' ],
                    active: [ 'pri-f-a' ],
                    disabled: [ 'pri-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('pri-bb');
                    c.hover.push('pri-bb-h');
                    c.active.push('light-bb-a');
                    c.disabled.push('pri-bb-dis');
                }
                return c;
            }
            case 'light':
            default: {
                const c = {
                    normal: [ 'def-f' ],
                    hover: [ 'pri-f-hov' ],
                    active: [ 'pri-f-act' ],
                    disabled: [ 'def-f-dis' ],
                };
                if (this.line) {
                    c.normal.push('def-bb');
                    c.hover.push('def-bb-hov');
                    c.active.push('pri-bb-act');
                    c.disabled.push('def-bb-dis');
                }
                return c;
            }
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
        line: [ Boolean ],
        disabled: [ Boolean ],
        target: {
            type: [ String ],
            default: '_blank',
        },
    },
    methods: {
        handleClick() {
            if (this.router && this.$router) {
                this.$router.push(this.router);
            }
        },
    },
};
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
