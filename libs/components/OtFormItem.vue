<template>
    <ot-row-group class="ot-form-item" :class="$style.root" :vertical="vertical" :fixable="false">
        <ot-label :class="$style.label" :name="name" :required="required"
            :style="{ width: labelWidth }">
            <span v-ot-title>{{ label }}</span>
        </ot-label>
        <div :class="$style.row" ot>
            <slot></slot>
            <div ot v-if="errorMsg" v-bind="$otColors.msg" :class="$style.msg">{{ errorMsg }}</div>
        </div>
    </ot-row-group>
</template>

<script>
const isStr = v => Object.prototype.toString.call(v) === '[object String]';
export default {
    name: 'ot-form-item',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    msg: {
                        normal: [ 'danger-f' ],
                    },
                };
            case 'light':
            default:
                return {
                    msg: {
                        normal: [ 'danger-f' ],
                    },
                };
        }
    },
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
    },
    data() {
        return {
            vertical: false,
            inputElements: [],
            required: false,
            errorMsg: '',
        };
    },
    created() {
        if (this.$OtForm) {
            this.$OtForm.addField(this.name, this);
        }
        // required
        if (this.$OtForm) {
            this.required = false;
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
    beforeDestroy() {
        if (this.$OtForm) {
            this.$OtForm.removeField(this.name);
        }
        this._removeListeners();
    },
    mounted() {
        this._initInput();
        this._initListeners();
    },
    methods: {
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
            const $slot = this.$slots.default;
            if ($slot && $slot.length) {
                const $el = $slot[0].elm;
                if ($el) {
                    const $input = $el.querySelector('input');
                    if ($input) {
                        $input.name = this.name;
                        this.inputElements.push($input);
                    }
                }
            }
        },
        _initListeners() {
            if (this._eventFn_) return;
            this._eventFn_ = this._onRuleTrigger.bind(this);
            if (this.$OtForm) {
                const triggers = this.$OtForm.getRuleTriggers(this.name);
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
                const triggers = this.$OtForm.getRuleTriggers(this.name);
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
            console.log('trigger: ', trigger);
            this.validate(trigger);
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
        validate(trigger) {
            let valid = true;
            let message = true;
            if (this.$OtForm) {
                message = this.$OtForm.validateField(this.name, trigger);
            }
            if (message === true) {
                // 通过了
                this.errorMsg = '';
                valid = true;
            } else {
                // 需要显示提示
                this.errorMsg = message;
                valid = false;
            }
            // 更新UI
            this._validateInputUI(valid);
            return valid;
        },
        reset() {
            // 清空错误提示
            this.errorMsg = '';
            this._validateInputUI();
            this._blurAllInput();
        },
    },
};
</script>

<style lang="scss" module>
.root {
    @import './globals';
    position: relative;
    box-sizing: border-box;

    @include __ot_size__;

    .label {
        margin-right: 0.6em;
    }

    .row {
        position: relative;
        box-sizing: border-box;
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
