<template>
    <label ot v-bind="$otColors" class="ot-radio" :class="$style.root" :size="$otSize" :selected="current==value" :disabled="disabled" :border="border" :round="round">
        <span ot v-bind="$otColors.front" :class="$style.front" :selected="current==value">
            <span ot v-bind="$otColors.point" :class="$style.isChecked" :selected="current==value"></span>
        </span>
        <div v-if="$slots.default" :class="$style.label">
            <slot></slot>
        </div>
        <input :class="$style.input" type="radio"
            :name="name"
            @click="handleChange"
            :value="value">
    </label>
</template>

<script>
export default {
    name: 'ot-radio',
    otDefaultColors(theme) {
        const border = this.border ? [ 'pri-b' ] : [];
        switch (theme) {
            case 'dark': {
                return {
                    front: {
                        normal: [ 'pri-b' ],
                    },
                    point: {
                        // normal: [ 'dark-bg' ],
                        selected: [ 'pri-bg-sel' ],
                    },
                    normal: [ 'light-f', ...border ],
                    hover: [ 'pri-f-h' ],
                    selected: [ 'pri-f-sel' ],
                    disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                };
            }
            case 'light':
            default: {
                return {
                    front: {
                        normal: [ 'light-bg', 'pri-b' ],
                        selected: [ 'pri-bg-sel' ],
                    },
                    point: {
                        normal: [ 'pri-bg' ],
                        selected: [ 'light-bg-sel' ],
                    },
                    normal: [ 'def-f', ...border ],
                    hover: [ 'pri-f-hov' ],
                    selected: [ 'pri-f-sel' ],
                    disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                };
            }
        }
    },
    model: {
        prop: 'model',
        event: 'change',
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
    },
    data() {
        return {
            current: '',
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
            this.updateVal(this.value);
        }
    },
    methods: {
        updateSelected(now) {
            this.current = now;
        },
        updateVal(value) {
            this.$emit('change', value);
            if (this.$parent) {
                this.$parent.$emit('update:ot:radio:group', value);
            }
        },
        handleChange(e) {
            const value = e.target.value;
            this.updateVal(value);
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
  }

  &[size="mini"] {
    // font-size: $--ot-mini-size;
    &[border] {
        padding: 5px 15px 5px 12px;
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
        padding: 8px 20px 8px 16px;
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
        padding: 10px 20px 10px 16px;
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
    // font-size: $--ot-big-size;
    &[border] {
        padding: 10px 20px 10px 16px;
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

