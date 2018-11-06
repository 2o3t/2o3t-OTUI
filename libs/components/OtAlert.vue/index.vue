<template>
    <transition name="fade">
        <div ot class="ot-alert" v-ot-bind="$otColors" :class="$style.root" v-show="visible" :center="center" :round="round" :size="$otSize">
            <ot-icon :class="$style.icon" v-if="showIcon" :icon="iconClass" :big="isBigIcon"></ot-icon>
            <div :class="$style.content">
                <span :class="$style.title" :bold="isBoldTitle" v-if="title || $slots.title">
                    <!-- 标题的内容 -->
                    <slot name="title">{{ title }}</slot>
                </span>
                <!-- Description -->
                <slot>
                    <p :class="$style.description" v-if="description">{{ description }}</p>
                </slot>
            </div>
            <ot-icon v-ot-bind="$otColors.closeBtn" :class="$style.closeBtn" :icon="closeText === '' ? 'close' : ''" v-if="closable" @click="close">
                {{closeText}}
            </ot-icon>
        </div>
    </transition>
</template>

<script>
const TYPE_CLASSES_MAP = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    question: 'question-circle',
    error: 'times-circle',
};
import theme from './theme.js';
export default {
    name: 'ot-alert',
    mixins: [ theme ],
    props: {
    // 提示标题
        title: {
            type: String,
            default: '',
            required: true,
        },
        // 辅助性文字。也可通过默认 slot 传入
        description: {
            type: String,
            default: '',
        },
        // 图标样式
        type: {
            type: String,
            default: 'info',
            // [ 'success', 'warning', 'info', 'error', 'question' ]
            validator: val =>
                [ 'success', 'warning', 'info', 'error', 'question' ].indexOf(val) > -1,
        },
        // 是否可关闭
        closable: {
            type: Boolean,
            default: true,
        },
        // 关闭按钮自定义文本
        closeText: {
            type: String,
            default: '',
        },
        // 是否显示图标
        showIcon: Boolean,
        // 是否内容居中
        center: Boolean,
    },
    data() {
        return {
            visible: true,
        };
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('close'); // 关闭alert时触发的事件
        },
    },
    computed: {
        iconClass() {
            return TYPE_CLASSES_MAP[this.type] || 'info-circle';
        },
        isBigIcon() {
            return !!(this.description || this.$slots.default);
        },
        isBoldTitle() {
            return !!(this.description || this.$slots.default);
        },
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
  padding: 0.6em 1.2em;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  @include __ot_size__;

  &[center] {
    justify-content: center;
    text-align: center;
  }

  &[round] {
    @include __ot_round__;
  }

  .icon {
    display: table-cell;
    font-size: 1.2em;

    &[big] {
      margin-top: 0.2em;
      font-size: 2.4em;
    }
  }

  .content {
    display: table-cell;
    padding: 0 1em;
    flex: 1 1 auto;
  }

  .title {
    font-size: 1em;

    &[bold] {
      font-weight: 700;
    }
  }

  .description {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  .closeBtn {
    // position: absolute;
    // top: 0;
    // bottom: 0;
    display: table;
    margin: auto;
    // right: 15px;
  }
}
</style>
