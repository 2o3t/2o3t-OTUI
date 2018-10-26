<template>
    <a ot v-ot-bind="$otColors" class="ot-link" :class="$style.root" :href="currentHref" @click="handleClick" :line="line"
        v-on="listeners" :disabled="disabled"
        :target="target">
        <slot></slot>
    </a>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-link',
    mixins: [ theme ],
    props: {
        href: {
            type: [ String ],
            default: null,
        },
        to: {
            type: [ String, Object ],
            default: null,
        },
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        line: [ Boolean ],
        disabled: [ Boolean ],
        target: {
            type: [ String ],
            default: '_self',
        },
    },
    computed: {
        // 使用`to`时，也产生一个链接，尽可能向原生的`<a>`靠近
        currentHref() {
            if (this.href) {
                return this.href;
            } else if (this.$router && this.to) {
                return this.$router.resolve(this.to, this.$route, this.append).href;
            }
            return undefined;
        },
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            return listeners;
        },
    },
    methods: {
        handleClick(e) {
            if (this.to) {
                if (!this.$router) {
                    return console.warn('[2o3t-ui]', 'Cannot find vue-router.');
                }

                e.preventDefault();

                const $router = this.$router;
                const { location } = $router.resolve(this.to, this.$route, this.append);

                if (this.target !== '_self') {
                    window.open(location, this.target);
                } else {
                    this.replace ? $router.replace(location) : $router.push(location);
                }
            }
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    cursor: pointer;
    box-sizing: border-box;
    vertical-align: middle;
    text-decoration: none;

    @include __ot_size__;
}
</style>
