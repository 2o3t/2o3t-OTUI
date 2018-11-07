<template>
    <div ot class="ot-markdown" :class="$style.root" :theme="$otTheme" :size="$otSize">
        <div ot v-ot-bind="$otColors" class="markdown" :class="customClass">
            <!-- 内容 (不推荐使用) -->
            <slot>
                <div ref="content"></div>
            </slot>
        </div>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-markdown',
    mixins: [theme],
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
    },
    watch: {
        content: {
            immediate: true,
            handler(val) {
                this.$nextTick(() => {
                    this.renderMD(val);
                });
            }
        }
    },
    data () {
        return {
            subVm: null,
        }
    },
    methods: {
        renderMD(content) {
            if (this.$slots.default) {
                return;
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
                });
            }
        },
        covertMD(content) {
            if (this.dangerouslyUseHTMLString) {
                return content;
            }
            const MarkdownIt = this.$otUtils.getOtPlugin('markdownIt');
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

            // 替换 ot-code
            $('pre>code').each((index, h) => {
                const preEl = h.parent;
                const html = $(h).html();
                // ="language-js"
                const codeClass = $(h).attr('class');
                if (codeClass) {
                    const attrs = codeClass.split('-');
                    const language = attrs[attrs.length - 1];
                    preEl.attribs.lang = language;
                }
                $(preEl).html(html);
                preEl.tagName = 'ot-code';
            });

            $('table').each((index, h) => {
                h.tagName = 'ot-table-ui';
                h.attribs.border = true;
            });

            $('a').each((index, h) => {
                h.tagName = 'ot-link';
            });

            const html = $('body').html();

            return html;
        }
    },
    beforeDestroy () {
        if (this.subVm) {
            this.subVm.$destroy();
            this.subVm = null;
        }
    }
}
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

