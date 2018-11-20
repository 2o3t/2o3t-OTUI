<template>
    <a ot v-ot-bind="$otColors" class="ot-link" :class="$style.root" :href="currentHref" @click="handleClick" :line="line"
        v-on="listeners" :disabled="disabled" v-bind="$attrs"
        :target="target">
        <!-- 需要 link 的包裹容器 -->
        <slot></slot>
    </a>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-link',
    mixins: [ theme ],
    props: {
        // `a` 标签地址
        href: {
            type: [ String ],
            default: null,
        },
        // vue-router 路由, 跳转 名称 或 对象.
        to: {
            type: [ String, Object ],
            default: null,
        },
        // vue-router 跳转是否为 `replace`.
        replace: { type: Boolean, default: false },
        // vue-router 中 `append` 模式
        append: { type: Boolean, default: false },
        // 是否有下划线 UI
        line: {
            type: [ Boolean ],
            default: false,
        },
        // 禁用状态
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        // 原生 `a` 标签中`target`属性
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
            return null;
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
    box-sizing: border-box;
    text-decoration: none;

    @include __ot_size__;
}
</style>
