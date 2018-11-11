<template>
    <div ot class="ot-arrow" v-bind="$attrs" :class="$style.root" :placement="placement">
        <div :class="$style.box" :placement="placement">
            <i ot v-ot-bind="customColors" :class="$style.arrow" :animation="animation"
                :placement="placement" :border="border" :style="style"
                v-on="$listeners">
            </i>
        </div>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-arrow',
    mixins: [ theme ],
    props: {
    // 箭头方向, `up`, `down`, `left`, `right` 四个方向
        placement: {
            type: [ String ],
            default: 'up',
        },
        // 是否可以 hover 状态
        hover: {
            type: [ Boolean ],
            default: false,
        },
        // 自定义属性
        attrs: {
            type: Object,
            default() {
                return {};
            },
        },
        // 线颜色
        borderColor: {
            type: String,
            default: '',
        },
        // 旋转动画
        animation: Boolean,
    },
    computed: {
        customColors() {
            return Object.assign({}, this.$otColors, this.attrs);
        },
        style() {
            const style = {};
            if (this.borderColor) {
                style.borderColor = this.borderColor;
            }
            return style;
        },
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &[placement="up"] {
    transform: translateY(0.1em);
  }

  &[placement="down"] {
    transform: translateY(-0.1em);
  }

  &[placement="left"] {
    transform: translateX(0.1em);
  }

  &[placement="right"] {
    transform: translateX(-0.1em);
  }
}
.box {
  display: block;
  box-sizing: border-box;
  text-align: center;
  flex: 1 1 100%;

  @include __ot_root_block__;

  .arrow {
    display: table;
    margin: auto;
    width: 0.6em;
    height: 0.6em;
    transform: rotate(45deg);
    transform-origin: center;
    box-sizing: border-box;

    &[animation] {
        transition: transform 0.3s;
    }

    &[placement="up"] {
      transform: rotate(45deg);
    }

    &[placement="down"] {
      transform: rotate(225deg);
    }

    &[placement="right"] {
      transform: rotate(135deg);
    }

    &[placement="left"] {
      transform: rotate(315deg);
    }

    &:after {
      content: "";
      display: table-cell;
    }
  }

  @include __ot_size__;
}
</style>

<style lang="scss">
.ot-button[ot]:hover {
  .ot-arrow[ot] {
  }
}
</style>
