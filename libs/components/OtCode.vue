<template>
    <div ot v-ot-bind="$otColors" v-highlight :class="$style.root" class="ot-code" :size="$otSize">
        <div :class="$style.title">
            <ot-icon :class="$style.lang" icon="code">{{ lang }}</ot-icon>
            <ot-link @click="handleCopyClick">
                <ot-title-tip content="Copied!" manual v-model="bShown" placement="top" :arrow="false">
                    <span>复制代码</span>
                </ot-title-tip>
            </ot-link>
        </div>
        <pre :class="`language-${_lang}`" code>
            <code ot v-ot-bind="$otColors" :class="$style.code" :lang="lang" v-text="value"></code>
        </pre>
    </div>
</template>

<script>
import clipboard from 'clipboard-polyfill';
import hljs from 'highlight.js';
import 'highlight.js/styles/androidstudio.css'; // 样式文件
export default {
    name: 'ot-code',
    props: {
        value: [ String ],
        lang: {
            type: [ String ],
            default: 'javascript',
        },
        copy: [ Boolean ],
        showLang: [ Boolean ],
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                };
        }
    },
    directives: {
        highlight(el) {
            if (el.__inited_hljs__) return;
            const blocks = el.querySelectorAll('pre code');
            blocks.forEach(block => {
                hljs.highlightBlock(block);
            });
            let len = 1;
            blocks.forEach(block => {
                const html = block.innerHTML;
                const reg = html.match(/\n/g);
                if (reg) {
                    len += reg.length;
                }
            });

            if (len) {
                const blocks = el.querySelectorAll('pre');
                blocks.forEach(block => {
                    const ele = document.createElement('ol');
                    ele.className = 'code-block';
                    ele.setAttribute('ot', '');
                    let html = '';
                    for (let i = 0; i < len; i++) {
                        html += '<li ot class="code-line">' + (i + 1) + '</li>';
                    }
                    ele.innerHTML = html;
                    block.appendChild(ele);
                });
            }

            el.__inited_hljs__ = true;
        },
    },
    data() {
        return {
            bShown: false,
            iTimer: null,
        };
    },
    computed: {
        _lang() {
            // 特殊处理
            if (this.lang === 'vue') {
                return 'html';
            }
            return this.lang;
        },
    },
    methods: {
        handleCopyClick() {
            const content = this.value;
            clipboard.writeText(content);
            this.bShown = true;

            clearTimeout(this.iTimer);
            this.iTimer = setTimeout(() => {
                this.bShown = false;
                this.iTimer = null;
            }, 2000);
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;

  .title {
      text-align: right;
      opacity: 0.7;
      margin: 0 1em;
      line-height: 1.2;

      & *{
          font-size: 0.9em !important;
      }

      .lang {
          vertical-align: middle;
          margin: 0 1em;
          line-height: 2;
      }
  }

  pre[code] {
    box-sizing: border-box;
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    line-height: 1.2;
    display: flex;
    margin: 0;

    .code {
        width: 100%;
        overflow-x: auto;
        margin: 0px 0px 0 40px !important;
        background: none;
        padding: 0 0.5em;
    }
  }

    &[size=mini] {
        font-size: $--ot-mini-size;
    }

    &[size=small] {
        font-size: $--ot-small-size;
    }

    &[size=normal] {
        font-size: $--ot-normal-size;
    }

    &[size=big] {
        font-size: $--ot-big-size;
    }
}
</style>

<style lang="scss">
.ot-code>pre[code] {

  .code-block[ot] {
    position: absolute;
    list-style: decimal;
    box-sizing: border-box;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0 0.5em;
    margin: 0;
    width: 40px;
    text-align: right;
    border-right: 1px solid #ddd !important;
    font-weight: 500;
  }
  .code-line[ot] {
    list-style: none;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
  }

}
</style>

