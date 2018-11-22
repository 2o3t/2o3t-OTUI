<template>
    <transition name="ot-loading-fade" @after-leave="handleAfterLeave">
        <div v-show="visible" :class="[$style.root, customClass, { 'is-fullscreen': fullscreen }]"
            class="ot-loading-mask" :theme="$otTheme"
            :style="{ backgroundColor: background || '' }">

            <div :class="$style.loading" :size="$otSize">
                <figure :class="[$style.figure, $style.spinner]" v-if="_spinner === 'spinner'">
                    <ot-icon :ot-bind="$otColors.spinner" :class='$style.spinner' :icon="_icon" :lib="lib" loading size="3em"></ot-icon>
                </figure>
                <figure :class="[$style.figure, $style.pushing]" v-else-if="_spinner === 'push'">
                    <span ot v-ot-bind="$otColors.pushPri" selected></span>
                    <span ot v-ot-bind="$otColors.pushDef" selected></span>
                    <span ot v-ot-bind="$otColors.pushThe" selected></span>
                    <span ot v-ot-bind="$otColors.pushSuc" selected></span>
                    <span ot v-ot-bind="$otColors.pushWar" selected></span>
                    <span ot v-ot-bind="$otColors.pushDan" selected></span>
                    <span ot v-ot-bind="$otColors.pushInf" selected></span>
                </figure>
                <figure :class="[$style.figure, $style.vsco]" v-else-if="_spinner === 'vsco'">
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.a' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.b' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.c' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.d' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.e' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.f' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.g' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.h' selected></span>
                    <span ot v-ot-bind="$otColors.vsco" :class='$style.i' selected></span>
                </figure>
                <figure :class="[$style.figure, $style.spinner]" v-else>
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none"/>
                    </svg>
                </figure>
                <div ot v-ot-bind="$otColors.label">
                    <p :class="$style.label" v-if="text">{{ text }}</p>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-loading',
    mixins: [ theme ],
    props: {
        // 类型
        type: {
            type: [ String ],
            default: 'vsco', // 'push', 'spinner
        },
        // spinner 模式, 支持自定义图标
        icon: {
            type: String,
            default: 'loading',
        },
        // 图表库名称
        lib: String,
        // 文字
        label: [ String ],
        // 显示
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            text: this.label,
            spinner: null,
            background: null,
            fullscreen: true,
            visible: this.show,
            customClass: '',
        };
    },
    computed: {
        _spinner() {
            if (['vsco', 'push', 'spinner'].includes(this.spinner)) {
                return this.spinner;
            } else if (this.spinner) {
                return 'spinner';
            }
            return this.type || 'spinner';
        },
        _icon() {
            if (!['vsco', 'push', 'spinner'].includes(this.spinner)) {
                return this.spinner;
            }
            return this.icon;
        }
    },
    methods: {
        handleAfterLeave() {
            this.$emit('after-leave');
        },
        setText(text) {
            this.text = text;
        },
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
    position: absolute;
    z-index: 1000;
    background-color: rgba(255, 255, 255, .9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.3s;

    &[theme=dark] {
        background-color: rgba(30, 30, 30, .9);
    }

    &.is-fullscreen {
        z-index: 3000;
        position: fixed;
    }
}
.loading {
    position: absolute;
  box-sizing: border-box;
  min-height: 8em;
  min-width: 16em;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);

  @include __ot_root_block__;
  @include __ot_size__;

  .figure {
    position: relative;

    @include __ot_root_block__;
  }

  .label {
    font: 0.8em verdana;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 1em;
  }

  .spinner {
    display: block;
    // position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .pushing {
    display: block;
    // position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 12em;
    height: 3em;
    overflow: hidden;

    /*
    * Loading Dots
    * Can we use pseudo elements here instead :after?
    */
    span {
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      margin: 0.2em;
    //   background: #007db6;
      border-radius: 50%;
      animation: loading 1s infinite alternate;
    }

    /*
    * Dots Colors
    * Smarter targeting vs nth-of-type?
    */
    span:nth-of-type(2) {
    //   background: #008fb2;
      animation-delay: 0.2s;
    }
    span:nth-of-type(3) {
    //   background: #009b9e;
      animation-delay: 0.4s;
    }
    span:nth-of-type(4) {
    //   background: #00a77d;
      animation-delay: 0.6s;
    }
    span:nth-of-type(5) {
    //   background: #00b247;
      animation-delay: 0.8s;
    }
    span:nth-of-type(6) {
    //   background: #5ab027;
      animation-delay: 1s;
    }
    span:nth-of-type(7) {
    //   background: #a0b61e;
      animation-delay: 1.2s;
    }

    /*
        * Animation keyframes
        * Use transition opacity instead of keyframes?
        */
    @keyframes loading {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .vsco {
    display: block;
    box-sizing: border-box;
    // position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 6.25em;
    height: 6.25em;
    transform: rotate(45deg) translate(50%, 50%);
    transform-origin: center center;

    span {
      display: block;
      list-style-type: none;
      position: absolute;
      box-sizing: border-box;
      top: 0px;
      left: 0px;
      width: 0.6em;
      height: 0.6em;
      border-radius: 50%;
    }

    .a {
      animation: a 1s ease-in-out infinite;
      top: -1em;
      left: -1em;
    }

    .b {
      animation: b 1s ease-in-out infinite;
      top: -1em;
      left: 0px;
    }

    .c {
      animation: c 1s ease-in-out infinite;
      top: -1em;
      left: 1em;
    }

    .d {
      animation: d 1s ease-in-out infinite;
      top: 0px;
      left: -1em;
    }

    .e {
      animation: e 1s ease-in-out infinite;
      top: 0px;
      left: 0px;
    }

    .f {
      animation: f 1s ease-in-out infinite;
      top: 0px;
      left: 1em;
    }

    .g {
      animation: g 1s ease-in-out infinite;
      top: 1em;
      left: -1em;
    }

    .h {
      animation: h 1s ease-in-out infinite;
      top: 1em;
      left: 0px;
    }

    .i {
      animation: i 1s ease-in-out infinite;
      top: 1em;
      left: 1em;
    }

    @keyframes a {
      50% {
        top: 0px;
        left: -1em;
      }
      100% {
        top: 0px;
        left: -1em;
      }
    }
    @keyframes b {
      50% {
        top: -1em;
        left: -1em;
      }
      100% {
        top: -1em;
        left: -1em;
      }
    }
    @keyframes c {
      50% {
        top: -1em;
        left: 0px;
      }
      100% {
        top: -1em;
        left: 0px;
      }
    }
    @keyframes d {
      50% {
        top: 1em;
        left: -1em;
      }
      100% {
        top: 1em;
        left: -1em;
      }
    }
    @keyframes f {
      50% {
        top: -1em;
        left: 1em;
      }
      100% {
        top: -1em;
        left: 1em;
      }
    }
    @keyframes g {
      50% {
        top: 1em;
        left: 0px;
      }
      100% {
        top: 1em;
        left: 0px;
      }
    }
    @keyframes h {
      50% {
        top: 1em;
        left: 1em;
      }
      100% {
        top: 1em;
        left: 1em;
      }
    }
    @keyframes i {
      50% {
        top: 0px;
        left: 1em;
      }
      100% {
        top: 0px;
        left: 1em;
      }
    }
  }
}
</style>

<style>
.ot-loading-fade-enter,
.ot-loading-fade-leave-active {
    opacity: 0;
}
.ot-loading-parent--relative {
    position: relative !important;
}
.ot-loading-parent--hidden {
    overflow: hidden !important;
}
</style>

