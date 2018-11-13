<template>
    <div ot class="ot-markdown" :class="$style.root" :size="$otSize" :theme="$otTheme">
        <div ot v-ot-bind="$otColors" class="markdown" :class="customClass" :theme="$otTheme">
            <!-- 内容 (不推荐使用) -->
            <slot></slot>
            <div v-if="!$slots.default" ot ref="content" :theme="$otTheme"></div>
        </div>
    </div>
</template>

<script>
import { otMixin } from '2o3t-css-colors/dist/2o3t-ui';
import replaceTag from './replaceTag.js';
import theme from './theme.js';
export default {
    name: 'ot-markdown',
    mixins: [ theme ],
    props: {
        // html template 内容
        content: {
            type: String,
            default: null,
        },
        // 是否直接传入 HTML 片段, 危险
        dangerouslyUseHTMLString: {
            type: Boolean,
            default: false,
        },
        // 自定义 class
        customClass: {
            type: String,
            default: '',
        },
        // 外部传入依赖的 data 数据
        data: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    watch: {
        content: {
            immediate: true,
            handler(val) {
                this.$nextTick(() => {
                    this.renderMD(val);
                });
            },
        },
    },
    data() {
        return {
            subVm: null,
        };
    },
    methods: {
        renderMD(content) {
            if (this.$slots.default) {
                return;
            }

            const Vue = this.$options.__OT_Vue__;
            if (Vue) {
                this.destroySubEl();

                const html = this.covertMD(content);
                const vm = this;

                this.subVm = new Vue({
                    template: `<div ot :theme="$otTheme">${html}</div>`,
                    mixins: [ otMixin ],
                    parent: vm,
                    data: vm.data,
                });

                this.bindSubEl();
            }
        },
        covertMD(content) {
            if (this.dangerouslyUseHTMLString) {
                return content;
            }
            const MarkdownIt = this.$otUtils.getOtPlugin('markdownit');
            if (!MarkdownIt) {
                return;
            }
            const mdParser = new MarkdownIt();
            content = mdParser.render(content);

            const cheerio = this.$otUtils.getOtPlugin('cheerio');
            if (!cheerio) {
                return;
            }
            const $ = cheerio.load(content, {
                decodeEntities: false,
                lowerCaseAttributeNames: false,
                lowerCaseTags: false,
            });

            // 替换标签
            this.replaceTag($);

            const html = $('body').html();

            return html;
        },
        replaceTag($) {
            return replaceTag($);
        },
        bindSubEl() {
            if (this.subVm) {
                const el = this.$refs.content;
                if (el) {
                    this.subVm.$mount(el);
                }
            }
        },
        destroySubEl() {
            if (this.subVm) {
                this.subVm.$destroy();
                this.subVm = null;
            }
        },
    },
    beforeDestroy() {
        this.destroySubEl();
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    @include __ot_size__;
}
</style>

<style lang="scss">
.ot-markdown {
    @import './markdown';
}
</style>

