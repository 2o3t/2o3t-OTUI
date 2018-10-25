<template>
    <div ot v-ot-bind="$otColors.group" :class="$style.root" class="ot-row-group" :size="$otSize" :round="round">
        <div ot :class="$style.childs" childs :vertical="vertical" :fixable="fixable" :fill="fill">
            <slot></slot>
        </div>
        <ot-button :class="$style.codeBtn" v-if="code" @click="showCode" dashed>{{ bShow ? 'Hide Code' : 'Show Code'}}</ot-button>
        <transition name="collapse">
            <div ot v-ot-bind="$otColors.code" v-if="code" v-show="bShow" :class="$style.code">
                <ot-code :lang="lang" :value="code"></ot-code>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ot-row-group',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    group: this.background ? [ 'dark-bg' ] : [ ],
                    code: {
                        normal: [ 'def-bl', 'def-br', 'def-bb' ],
                        hover: [ 'def-bl-h', 'def-br-h', 'def-bb-h' ],
                    },
                };
            case 'light':
            default:
                return {
                    group: this.background ? [ 'def-bg' ] : [],
                    code: {
                        normal: [ 'grey-bl', 'grey-br', 'grey-bb' ],
                        hover: [ 'def-bl-hov', 'def-br-hov', 'def-bb-hov' ],
                    },
                };
        }
    },
    props: {
        code: {
            type: [ String ],
            default: '',
        },
        type: {
            type: [ String ],
            default: 'html',
        },
        vertical: [ Boolean ],
        fixable: {
            type: [ Boolean ],
            default: true,
        },
        background: [ Boolean ],
        lang: {
            type: String,
            default: 'vue',
        },
        fill: [ Boolean ],
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
@import './globals';
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;

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
  }
}
</style>
