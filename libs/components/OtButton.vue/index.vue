<template>
    <button ot v-ot-bind="$otColors" class="ot-button" @click="handleClick" :size="$otSize" type="button" :class="$style.root"
        :disabled="disabled" :round="round" :circle="circle" :icon="icon && !$slots.default" :border="border" :dashed="dashed">
        <ot-icon v-if="icon" :icon="icon" :lib="lib">
            <!-- 有 icon 时显示 -->
            <slot></slot>
        </ot-icon>
        <!-- 没有 icon 时显示 -->
        <slot v-else></slot>
    </button>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-button',
    mixins: [ theme ],
    props: {
        // `ot-icon` 的图标名称
        icon: [ String ],
        // ot-icon lib 图表库名称
        lib: String,
        // 禁用功能
        disabled: [ Boolean ],
        // 圆角UI
        circle: [ Boolean ],
        // 虚边UI
        dashed: [ Boolean ],
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e); // 触发点击事件
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    outline: none;
    box-shadow: none;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    transition: background .3s, color .3s;
    user-select:none;
    line-height: 1;

    &[dashed] {
      border-style: dashed;
    }

    &[size=mini] {
        padding: 0px 15px;
        min-height: $--ot-mini-height;
        font-size: $--ot-mini-size;

        &[round] {
            border-radius: $--ot-mini-radius;
        }

        &[circle] {
            border-radius: $--ot-mini-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-mini-height;
            }
        }
    }

    &[size=small] {
        padding: 0px 15px;
        min-height: $--ot-small-height;
        font-size: $--ot-small-size;

        &[round] {
            border-radius: $--ot-small-radius;
        }

        &[circle] {
            border-radius: $--ot-small-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-small-height;
            }
        }
    }

    &[size=normal] {
        padding: 0px 20px;
        min-height: $--ot-normal-height;
        font-size: $--ot-normal-size;

        &[round] {
            border-radius: $--ot-normal-radius;
        }

        &[circle] {
            border-radius: $--ot-normal-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-normal-height;
            }
        }
    }

    &[size=big] {
        padding: 0px 25px;
        min-height: $--ot-big-height;
        font-size: $--ot-big-size;

        &[round] {
            border-radius: $--ot-big-radius;
        }

        &[circle] {
            border-radius: $--ot-big-height;

            &[icon] {
                padding: 0;
                min-width: $--ot-big-height;
            }
        }
    }
}
</style>

