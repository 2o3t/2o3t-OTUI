<template>
    <div ot v-show="ready" :size="$otSize"
    class="ot-carousel-item"
    :card="isCard" :active="active" :hover="hover"
    :inStage="inStage" :animating="animating"
    :class="$style.root"
    @click="handleItemClick"
    :style="itemStyle">
    <div :class="$style.mask"
      v-if="isCard"
      v-show="!active"
      class="ot-carousel__mask">
    </div>
    <slot></slot>
    </div>
</template>

<script>
const CARD_SCALE = 0.83;
export default {
    name: 'ot-carousel-item',
    props: {
        name: String,
        label: {
            type: [ String, Number ],
            default: '',
        },
    },
    data() {
        return {
            hover: false,
            translate: 0,
            scale: 1,
            active: false,
            ready: false,
            inStage: false,
            animating: false,
        };
    },
    computed: {
        isCard() {
            return this.$parent.type === 'card';
        },
        itemStyle() {
            const translate = this.translate;
            const scale = this.scale;
            return {
                msTransform: `translateX(${translate}px) scale(${scale})`,
                webkitTransform: `translateX(${translate}px) scale(${scale})`,
                transform: `translateX(${translate}px) scale(${scale})`,
            };
        },
    },
    methods: {
        processIndex(index, activeIndex, length) {
            if (activeIndex === 0 && index === length - 1) {
                return -1;
            } else if (activeIndex === length - 1 && index === 0) {
                return length;
            } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
                return length + 1;
            } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
                return -2;
            }
            return index;
        },
        calculateTranslate(index, activeIndex, parentWidth) {
            if (this.inStage) {
                return (
                    (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
                );
            } else if (index < activeIndex) {
                return (-(1 + CARD_SCALE) * parentWidth) / 4;
            }
            return ((3 + CARD_SCALE) * parentWidth) / 4;

        },
        translateItem(index, activeIndex, oldIndex) {
            const parentWidth = this.$parent.$el.offsetWidth;
            const length = this.$parent.items.length;
            if (this.$parent.type !== 'card' && oldIndex !== undefined) {
                this.animating = index === activeIndex || index === oldIndex;
            }
            if (index !== activeIndex && length > 2 && this.$parent.loop) {
                index = this.processIndex(index, activeIndex, length);
            }
            if (this.$parent.type === 'card') {
                this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
                this.active = index === activeIndex;
                this.translate = this.calculateTranslate(
                    index,
                    activeIndex,
                    parentWidth
                );
                this.scale = this.active ? 1 : CARD_SCALE;
            } else {
                this.active = index === activeIndex;
                this.translate = parentWidth * (index - activeIndex);
            }
            this.ready = true;
        },
        handleItemClick() {
            const parent = this.$parent;
            if (parent && parent.type === 'card') {
                const index = parent.items.indexOf(this);
                parent.setActiveItem(index);
            }
        },
    },
    created() {
        this.$parent && this.$parent.updateItems();
    },
    destroyed() {
        this.$parent && this.$parent.updateItems();
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    $--index-normal: 1;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: #{$--index-normal - 1};

    @include __ot_size__;

    &[active] {
        z-index: #{$--index-normal + 1};
    }

    &[animating] {
        transition: transform .4s ease-in-out;
    }

    &[card] {
        width: 50%;
        transition: transform .4s ease-in-out;
        &[inStage] {
            cursor: pointer;
            z-index: $--index-normal;

            &:hover .mask,
            &[hover] .mask {
                opacity: 0.12;
            }
        }
        &[active] {
            z-index: #{$--index-normal + 1};
        }
    }

    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.24;
        transition: .2s;
    }
}
</style>

<style lang="scss">
.ot-carousel__item .ot-carousel__mask {
    background-color: #fff;
}
</style>
