<template>
    <ot-modal :name="`ot-message-box-${name}`" @closed="onClosed" v-bind="_options">
        <div ot class="ot-message-box" :class="[$style.root, customClass]" :center="center" :size="$otSize">
            <div :class="$style.header">
                <div :class="$style.title">
                    <ot-icon :icon="icon" v-if="icon && center"></ot-icon>
                    <span>{{ title }}</span>
                </div>
                <ot-icon v-ot-bind="$otColors.closeBtn" :class="$style.closeBtn" :icon="closeText === '' ? 'close' : ''" v-if="closable" @click="hide">
                    {{closeText}}
                </ot-icon>
            </div>
            <div :class="$style.content">
                <slot>
                    <ot-icon :icon="icon" v-if="icon && !center && (message || description)"></ot-icon>
                    <div :class="$style.message" v-if="description">
                        <p>{{ description }}</p>
                    </div>
                    <div :class="$style.message" v-if="message">
                        <p v-html="message"></p>
                    </div>
                </slot>
            </div>
            <div :class="$style.btns">
                <ot-button v-if="showCancelButton" @click="handleCancel">{{ cancelButtonText }}</ot-button>
                <ot-button v-if="showConfirmButton" @click="handleConfirm">{{ confirmButtonText }}</ot-button>
            </div>
        </div>
    </ot-modal>
</template>

<script>
import theme from './theme.js';
export default {
    mixins: [ theme ],
    data() {
        return {
            //   name: "",
            //   closedCallback: null,
            //   closeText: "",
            //   cancelButtonText: "取消",
            //   confirmButtonText: "确定",
            //   title: "标题名称",
            //   description: "",
            //   message: "",
            //   icon: "",
            //   center: "",
            //   customClass: "",
            //   closable: true
        };
    },
    computed: {
        _options() { // 自带
            return {
                width: '420px',
                height: 'auto',
                minHeight: 160,
                clickToClose: this._type !== 'alert',
            };
        },
        _type() {
            return this.name;
        },
    },
    methods: {
        show() {
            this.$modal.show(`ot-message-box-${this.name}`);
        },
        hide() {
            this.$modal.hide(`ot-message-box-${this.name}`);
        },
        onClosed() {
            this.closedCallback && this.closedCallback();
        },
        handleCancel() {
            if (this.__callback__) {
                if (this.__callback__.reject) {
                    this.__callback__.reject();
                }
            }
            this.hide();
        },
        handleConfirm() {
            if (this.__callback__) {
                if (this.__callback__.resolve) {
                    this.__callback__.resolve();
                }
            }
            this.hide();
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  @include __ot_size__;

  .header {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 1em 1.5em;

    .title {
      flex: 1 1 auto;
        font-size: $--ot-h3-size;
    }

    .closeBtn {
      flex: 0 0 auto;
      display: table;
      margin: auto;
    }
  }

  .content {
    flex: 1 1 100%;
    position: relative;
    padding: 1em 1.5em;

    .message {

    }
  }

  .btns {
      text-align: right;
    flex: 0 0 auto;
    position: relative;
    padding: 1em 1.5em;
  }
}
.v--modal {
    background-color: transparent;
}
</style>
