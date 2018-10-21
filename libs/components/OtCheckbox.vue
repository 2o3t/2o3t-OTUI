<template>
    <label ot v-ot-bind="$otColors" @click="$emit('click', $event)" class="ot-checkbox" :class="$style.root" :size="$otSize" :selected="current===value" :disabled="disabled" :border="border" :round="round">
        <span ot v-ot-bind="$otColors.front" :class="$style.front" :selected="current===value" :disabled="disabled" :round="round">
            <span ot v-ot-bind="$otColors.point" :class="$style.isChecked" :selected="current===value" :disabled="disabled" :indeterminate="indeterminate"></span>
        </span>
        <div v-if="$slots.default" :class="$style.label">
            <slot></slot>
        </div>
        <input :class="$style.input" type="checkbox"
            v-on="$listeners"
            :disabled="disabled"
            :name="name"
            v-model="current"
            @change="handleChange"
            :value="value">
    </label>
</template>

<script>
export default {
    name: 'ot-checkbox',
    otDefaultColors(theme) {
        const borderNormal = this.border ? [ 'pri-b' ] : [];
        const borderDarkDisabled = this.border ? [ 'def-b-dis' ] : [];
        const borderLightDisabled = this.border ? [ 'def-bg-dis', 'def-b-dis' ] : [];
        switch (theme) {
            case 'dark': {
                return {
                    front: {
                        normal: [ 'pri-b' ],
                        disabled: [ 'pri-b-dis' ],
                    },
                    point: {
                        selected: [ 'pri-br-sel', 'pri-bb-sel' ],
                    },
                    normal: [ 'light-f', ...borderNormal ],
                    hover: [ 'pri-f-h' ],
                    selected: [ 'pri-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderDarkDisabled ],
                };
            }
            case 'light':
            default: {
                return {
                    front: {
                        normal: [ 'light-bg', 'pri-b' ],
                        selected: [ 'pri-bg-sel' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    point: {
                        selected: [ 'light-br-sel', 'light-bb-sel' ],
                    },
                    normal: [ 'def-f', ...borderNormal ],
                    hover: [ 'pri-f-hov' ],
                    selected: [ 'pri-f-sel' ],
                    disabled: [ 'def-f-dis', ...borderLightDisabled ],
                };
            }
        }
    },
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        value: {
            type: [ String, Number, Boolean ],
            required: true,
        },
        model: {
            type: [ String, Number, Boolean ],
            // required: true,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: [ String ],
        // 中间状态
        indeterminate: [ Boolean ],
    },
    data() {
        return {
            current: this.model,
        };
    },
    watch: {
        model(newV) {
            if (this.current !== newV) {
                this.current = newV;
            }
        },
    },
    mounted() {
        if (this.checked === true) {
            this.updateSelected(this.value);
        }
    },
    methods: {
        updateSelected(now) {
            this.current = now;
        },
        updateVal(value, checked) {
            if (this.disabled) return;
            this.$emit('update', checked && value);
            if (this.$parent) {
                this.$parent.$emit('update:ot:checkbox:group', value, checked);
            }
        },
        handleChange(e) {
            const checked = e.target.checked;
            this.updateVal(this.value, checked);
        },
    },
};
</script>

<style lang="scss" module>
@import "./globals";
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
    box-sizing: border-box;
    vertical-align: middle;
    margin: 1px;
    transition: all 0.3s;
    text-align: center;
    height: 2em;
    width: 2em;

    &[round] {
        border-radius: 0.2em;
    }

    .isChecked {
      display: block;
      position: absolute;
      box-sizing: content-box;
      margin: auto;
      top: -2px;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      transform: rotate(0deg) scaleY(0);
      transform-origin: center;
      transition: transform 0.3s;
      text-align: center;

      &[selected] {
        width: 3px;
        height: 7px;
        transform: rotate(45deg) scaleY(1);

        &[indeterminate] {
            width: 100% !important;
            height: 2px !important;
            border-right: 0px !important;
            transform: rotate(0deg) scaleX(0.5);
        }
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
    // font-size: $--ot-mini-size;
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
    // font-size: $--ot-small-size;
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
    // font-size: $--ot-normal-size;
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
        width: 4px;
        height: 9px;
      }
    }
  }

  &[size="big"] {
    // font-size: $--ot-big-size;
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
        width: 5px;
        height: 11px;
      }
    }
  }
}
</style>

