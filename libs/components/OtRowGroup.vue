<template>
    <div ot :class="$style.root" class="ot-row-group">
        <div :class="$style.childs">
            <slot></slot>
        </div>
        <ot-button :class="$style.codeBtn" v-if="code" :theme="$otTheme" @click="showCode">{{ bShow ? 'Hide Code' : 'Show Code'}}</ot-button>
        <transition name="collapse">
            <ot-code ot v-bind="$otColors.code" :class="$style.code" v-if="code" v-show="bShow" lang="html" :value="code"></ot-code>
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
                    code: {
                        normal: [ 'light-f', 'light-bl', 'light-br', 'light-bb' ],
                        hover: [ 'pri-bg-h', 'pri-bl-h', 'pri-br-h', 'pri-bb-h' ],
                        active: [ 'pri-bg-a', 'light-bl-a', 'light-br-a', 'light-bb-a' ],
                    },
                };
            case 'light':
            default:
                return {
                    code: {
                        normal: [ 'def-f', 'grey-bl', 'grey-br', 'grey-bb' ],
                        hover: [
                            'pri-f-hov',
                            'def-bg-hov',
                            'def-bl-hov',
                            'def-br-hov',
                            'def-bb-hov',
                        ],
                        active: [
                            'pri-f-act',
                            'def-bg-act',
                            'pri-bl-act',
                            'pri-br-act',
                            'pri-bb-act',
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
.root {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  margin-bottom: 20px;

  .childs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    box-sizing: border-box;

    & > [ot] {
      flex: 0 0 auto;
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
