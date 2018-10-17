<template>
    <div ot v-bind="$otColors.group" :class="$style.root" class="ot-row-group" :size="$otSize" :round="round">
        <div ot :class="$style.childs" childs :vertical="vertical" :fixable="fixable">
            <slot></slot>
        </div>
        <ot-button :class="$style.codeBtn" v-if="code" :theme="$otTheme" @click="showCode" dashed>{{ bShow ? 'Hide Code' : 'Show Code'}}</ot-button>
        <transition name="collapse">
            <ot-code ot v-bind="$otColors.code" :class="$style.code"
                :size="$otSize"
                v-if="code" v-show="bShow" lang="html"
                :value="code">
            </ot-code>
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
                    group: this.background ? [ 'pri-bg' ] : [],
                    code: {
                        normal: [ 'light-f', 'def-bl', 'def-br', 'def-bb' ],
                        hover: [ 'light-f-hov', 'def-bg-h', 'def-bl-h', 'def-br-h', 'def-bb-h' ],
                        active: [ 'def-bg-a', 'light-bl-a', 'light-br-a', 'light-bb-a' ],
                    },
                };
            case 'light':
            default:
                return {
                    group: this.background ? [ 'pri-bg' ] : [],
                    code: {
                        normal: [ 'def-f', 'grey-bl', 'grey-br', 'grey-bb' ],
                        hover: [
                            'def-f-hov',
                            'light-bg-hov',
                            'def-bl-hov',
                            'def-br-hov',
                            'def-bb-hov',
                        ],
                        active: [
                            'light-f-act',
                            'def-bg-act',
                            'def-bl-act',
                            'def-br-act',
                            'def-bb-act',
                        ],
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;

  &[round] {
      @include __ot_round__;
  }

  .childs {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    box-sizing: border-box;

    &[vertical] {
        flex-direction: column;
    }

    & > [ot] {
        box-sizing: border-box;
        flex: 0 0 auto;
    }

    &[fixable] > [ot] {
        margin: 5px 20px;
    }
  }

  .codeBtn {
      margin: 20px 10px 0;
  }

  .code {
      margin: 0 10px 20px;
  }
}
</style>

<style>
.collapse {
    transform-origin: 50% 0%;
    transform: scaleY(1);
}

.collapse-enter-active,
.collapse-leave-active {
    transform-origin: 50% 0%;
    transition: transform 0.3s;
}

.collapse-enter,
.collapse-leave-to {
    transform-origin: 50% 0%;
    transform: scaleY(0);
}
</style>
