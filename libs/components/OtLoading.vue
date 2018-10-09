<template>
    <div :class="$style.root" :size="$otSize">
        <figure :class="$style.pushing" v-if="type === 'push'">
            <h2>{{ label }}</h2>
            <span ot v-bind="$otColors.pushPri"></span>
            <span ot v-bind="$otColors.pushDef"></span>
            <span ot v-bind="$otColors.pushThe"></span>
            <span ot v-bind="$otColors.pushSuc"></span>
            <span ot v-bind="$otColors.pushWar"></span>
            <span ot v-bind="$otColors.pushDan"></span>
            <span ot v-bind="$otColors.pushInf"></span>
        </figure>
        <figure :class="$style.vsco" v-if="type === 'vsco'">
            <span ot v-bind="$otColors.vsco" :class='$style.a'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.b'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.c'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.d'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.e'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.f'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.g'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.h'></span>
            <span ot v-bind="$otColors.vsco" :class='$style.i'></span>
        </figure>
        <figure :class="$style.circle" v-if="type === 'circle'">
            <div :class="[$style.dot, $style.white]"></div>
            <div ot v-bind="$otColors.one" :class="$style.dot"></div>
            <div ot v-bind="$otColors.two" :class="$style.dot"></div>
            <div ot v-bind="$otColors.three" :class="$style.dot"></div>
            <div ot v-bind="$otColors.four" :class="$style.dot"></div>
        </figure>
    </div>
</template>

<script>
export default {
    name: 'ot-loading',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    vsco: [ 'def-bg' ],
                    one: [ 'success-bg' ],
                    two: [ 'warning-bg' ],
                    three: [ 'danger-bg' ],
                    four: [ 'info-bg' ],
                    pushPri: 'pri-bg',
                    pushDef: 'def-bg',
                    pushThe: 'lig-bg',
                    pushSuc: 'suc-bg',
                    pushWar: 'war-bg',
                    pushDan: 'dan-bg',
                    pushInf: 'inf-bg',
                };
            case 'light':
            default:
                return {
                    vsco: [ 'pri-bg' ],
                    one: [ 'def-bg' ],
                    two: [ 'success-bg' ],
                    three: [ 'dark-bg' ],
                    four: [ 'pri-bg' ],
                    pushPri: 'pri-bg',
                    pushDef: 'def-bg',
                    pushThe: 'dar-bg',
                    pushSuc: 'suc-bg',
                    pushWar: 'war-bg',
                    pushDan: 'dan-bg',
                    pushInf: 'inf-bg',
                };
        }
    },
    props: {
        type: {
            type: [ String ],
            default: 'vsco', // 'circle'
        },
        label: [ String ],
    },
    methods: {},
};
</script>

<style lang="scss" module>
@import "./globals";
.root {
  position: relative;
  box-sizing: border-box;
  min-height: 80px;
  min-width: 200px;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;

  &[size="mini"] {
    font-size: $--ot-mini-size;
  }

  &[size="small"] {
    font-size: $--ot-small-size;
  }

  &[size="normal"] {
    font-size: $--ot-normal-size;
  }

  &[size="big"] {
    font-size: $--ot-big-size;
  }

  .circle {
    display: block;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 6.25em;
    height: 6.25em;
    animation: rotate 2.4s linear infinite;

    .white {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      animation: flash 2.4s linear infinite;
      opacity: 0;
    }
    .dot {
      position: absolute;
      margin: auto;
      width: 2.4em;
      height: 2.4em;
      border-radius: 50%;
      transition: all 1s ease;
    }
    .dot:nth-child(2) {
      top: 0;
      bottom: 0;
      left: 0;
      animation: dotsY 2.4s linear infinite;
    }
    .dot:nth-child(3) {
      left: 0;
      right: 0;
      top: 0;
      animation: dotsX 2.4s linear infinite;
    }
    .dot:nth-child(4) {
      top: 0;
      bottom: 0;
      right: 0;
      animation: dotsY 2.4s linear infinite;
    }
    .dot:nth-child(5) {
      left: 0;
      right: 0;
      bottom: 0;
      animation: dotsX 2.4s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      10% {
        width: 6.25em;
        height: 6.25em;
      }
      66% {
        width: 2.4em;
        height: 2.4em;
      }
      100% {
        transform: rotate(360deg);
        width: 6.25em;
        height: 6.25em;
      }
    }

    @keyframes dotsY {
      66% {
        opacity: 0.1;
        width: 2.4em;
      }
      77% {
        opacity: 1;
        width: 0;
      }
    }
    @keyframes dotsX {
      66% {
        opacity: 0.1;
        height: 2.4em;
      }
      77% {
        opacity: 1;
        height: 0;
      }
    }

    @keyframes flash {
      33% {
        opacity: 0;
        border-radius: 0%;
      }
      55% {
        opacity: 0.6;
        border-radius: 50%;
      }
      66% {
        opacity: 0;
      }
    }
  }

  .pushing {
    display: block;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 12em;
    height: 3em;

    h2 {
      color: #ccc;
      margin: 0;
      font: 0.8em verdana;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

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
    position: absolute;
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

