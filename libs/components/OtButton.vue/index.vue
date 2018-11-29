<template>
    <button ot v-ot-bind="$otColors" class="ot-button" @click="handleClick" v-on="listeners" :size="$otSize" type="button" :class="$style.root" :custom="custom"
        :disabled="disabled" :round="round" :circle="circle" :icon="(!!icon || !!url) && !$slots.default" :border="border" :dashed="dashed" v-bind="$attrs">
        <ot-icon v-if="icon || url" :icon="icon" :lib="lib" :url="url" :width="width" :height="height">
            <!-- 有 icon 时显示 -->
            <slot></slot>
        </ot-icon>
        <!-- 没有 icon 时显示 -->
        <slot v-else></slot>
    </button>
</template>

<script>
import theme from './theme.js';
import OtLink from '../OtLink.vue/index.vue';
const ExtendsOtLink = Object.assign({}, OtLink, { beforeCreate: null }); // 修复 cssmodule
export default {
    name: 'ot-button',
    mixins: [ theme ],
    extends: ExtendsOtLink,
    props: {
        // `ot-icon` 的图标名称
        icon: [ String ],
        // ot-icon lib 图表库名称
        lib: String,
        // ot-icon url
        url: String,
        //  `ot-icon` 宽度大小
        width: [ String, Number ],
        //  `ot-icon` 高度大小
        height: [ String, Number ],
        // 用于自定义时, 如 ot-upload-avatar
        custom: Boolean,
        // 禁用状态
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        // 圆角UI
        circle: [ Boolean ],
        // 虚边UI
        dashed: [ Boolean ],
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
    line-height: 0;

    &[dashed] {
      border-style: dashed;
    }

    @include __ot_size__;
    padding: 0px 2em;

    &:hover {
        @include __ot_box_shadow__;
    }

    &[size=mini] {
        min-height: $--ot-mini-height;

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
        min-height: $--ot-small-height;

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
        min-height: $--ot-normal-height;

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
        min-height: $--ot-big-height;

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

    &[custom] {
        &[circle] {
            border-radius: 50%;
        }

        &[round] {
            border-radius: 1em;
        }

        &[icon] {
            padding: 0;
            overflow: hidden;
        }
    }
}
</style>

