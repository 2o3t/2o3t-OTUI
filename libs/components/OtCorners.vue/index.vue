<template>
    <div ot class="ot-corners" :class="$style.root" :size="$otSize">
        <ot-link :href="href" :to="to" :replace="replace" :append="append" :target="target"
            :class="$style.githubCorner" :title="title" v-on="$listeners">
            <svg :class="$style.svg" ot v-ot-bind="$otColors" selected :position="position"
                viewBox="0 0 250 250"
                aria-hidden="true">
                <!-- 可自定义图标 -->
                <slot>
                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                    <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" :class="$style['octo-arm']"></path>
                    <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
                </slot>
            </svg>
        </ot-link>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-corners',
    // http://tholman.com/github-corners/
    mixins: [ theme ],
    props: {
    // 悬停提示文字
        title: {
            type: String,
            default: 'View source on GitHub',
        },
        // `a` 标签地址
        href: {
            type: [ String ],
            default: null,
        },
        // vue-router 路由, 跳转 名称 或 对象.
        to: {
            type: [ String, Object ],
            default: null,
        },
        // vue-router 跳转是否为 `replace`.
        replace: { type: Boolean, default: false },
        // vue-router 中 `append` 模式
        append: { type: Boolean, default: false },
        // 原生 `a` 标签中`target`属性
        target: {
            type: [ String ],
            default: '_self',
        },
        // 可选择位置
        position: {
            type: String,
            default: 'right',
            // [ `right`, `left`, `bottom-right`, `bottom-left` ]
            validator: val =>
                [ 'right', 'left', 'bottom-right', 'bottom-left' ].indexOf(val) > -1,
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
  position: relative;
    width: 6em;
    height: 6em;

  @include __ot_size__;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  .githubCorner {
    &:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    .svg {
      background: none !important;
      stroke: none !important;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      border: 0;

      &[position$=right] {
           right: 0;
      }

      &[position$=left] {
          left: 0;
          transform: scale(-1, 1);
      }

      &[position^=bottom]{
          top: auto;
          bottom: 0;
          transform: scale(1, -1);
      }

      &[position=bottom-left] {
          transform: scale(-1, -1);
      }
    }
  }

  @media (max-width: 500px) {
    .githubCorner:hover .octo-arm {
      animation: none;
    }
    .githubCorner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
</style>

