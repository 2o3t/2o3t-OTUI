<template>
    <span v-if="type !== 'textarea'" ot v-ot-bind="$otColors" class="ot-input" :class="$style.root"
        :size="$otSize" :round="round" :circle="circle">
        <span ot v-ot-bind="$otColors.prefix" v-if="$slots.prefix" :class="$style.prefix" :round="round" :circle="circle" :fixable="fixable">
            <slot name="prefix"></slot>
        </span>
        <span ot v-ot-bind="$otColors.suffix" v-if="$slots.suffix" :class="$style.suffix" :round="round" :circle="circle" :fixable="fixable" ref="suffix">
            <slot name="suffix"></slot>
        </span>
        <input ot v-ot-bind="$otColors.input" :round="round" :circle="circle" :clearable="clearable" :logo="icon" :_type="type"
            :class="$style.input" :placeholder="placeholder" :type="_type" :disabled="disabled"
            :autocomplete="autocomplete" :maxlength="_maxlength"
            :readonly="readonly"
            :name="name"
            :value="model"
            @input="handleInput" v-on="$listeners"
            :suffix-clearable="$slots.suffix && clearable">
        <span :class="$style.clearable" :type="type" v-if="clearable" @click="handleClearClick" :style="suffixClearableStyle">
            <ot-icon ot v-ot-bind="$otColors.icon" icon="close"></ot-icon>
        </span>
        <span :class="$style.password" v-if="!$slots.suffix && type === 'password'" @click="handlePasswordEyeClick">
            <ot-icon ot v-ot-bind="$otColors.icon" :icon="showPwd ? 'eye' : 'eye-slash'"></ot-icon>
        </span>
        <span :class="$style.logo" v-if="!$slots.prefix && icon">
            <ot-icon ot v-ot-bind="$otColors.logo" :icon="icon"></ot-icon>
        </span>
    </span>
    <span v-else ot v-ot-bind="$otColors" class="ot-input ot-textarea" :class="[$style.root]" textarea :size="$otSize" :round="round" :circle="circle">
        <textarea ot v-ot-bind="$otColors.input" :round="round" :circle="circle" :disabled="disabled"
            :autocomplete="autocomplete" :maxlength="_maxlength"
            :name="name"
            :class="[$style.input, $style.textarea]" :cols="Number(cols)" :rows="Number(rows)"
            :readonly="readonly"
            :placeholder="placeholder"
            :value="model"
            @input="handleInput" v-on="$listeners">
        </textarea>
        <span v-if="lastLength !== null" :class="$style.lastLength">剩余
            <span ot v-ot-bind="$otColors.msg" v-if="lastLength <= 10">{{ lastLength }}</span>
            <span v-else>{{ lastLength }}</span>
        个字符</span>
    </span>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-input',
    mixins: [ theme ],
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        // 提示信息
        placeholder: [ String ],
        // input 类型
        type: {
            type: [ String ],
            default: 'text',
        },
        // 禁用状态
        disabled: [ Boolean ],
        // v-model 数据源
        model: [ String, Number ],
        // name 属性
        name: [ String ],
        // 是否可清除按钮
        clearable: [ Boolean ],
        // 前置图标样式
        icon: [ String ],
        // textarea 的 cols
        cols: [ Number, String ],
        // textarea 的 rows
        rows: [ Number, String ],
        // 是否只读内容
        readonly: [ Boolean ],
        // 同原生
        autocomplete: [ String, Boolean ],
        // 最大长度
        maxlength: [ Number, String ],
        // 是否自动适应圆角
        fixable: {
            type: [ Boolean ],
            default: true,
        },
        // 圆形边框
        circle: [ Boolean ],
    },
    data() {
        return {
            showPwd: false,
            suffixClearableStyle: {},
        };
    },
    computed: {
        _type() {
            if (this.showPwd && this.type === 'password') {
                return 'text';
            }
            return this.type;
        },
        _maxlength() {
            if (this.maxlength) {
                return parseInt(this.maxlength);
            }
            return null;
        },
        lastLength() {
            if (this.$isServer) return null;
            if (this._maxlength && this.model) {
                const len = this.model.length;
                const last = this._maxlength - len;
                return last >= 0 ? last : null;
            }
            return null;
        },
    },
    methods: {
        _updateValue(value) {
            this.$emit('update', value);
        },
        _initSuffixClearableStyle() {
            if (this.$slots.suffix && this.clearable) {
                const $suffixEl = this.$refs.suffix;
                if ($suffixEl) {
                    const width = $suffixEl.offsetWidth;
                    this.suffixClearableStyle = {
                        right: `${width}px`,
                    };
                    return;
                }
            }
            this.suffixClearableStyle = {};
        },
        handleInput(e) {
            if (this.$isServer) return;
            if (this._maxlength) {
                const value = e.target.value;
                const len = value.length;
                const max = this._maxlength;
                if (max <= len) {
                    const v = value.substr(0, max);
                    this._updateValue(v);
                    return;
                }
            }
            this._updateValue(e.target.value);
        },
        handleClearClick(e) {
            this._updateValue('');
            this.$emit('clear', e);
        },
        handlePasswordEyeClick() {
            this.showPwd = !this.showPwd;
        },
    },
    mounted() {
        this._initSuffixClearableStyle();
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: flex;
    position: relative;
    box-sizing: border-box;
    flex-direction: row;
    vertical-align: middle;

    .prefix {
        display: inline-block;
        flex: 0 0 auto;
        vertical-align: middle;
        min-width: 3em;
        position: relative;
        box-sizing: border-box;
        text-align: center;

        &+.input[round] {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }

        &+.suffix+.input[round] {
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }
    }

    .suffix {
        display: inline-block;
        flex: 0 0 auto;
        vertical-align: middle;
        min-width: 3em;
        order: 3;
        position: relative;
        box-sizing: border-box;
        text-align: center;

        &+.input[round] {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
    }

    .input {
        display: inline-block;
        flex: 1 1 auto;
        outline: none;
        cursor: auto !important;
        padding: 2px 1em;
        position: relative;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        vertical-align: middle;
        overflow: hidden;
        line-height: 1;

        &:focus {
            outline: none;
        }

        &[clearable] {
            padding-right: 2em;

            &:focus, &:hover {

                &+.clearable {
                    visibility: visible;
                }
            }
        }

        &[_type=password] {
            padding-right: 2em;

            &[clearable] {
                padding-right: 3.4em;
            }
        }

        &[logo] {
            padding-left: 2em;
        }
    }

    .textarea {
        padding: .6em 1em;
        width: 100%;
        height: 100%;
        line-height: 1.2;
        box-sizing: border-box;

        &[maxlength] {
            padding-bottom: 1.2em;
        }
    }

    .lastLength {
        position: absolute;
        right: 5px;
        bottom: 5px;
        line-height: 1px;
        font-size: 1rem;
        padding: 2px;
        user-select: none;
    }

    .clearable {
        visibility: hidden;
        position: absolute;
        top: 0;
        right: 8px;
        text-align: center;
        transition: all .3s;
        z-index: 2;
        cursor: pointer;
        vertical-align: middle;

        &:focus, &:hover {
            visibility: visible;
        }

        &[type=password] {
            right: 2.2em;
        }
    }

    .password {
        position: absolute;
        top: 0;
        right: 8px;
        text-align: center;
        transition: all .3s;
        z-index: 2;
        cursor: pointer;
        vertical-align: middle;
    }

    .logo {
        position: absolute;
        top: 0;
        left: 8px;
        text-align: center;
        transition: all .3s;
        z-index: 2;
        cursor: pointer;
        vertical-align: middle;
    }

    &[size=mini] {
        height: $--ot-mini-height;
        line-height: $--ot-mini-height;
        min-width: $--ot-mini-input-width;
        font-size: $--ot-mini-size;

        [round] {
            border-radius: $--ot-mini-radius;
        }

        [circle] {
            border-radius: $--ot-mini-height;
        }

        .prefix {
            margin-right: -$--ot-mini-radius;
            padding-right: $--ot-mini-radius;

            &[fixable] {
                padding-left: $--ot-mini-radius;
                padding-right: $--ot-mini-radius * 2;
            }
        }

        .suffix {
            margin-left: -$--ot-mini-radius;
            padding-left: $--ot-mini-radius;

            &[fixable] {
                padding-left: $--ot-mini-radius * 2;
                padding-right: $--ot-mini-radius;
            }
        }
    }

    &[size=small] {
        height: $--ot-small-height;
        line-height: $--ot-small-height;
        min-width: $--ot-small-input-width;
        font-size: $--ot-small-size;

        [round] {
            border-radius: $--ot-small-radius;
        }

        [circle] {
            border-radius: $--ot-small-height;
        }

        .prefix {
            margin-right: -$--ot-small-radius;
            padding-right: $--ot-small-radius;

            &[fixable] {
                padding-left: $--ot-small-radius;
                padding-right: $--ot-small-radius * 2;
            }
        }

        .suffix {
            margin-left: -$--ot-small-radius;
            padding-left: $--ot-small-radius;

            &[fixable] {
                padding-left: $--ot-small-radius * 2;
                padding-right: $--ot-small-radius;
            }
        }
    }

    &[size=normal] {
        height: $--ot-normal-height;
        line-height: $--ot-normal-height;
        min-width: $--ot-normal-input-width;
        font-size: $--ot-normal-size;

        [round] {
            border-radius: $--ot-normal-radius;
        }

        [circle] {
            border-radius: $--ot-normal-height;
        }

        .prefix {
            margin-right: -$--ot-normal-radius;
            padding-right: $--ot-normal-radius;

            &[fixable] {
                padding-left: $--ot-normal-radius;
                padding-right: $--ot-normal-radius * 2;
            }
        }

        .suffix {
            margin-left: -$--ot-normal-radius;
            padding-left: $--ot-normal-radius;

            &[fixable] {
                padding-left: $--ot-normal-radius * 2;;
                padding-right: $--ot-normal-radius;
            }
        }
    }

    &[size=big] {
        height: $--ot-big-height;
        line-height: $--ot-big-height;
        min-width: $--ot-big-input-width;
        font-size: $--ot-big-size;

        [round] {
            border-radius: $--ot-big-radius;
        }

        [circle] {
            border-radius: $--ot-big-height;
        }

        .prefix {
            margin-right: -$--ot-big-radius;
            padding-right: $--ot-big-radius;

            &[fixable] {
                padding-left: $--ot-big-radius;
                padding-right: $--ot-big-radius * 2;
            }
        }

        .suffix {
            margin-left: -$--ot-big-radius;
            padding-left: $--ot-big-radius;

            &[fixable] {
                padding-left: $--ot-big-radius * 2;
                padding-right: $--ot-big-radius;
            }
        }
    }

    &[textarea] {
        height: auto;
        width: auto;
    }
}
</style>

