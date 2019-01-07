<template>
    <div ot v-bind="$otColors" class="ot-progress" :class="$style.root" :size="$otSize" :type="type">
        <div :class="$style.bar" class="ot-progress-bar" v-if="type === 'line'" :style="{minWidth: width + 'px'}">
            <div ot v-bind="$otColors.bg" :class="$style.barOuter" :style="{height: strokeWidth + 'px'}" :round="round">
                <div ot v-bind="$otColors.bar" :class="$style.barInner" :style="barStyle" selected :round="round">
                    <div v-if="animation" :class="$style.barAnimal"></div>
                    <div :class="$style.barInnerText" v-if="showText && textInside">{{percentage}}%</div>
                </div>
            </div>
        </div>
        <div :class="$style.circle" class="ot-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
            <svg viewBox="0 0 100 100">
                <path ot v-bind="$otColors.circleBg" :class="$style.circleTrack" :d="trackPath" :stroke-width="relativeStrokeWidth"></path>
                <path ot v-bind="$otColors.bar" selected :class="$style.circlePath" :d="trackPath" stroke-linecap="round" :stroke-width="relativeStrokeWidth" :style="circlePathStyle"></path>
            </svg>
        </div>
        <div :class="$style.text" :type="type"
            v-if="showText && !textInside"
            :style="{fontSize: progressTextSize + 'px'}"
            >
            <span v-if="!status">{{percentage}}%</span>
            <ot-icon v-else :icon="iconClass"></ot-icon>
        </div>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-progress',
    mixins: [ theme ],
    props: {
        // 进度条类型
        type: {
            type: String,
            default: 'line',
            // ["line", "circle"]
            validator: val => [ 'line', 'circle' ].indexOf(val) > -1,
        },
        // 百分比
        percentage: {
            type: Number,
            default: 0,
            required: true,
            // [0, 100]
            validator: val => val >= 0 && val <= 100,
        },
        // 进度条当前状态
        status: {
            type: String,
            // ["success", "exception"]
            validator: val => [ 'success', 'exception' ].indexOf(val) > -1,
        },
        // 进度条的宽度，单位 px
        strokeWidth: {
            type: Number,
            default: 6,
        },
        // 进度条显示文字内置在进度条内（只在 type=line 时可用）
        textInside: {
            type: Boolean,
            default: false,
        },
        // 环形进度条画布宽度（只在 type=circle 时可用）
        width: {
            type: Number,
            default: 126,
        },
        // 是否显示进度条文字内容
        showText: {
            type: Boolean,
            default: true,
        },
        // 进度条交互动画, 只支持 line 模式
        animation: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        barStyle() {
            const style = {};
            style.width = this.percentage + '%';
            return style;
        },
        relativeStrokeWidth() {
            return ((this.strokeWidth / this.width) * 100).toFixed(1);
        },
        trackPath() {
            const radius = parseInt(
                50 - parseFloat(this.relativeStrokeWidth) / 2,
                10
            );
            return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius *
        2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
        },
        perimeter() {
            const radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
            return 2 * Math.PI * radius;
        },
        circlePathStyle() {
            const perimeter = this.perimeter;
            return {
                strokeDasharray: `${perimeter}px,${perimeter}px`,
                strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
                transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease',
            };
        },
        iconClass() {
            if (this.type === 'line') {
                return this.status === 'success'
                    ? 'check-circle'
                    : 'times-circle';
            }
            return this.status === 'success' ? 'check' : 'times';

        },
        progressTextSize() {
            return this.type === 'line'
                ? 12 + this.strokeWidth * 0.4
                : this.width * 0.111111 + 2;
        },
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
  position: relative;
  line-height: 1;

  &[type=circle] {
      display: inline-block;
  }

  @include __ot_size__;

  .bar {
    padding-right: 5em;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-right: -5.2em;
    box-sizing: border-box;
  }

  .circle {
      .circleTrack {
          fill: none;
      }

      .circlePath {
          fill: none;
      }
  }

  .barOuter {
    height: 6px;
    overflow: hidden;
    position: relative;
    vertical-align: middle;

    &[round] {
        border-radius: 100px;
    }
  }

  .barInner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    text-align: right;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;

    &[round] {
        border-radius: 100px;
    }

    &:after {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
  }

  .barAnimal {
      position: absolute;
      width: 0px;
      height: 100%;
      background: white;
      opacity: 0.15;
      animation: process 6s linear infinite;
  }

  .barInnerText {
    display: inline-block;
    vertical-align: middle;
    margin: 0 5px;

    &:after {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
  }

  .text {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;

    &[type=circle] {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        transform: translateY(-50%);
    }
  }
}

@keyframes process {
    0% {
        width: 0%;
    }
    100% {
        width: 100%
    }
}
</style>
