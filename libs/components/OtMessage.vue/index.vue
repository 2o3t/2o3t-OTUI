<template>
    <transition name="fade">
        <div ot class="ot-message" v-ot-bind="$otColors" :class="[$style.root, customClass]"
            v-show="visible" :center="center" :round="round" :position="position" :border="border" :size="$otSize"
            @mouseenter="clearTimer"
            @mouseleave="startTimer">
            <ot-icon :class="$style.icon" v-if="showIcon" :icon="icon ? icon : iconClass" :big="isBigIcon"></ot-icon>
            <div v-if="!message" :class="$style.content">
                <span :class="$style.title" :bold="isBoldTitle" v-if="title || $slots.title">
                    <!-- 标题的内容 -->
                    <slot name="title">{{ title }}</slot>
                </span>
                <!-- Description -->
                <slot>
                    <p :class="$style.description" v-if="description">{{ description }}</p>
                </slot>
            </div>
            <div v-else :class="$style.content" v-html="message"></div>
            <ot-icon v-ot-bind="$otColors.closeBtn" :class="$style.closeBtn" :icon="closeText === '' ? 'close' : ''" v-show="closable" @click="close">
                {{closeText}}
            </ot-icon>
        </div>
    </transition>
</template>

<script>
class VNode {}
const TYPE_CLASSES_MAP = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    question: 'question-circle',
    error: 'times-circle',
};
import theme from './theme.js';
export default {
    name: 'ot-message',
    mixins: [ theme ],
    // 提供文档使用
    docs: {
        // 提示标题
        title: {
            type: String,
            default: '',
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
            // 可选参数 [ `success`, `warning`, `info`, `error`, `question` ]
            validator: val =>
                [ 'success', 'warning', 'info', 'error', 'question' ].indexOf(val) > -1,
        },
        // 是否显示关闭按钮
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
        showIcon: {
            type: Boolean,
            default: true,
        },
        // 是否内容居中
        center: {
            type: Boolean,
            default: false,
        },
        // 允许使用 html 文本内容, 或者使用 VNode
        message: {
            type: [ String, VNode ],
            default: '',
        },
        // 自定义图标的类名，会覆盖 `type`
        icon: {
            type: String,
            default: '',
        },
        // 自定义 class
        customClass: {
            type: String,
            default: '',
        },
        // 显示时间, 毫秒。设为 0 则不会自动关闭
        duration: {
            type: Number,
            default: 3000,
        },
        // 关闭时的回调函数, 参数为被关闭的 message 实例
        onClose: {
            type: Function,
            default: null,
        },
        // 消息框显示位置
        position: {
            type: String,
            default: 'center',
            // 可选参数 [ `left`, `right`, `center` ]
            validator: val =>
                [ 'left', 'right', 'center' ].indexOf(val) > -1,
        },
    },
    data() {
        return {
            visible: false,
            closed: false,
            timer: null,

            // 提示标题
            title: '',
            // 辅助性文字。也可通过默认 slot 传入
            description: '',
            // 图标样式 // [ 'success', 'warning', 'info', 'error', 'question' ]
            type: 'info',
            // 是否可关闭
            closable: true,
            // 关闭按钮自定义文本
            closeText: '',
            // 是否显示图标
            showIcon: true,
            // 是否内容居中
            center: false,
            message: '',
            icon: '',
            duration: 3000,
            customClass: '',
            onClose: null,
            // 消息框位置: [ 'left', 'right', 'center' ]
            position: 'center',
        };
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
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false;
                this.$el.addEventListener('transitionend', this.destroyElement);
            }
        },
    },
    methods: {
        destroyElement() {
            this.$el.removeEventListener('transitionend', this.destroyElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close() {
            this.closed = true;
            if (typeof this.onClose === 'function') {
                this.onClose(this);
            }
        },
        clearTimer() {
            clearTimeout(this.timer);
        },
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration);
            }
        },
        keydown(e) {
            if (e.keyCode === 27) {
                // esc关闭消息
                if (!this.closed) {
                    this.close();
                }
            }
        },
    },
    mounted() {
        this.startTimer();
        this.$otUtils.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
        this.$otUtils.removeEventListener('keydown', this.keydown);
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
  min-width: 380px;
  box-sizing: border-box;
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s, transform 0.4s;
  overflow: hidden;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  display: flex;
  align-items: center;

  @include __ot_size__;

  &[position=left] {
    left: 2rem;
    transform: translateX(0%);
  }

  &[position=right] {
    left: auto;
    right: 2rem;
    transform: translateX(0%);
  }

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
    position: absolute;
    top: 0;
    bottom: 0;
    display: table;
    margin: auto;
    right: 15px;
  }
}
</style>

