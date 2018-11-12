<template>
    <ot-row-group class="ot-form-item" :class="$style.root" :vertical="_vertical" :fixable="false"
        :size="$otSize">
        <ot-label :class="$style.label" :name="name" :required="required"
            :style="{ width: labelWidth }" :position="labelPosition">
            <span v-ot-title>{{ label }}</span>
        </ot-label>
        <div :class="$style.row" ot>
            <slot></slot>
            <div ot v-if="errorMsg" v-ot-bind="$otColors.msg" :class="$style.msg">{{ errorMsg }}</div>
        </div>
    </ot-row-group>
</template>

<script>
import theme from './OtFormItemTheme.js';
const isStr = v => Object.prototype.toString.call(v) === '[object String]';
export default {
    name: 'ot-form-item',
    mixins: [ theme ],
    provide() {
        return {
            $OtFormItem: this,
        };
    },
    inject: [ '$OtForm' ],
    props: {
        name: {
            type: [ String ],
            required: true,
        },
        label: [ String ],
        labelWidth: {
            type: [ String ],
            default: '100px',
        },
        vertical: [ Boolean ],
    },
    data() {
        return {
            inputElements: [],
            required: false,
            errorMsg: '',
        };
    },
    computed: {
        _vertical() {
            if (this.$OtForm && this.$OtForm.labelPosition) {
                const position = this.$OtForm.labelPosition;
                if (position === 'top') {
                    return true;
                }
            }
            return this.vertical;
        },
        labelPosition() {
            if (this.$OtForm && this.$OtForm.labelPosition) {
                const position = this.$OtForm.labelPosition;
                if (position === 'top') {
                    return 'left';
                }
                return position;
            }
            return 'right';
        },
    },
    created() {
        if (this.$OtForm) {
            this.$OtForm.addField(this.name, this);
        }
        // required
        this._initRequired();
    },
    methods: {
        _initRequired() {
            this.required = false;
            if (this.$OtForm) {
                const rules = this.$OtForm.getRules(this.name);
                if (rules) {
                    for (let i = 0; i < rules.length; i++) {
                        const rule = rules[i];
                        if (rule.required) {
                            this.required = rule.required === true;
                            break;
                        }
                    }
                }
            }
        },
        _validateInputUI(valid) {
            // 对 UI 进行操作
            this.inputElements.forEach(input => {
                if (valid === true) {
                    input.removeAttribute('ot-danger-b');
                    input.setAttribute('ot-success-b', true);
                } else if (valid === false) {
                    input.removeAttribute('ot-success-b');
                    input.setAttribute('ot-danger-b', true);
                } else {
                    input.removeAttribute('ot-success-b');
                    input.removeAttribute('ot-danger-b');
                }
            });
        },
        _initInput() {
            const $el = this.$el;
            if ($el && $el.querySelectorAll) {
                const $inputs = $el.querySelectorAll('input,textarea');
                if ($inputs && $inputs.length) {
                    $inputs.forEach(input => {
                        input.name = this.name;
                        this.inputElements.push(input);
                    });
                }
            }
        },
        _initListeners() {
            if (this._eventFn_) return;
            this._eventFn_ = this._onRuleTrigger.bind(this);
            if (this.$OtForm) {
                const triggers = this.$OtForm.getTriggers(this.name);
                if (Array.isArray(triggers)) {
                    triggers.forEach(trigger => {
                        this.inputElements.forEach(input => {
                            if (Array.isArray(trigger)) {
                                trigger.forEach(key => {
                                    input.addEventListener(key,
                                        this._eventFn_
                                    );
                                });
                            } else if (isStr(trigger)) {
                                input.addEventListener(trigger,
                                    this._eventFn_
                                );
                            }
                        });
                    });
                }
            }
        },
        _removeListeners() {
            if (!this._eventFn_) return;
            if (this.$OtForm) {
                const triggers = this.$OtForm.getTriggers(this.name);
                if (Array.isArray(triggers)) {
                    triggers.forEach(trigger => {
                        this.inputElements.forEach(input => {
                            if (Array.isArray(trigger)) {
                                trigger.forEach(key => {
                                    input.removeEventListener(key,
                                        this._eventFn_
                                    );
                                });
                            } else if (isStr(trigger)) {
                                input.removeEventListener(trigger,
                                    this._eventFn_
                                );
                            }
                        });
                    });
                }
            }
        },
        _onRuleTrigger(e) {
            // 触发验证
            const trigger = e.type;
            setTimeout(() => {
                this.validate(trigger);
            }, 100);
        },
        _blurAllInput() {
            this.inputElements.forEach(input => {
                // 清除所有焦点
                input.blur();
            });
        },
        _focusFirstInput() { // 聚焦第一个
            if (this.inputElements.length) {
                const input = this.inputElements[0];
                input.focus();
                // 定位到这里
                const targetY = this.$otUtils.getOffsetTop(input) - window.innerHeight * 0.3;
                const currentY = this.$otUtils.getScrollTop();
                this.$otUtils.scrollAnimation(currentY, targetY);
            }
        },
        focus() {
            this._focusFirstInput();
        },
        validate(trigger) {
            if (!this.$OtForm) {
                // 更新UI
                this._validateInputUI(true);
                return true;
            }
            const p = this.$OtForm.validateField(this.name, trigger);
            return p.then(() => {
                // 通过了
                this.errorMsg = '';
                // 更新UI
                this._validateInputUI(true);
                return true;
            }).catch(message => {
                // 需要显示提示
                this.errorMsg = message;
                // 更新UI
                this._validateInputUI(false);
                return false;
            });
        },
        reset() {
            // 清空错误提示
            this.errorMsg = '';
            this._validateInputUI();
            this._blurAllInput();
        },
    },
    mounted() {
        this._initInput();
        this._initListeners();
    },
    beforeDestroy() {
        if (this.$OtForm) {
            this.$OtForm.removeField(this.name);
        }
        this._removeListeners();
    },
};
</script>

<style lang="scss" module>
.root {
    @import '../globals';
    position: relative;
    box-sizing: border-box;
    display: table;

    &>[ot][childs]:not([vertical]) {
        align-items: baseline;
    }

    @include __ot_size__;

    .label {
        display: table-cell;
        margin-right: 1em;
        vertical-align: middle;

        &[position=ri] {

        }
    }

    .row {
        display: table-cell;
        position: relative;
        box-sizing: border-box;
        vertical-align: middle;
    }

    .msg {
        font-size: 0.8em;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 100%;
        left: 0;
    }
}
</style>
