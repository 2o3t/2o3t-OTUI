<template>
    <div ot v-ot-bind="$otColors" v-highlight :class="$style.root" class="ot-code" :size="$otSize">
        <pre :class="`language-${lang}`" code>
            <code ot v-ot-bind="$otColors" :class="$style.code" :lang="lang" v-text="value"></code>
        </pre>
    </div>
</template>

<script>
import hljs from 'highlight.js';
// FIXME: 黑色主题下显示有问题
import 'highlight.js/styles/androidstudio.css'; // 样式文件
export default {
    name: 'ot-code',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    // code: {
                    //     normal: [ 'light-f', 'light-bl', 'light-br', 'light-bb' ],
                    //     hover: [ 'pri-bg-h', 'pri-bl-h', 'pri-br-h', 'pri-bb-h' ],
                    //     active: [ 'pri-bg-a', 'light-bl-a', 'light-br-a', 'light-bb-a' ],
                    // },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    // hover: [
                    //     'pri-f-hov',
                    //     'def-bg-hov',
                    //     'def-bl-hov',
                    //     'def-br-hov',
                    //     'def-bb-hov',
                    // ],
                    // active: [
                    //     'pri-f-act',
                    //     'def-bg-act',
                    //     'pri-bl-act',
                    //     'pri-br-act',
                    //     'pri-bb-act',
                    // ],
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
    props: {
        value: [ String ],
        lang: {
            type: [ String ],
            default: 'javascript',
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
pre[code] {

  .code-block[ot] {
    position: absolute;
    list-style: decimal;
    box-sizing: border-box;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
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

