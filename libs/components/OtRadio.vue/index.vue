<template>
    <label ot v-ot-bind="$otColors" class="ot-radio" :class="$style.root" :size="$otSize"
        :selected="current==value"
        :disabled="disabled"
        :border="border" :round="round">
        <span ot v-ot-bind="$otColors.front" :class="$style.front" :selected="current==value" :disabled="disabled" border>
            <span ot v-ot-bind="$otColors.point" :class="$style.isChecked" :selected="current==value" :disabled="disabled"></span>
        </span>
        <div v-if="$slots.default" :class="$style.label">
            <slot></slot>
        </div>
        <input :class="$style.input" type="radio"
            v-on="$listeners"
            :disabled="disabled"
            :name="name"
            @click="handleChange"
            :value="value">
    </label>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-radio',
    mixins: [ theme ],
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        value: {
            type: [ String, Number, Boolean ],
            required: true,
        },
        model: [ String, Number, Boolean ],
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: [ String ],
    },
    data() {
        return {
            current: this.model,
        };
    },
    watch: {
        model(newV, oldV) {
            if (newV !== oldV) {
                this.current = newV;
            }
        },
    },
    mounted() {
        if (this.checked === true) {
            this.current = this.value;
            this.updateVal(this.value);
        }
    },
    methods: {
        updateSelected(now) {
            this.current = now;
        },
        updateVal(value) {
            this.$emit('update', value);
            if (this.$parent) {
                this.$parent.$emit('update:ot:radio:group', value);
            }
        },
        handleChange(e) {
            if (this.disabled) return;
            const value = e.target.value;
            this.updateVal(value);
        },
    },
};
</script>

<style lang="scss" module>
@import "../globals";
.root {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  vertical-align: middle;
  line-height: 1;

  .input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
    }
  }

  .front {
    display: inline-block;
    position: relative;
    border-radius: 50%;
    box-sizing: border-box;
    vertical-align: middle;
    margin: 1px;
    transition: all 0.3s;
    text-align: center;
    height: 2em;
    width: 2em;

    .isChecked {
      display: block;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: width 0.3s, height 0.3s;

      &[selected] {
        width: 4px;
        height: 4px;
      }
    }
  }

  .label {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
    padding: 0 5px;
  }

  &[border] {
    padding: 0.5em 1.5em 0.5em 1.2em;
  }

  @include __ot_size__;

  &[size="mini"] {
    &[border] {
        min-height: $--ot-mini-height;
    }
    &[round] {
        border-radius: $--ot-mini-radius;
    }

    .front {
      height: $--ot-mini-default - $--ot-offset-default;
      width: $--ot-mini-default - $--ot-offset-default;
    }
  }

  &[size="small"] {
    &[border] {
        min-height: $--ot-small-height;
    }
    &[round] {
        border-radius: $--ot-small-radius;
    }

    .front {
      height: $--ot-small-default - $--ot-offset-default;
      width: $--ot-small-default - $--ot-offset-default;
    }
  }

  &[size="normal"] {
    &[border] {
        min-height: $--ot-normal-height;
    }
    &[round] {
        border-radius: $--ot-normal-radius;
    }

    .front {
      height: $--ot-normal-default - $--ot-offset-default;
      width: $--ot-normal-default - $--ot-offset-default;

      .isChecked[selected] {
        width: 6px;
        height: 6px;
      }
    }
  }

  &[size="big"] {
    &[border] {
        min-height: $--ot-big-height;
    }
    &[round] {
        border-radius: $--ot-big-radius;
    }

    .front {
      height: $--ot-big-default - $--ot-offset-default;
      width: $--ot-big-default - $--ot-offset-default;

      .isChecked[selected] {
        width: 8px;
        height: 8px;
      }
    }
  }
}
</style>

