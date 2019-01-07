<template>
    <div ot :class="[$style.root]" :size="$otSize" :round="round"
    class="ot-carousel" :card="isCard"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div class="ot-carousel__container" :class="$style.container"
      :style="{ height: height }">
      <transition name="ot-carousel-arrow-left">
        <ot-button icon="angle-left" lib="font-ot" circle
          v-if="arrow !== 'never'" :class="[$style.arrow, $style.left]"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex - 1)"
          class="ot-carousel__arrow ot-carousel__arrow--left">
        </ot-button>
      </transition>
      <transition name="ot-carousel-arrow-right">
        <ot-button icon="angle-right" lib="font-ot" circle
          v-if="arrow !== 'never'" :class="[$style.arrow, $style.right]"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          @click.stop="throttledArrowClick(activeIndex + 1)"
          class="ot-carousel__arrow ot-carousel__arrow--right">
        </ot-button>
      </transition>
      <slot></slot>
    </div>
    <ul :class="$style.indicators"
      class="ot-carousel__indicators"
      v-if="indicatorPosition !== 'none'" :labels="hasLabel" :outside="outside">
      <li v-for="(item, index) in items" :key="index"
        class="ot-carousel__indicator" :active="index === activeIndex"
        :class="$style.indicator"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)">
        <button ot v-bind="outside ? $otColors.outsideIndicator : $otColors.indicator" :class="$style.button" class="ot-carousel__button"><span v-if="hasLabel">{{ item.label }}</span></button>
      </li>
    </ul>
  </div>
</template>

<script>
import theme from './theme.js';
import _throttle from 'lodash/throttle.js';
export default {
    name: 'ot-carousel',
    mixins: [ theme ],
    props: {
        initialIndex: {
            type: Number,
            default: 0,
        },
        height: String,
        trigger: {
            type: String,
            default: 'hover',
        },
        autoplay: {
            type: Boolean,
            default: true,
        },
        interval: {
            type: Number,
            default: 3000,
        },
        indicatorPosition: String,
        indicator: {
            type: Boolean,
            default: true,
        },
        arrow: {
            type: String,
            default: 'hover',
        },
        type: String,
        loop: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            items: [],
            activeIndex: -1,
            containerWidth: 0,
            timer: null,
            hover: false,
        };
    },
    computed: {
        outside() {
            return this.indicatorPosition === 'outside' || this.isCard;
        },
        isCard() {
            return this.type === 'card';
        },
        hasLabel() {
            return this.items.some(item => item.label.toString().length > 0);
        },
    },
    watch: {
        items(val) {
            if (val.length > 0) {
                this.setActiveItem(this.initialIndex);
            }
        },
        autoplay(val) {
            if (val) {
                this.startTimer();
            } else {
                this.pauseTimer();
            }
        },
        loop() {
            this.setActiveItem(this.activeIndex);
        },
        activeIndex(val, oldVal) {
            this.resetItemPosition(oldVal);
            this.$emit('change', val, oldVal); // 页面改变
        },
    },
    methods: {
        handleMouseEnter() {
            this.hover = true;
            this.pauseTimer();
        },
        handleMouseLeave() {
            this.hover = false;
            this.startTimer();
        },
        itemInStage(item, index) {
            const length = this.items.length;
            const a = (index === length - 1 && item.inStage && this.items[0].active);
            const b = (item.inStage && this.items[index + 1] && this.items[index + 1].active);
            const c = (index === 0 && item.inStage && this.items[length - 1].active);
            const d = (item.inStage && this.items[index - 1] && this.items[index - 1].active);
            if (a || b) {
                return 'left';
            } else if (c || d) {
                return 'right';
            }
            return false;
        },
        handleButtonEnter(arrow) {
            this.items.forEach((item, index) => {
                if (arrow === this.itemInStage(item, index)) {
                    item.hover = true;
                }
            });
        },
        handleButtonLeave() {
            this.items.forEach(item => {
                item.hover = false;
            });
        },
        updateItems() {
            this.items = this.$children.filter(child => {
                return child.$options.name === 'ot-carousel-item';
            });
        },
        resetItemPosition(oldIndex) {
            this.items.forEach((item, index) => {
                item.translateItem(index, this.activeIndex, oldIndex);
            });
        },
        playSlides() {
            if (this.activeIndex < this.items.length - 1) {
                this.activeIndex++;
            } else if (this.loop) {
                this.activeIndex = 0;
            }
        },
        pauseTimer() {
            clearInterval(this.timer);
        },
        startTimer() {
            if (this.interval <= 0 || !this.autoplay) return;
            this.timer = setInterval(this.playSlides, this.interval);
        },
        setActiveItem(index) {
            if (typeof index === 'string') {
                const filteredItems = this.items.filter(item => {
                    return item.name === index;
                });
                if (filteredItems.length > 0) {
                    index = this.items.indexOf(filteredItems[0]);
                }
            }
            index = Number(index);
            if (isNaN(index) || index !== Math.floor(index)) {
                process.env.NODE_ENV !== 'production' &&
          console.warn('[OTUI Warn][Carousel]index must be an integer.');
                return;
            }
            const length = this.items.length;
            const oldIndex = this.activeIndex;
            if (index < 0) {
                this.activeIndex = this.loop ? length - 1 : 0;
            } else if (index >= length) {
                this.activeIndex = this.loop ? 0 : length - 1;
            } else {
                this.activeIndex = index;
            }
            if (oldIndex === this.activeIndex) {
                this.resetItemPosition(oldIndex);
            }
        },
        prev() {
            this.setActiveItem(this.activeIndex - 1);
        },
        next() {
            this.setActiveItem(this.activeIndex + 1);
        },
        handleIndicatorClick(index) {
            this.activeIndex = index;
        },
        handleIndicatorHover(index) {
            if (this.trigger === 'hover' && index !== this.activeIndex) {
                this.activeIndex = index;
            }
        },
    },
    created() {
        this.throttledArrowClick = _throttle(index => {
            this.setActiveItem(index);
        }, 300);
        this.throttledIndicatorHover = _throttle(index => {
            this.handleIndicatorHover(index);
        }, 300);
    },
    mounted() {
        const addResizeListener = this.$otUtils.resizeEvent.addResizeListener;
        this.updateItems();
        this.$nextTick(() => {
            addResizeListener(this.$el, this.resetItemPosition);
            if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
                this.activeIndex = this.initialIndex;
            }
            this.startTimer();
        });
    },
    beforeDestroy() {
        const removeResizeListener = this.$otUtils.resizeEvent.removeResizeListener;
        if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
  overflow-x: hidden;
  position: relative;

  @include __ot_size__;

  &[round] {
    @include __ot_round__;
  }

  $--index-normal: 1;
  $--carousel-indicator-width: 2em;
  $--carousel-indicator-height: 2px;
  $--carousel-indicator-padding-horizontal: 4px;
  $--carousel-indicator-padding-vertical: 1em;

  .container {
    position: relative;
    height: 30em;
  }

  .arrow {
    transition: 0.3s;
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);

    &.left {
      left: 1em;
    }

    &.right {
      right: 1em;
    }
  }

  .indicators {
    position: absolute;
    list-style: none;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 0;
    z-index: #{$--index-normal + 1};

    &[outside] {
      bottom: 1em;
      text-align: center;
      position: static;
      transform: none;

      .indicator:hover .button {
        opacity: 0.64;
      }

      .button {
        opacity: 0.24;
      }
    }

    &[labels] {
      left: 0;
      right: 0;
      transform: none;
      text-align: center;

      .button {
        height: auto;
        width: auto;
        padding: 2px 18px;
        font-size: 12px;
      }

      .indicator {
        padding: 6px 4px;
      }
    }

    .indicator {
      display: inline-block;
      background-color: transparent;
      padding: $--carousel-indicator-padding-vertical
        $--carousel-indicator-padding-horizontal;
      cursor: pointer;

      &:hover .button {
        opacity: 0.72;
      }

      &[active] {
        .button {
          opacity: 1;
        }
      }
    }

    .button {
      display: block;
      opacity: 0.48;
      width: $--carousel-indicator-width;
      height: $--carousel-indicator-height;
      border: none;
      outline: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      transition: 0.3s;
    }
  }
}
</style>

<style>
.ot-carousel-arrow-left-enter,
.ot-carousel-arrow-left-leave-active {
  transform: translateY(-50%) translateX(-10px);
  opacity: 0;
}

.ot-carousel-arrow-right-enter,
.ot-carousel-arrow-right-leave-active {
  transform: translateY(-50%) translateX(10px);
  opacity: 0;
}
</style>
