<template>
    <div ot class="ot-markdown" :class="$style.root" :theme="$otTheme" :size="$otSize">
        <div ot v-ot-bind="$otColors" class="markdown" :class="customClass">
            <!-- 内容 (不推荐使用) -->
            <slot></slot>
            <div ref="content"></div>
        </div>
    </div>
</template>

<script>
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
                const slots = this.$slots.default;
                content = slots.map(item => {
                    if (item.elm) {
                        return item.elm.outerHTML;
                    }
                    return '';
                }).join('\n');
                delete this.$slots.default;
            }
            const Vue = this.$options.__OT_Vue__;
            if (Vue) {
                const html = this.covertMD(content);
                const el = this.$refs.content;
                const vm = this;
                this.subVm = new Vue({
                    template: `<div>${html}</div>`,
                    parent: vm,
                    el,
                    data: vm.data,
                });
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
            const cheerio = this.$otUtils.getOtPlugin('cheerio');
            if (!cheerio) {
                return;
            }

            const mdParser = new MarkdownIt();
            const result = mdParser.render(content);
            const $ = cheerio.load(result, {
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
            replaceTag($);
        },
    },
    beforeDestroy() {
        if (this.subVm) {
            this.subVm.$destroy();
            this.subVm = null;
        }
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

