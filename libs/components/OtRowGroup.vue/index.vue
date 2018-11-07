<template>
    <div ot v-ot-bind="$otColors.group" :class="$style.root" class="ot-row-group" :size="$otSize" :round="round">
        <div ot :class="$style.childs" childs :vertical="vertical" :fixable="fixable" :fill="fill" :flex="flex">
            <!-- 内容 -->
            <slot></slot>
        </div>
        <ot-button :class="$style.codeBtn" v-if="code" @click="showCode" border dashed>{{ bShow ? 'Hide Code' : 'Show Code'}}</ot-button>
        <transition name="collapse">
            <div ot v-ot-bind="$otColors.code" v-if="code" v-show="bShow" :class="$style.code" border>
                <ot-code :lang="lang" :value="code"></ot-code>
            </div>
        </transition>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-row-group',
    mixins: [ theme ],
    props: {
        // code 源代码
        code: {
            type: [ String ],
            default: '',
        },
        // 布局方向, 只支持 flex:true
        vertical: [ Boolean ],
        // 是否自动 margin
        fixable: {
            type: [ Boolean ],
            default: true,
        },
        // 是否填充背景
        background: [ Boolean ],
        // code 的语言
        lang: {
            type: String,
            default: 'vue',
        },
        // 空间多余时, 拉伸
        fill: [ Boolean ],
        // flex 布局
        flex: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            bShow: false,
        };
    },
    methods: {
        showCode() {
            this.bShow = !this.bShow;
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
  padding: 0.8em 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  margin-bottom: 1.2em;
  position: relative;

  &[round] {
      @include __ot_round__;
  }

  .childs {
    position: relative;
    display: block;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;

    &[flex] {
        display: flex;
    }

    &[vertical] {
        flex-direction: column;
        align-items: flex-start;
    }

    & > [ot] {
        box-sizing: border-box;
        flex: 0 0 auto;
    }

    &[fixable] > [ot] {
        margin: 0.5em 2em;
    }

    &[fill] > [ot] {
        flex-grow: 1;
    }
  }

  .codeBtn {
      margin: 2em 1em 0;
  }

  .code {
      margin: 0 1em 2em;
      padding-bottom: 1em;
  }
}
</style>
