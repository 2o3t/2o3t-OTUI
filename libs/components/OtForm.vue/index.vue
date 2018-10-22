<template>
    <form ot class="ot-form" :class="$style.root" :autocomplete="autocomplete" :enctype="enctype" :method="method"
        :name="name" :target="target" :action="action" :size="$otSize"
        :horizontal="horizontal">
        <slot></slot>
        <slot name="submit" :validate="validate" :reset="resetFields">
            <ot-form-item name="submit">
                <ot-button v-if="submitLabel" :class="$style.btn" @click="handleClick('submit')">{{ submitLabel }}</ot-button>
                <ot-button v-if="resetLabel" :class="$style.btn" @click="handleClick('reset')">{{ resetLabel }}</ot-button>
                <ot-button v-if="cancelLabel" :class="$style.btn" @click="handleClick('cancel')">{{ cancelLabel }}</ot-button>
            </ot-form-item>
        </slot>
    </form>
</template>

<script>
import $validator from './validator.js';
import _isFunction from 'lodash/isFunction.js';
import _uniq from 'lodash/uniq.js';
export default {
    name: 'ot-form',
    provide() {
        return {
            $OtForm: this,
        };
    },
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        action: [ String ],
        autocomplete: [ String ],
        enctype: [ String ],
        method: [ String ],
        name: [ String ],
        target: [ String ],
        // self
        model: {
            type: [ Object ],
            default() {
                return {};
            },
        },
        rules: {
            type: [ Object ],
            default() {
                return {};
            },
        },
        horizontal: [ Boolean ],
        submitLabel: {
            type: [ String, Boolean ],
            default: '确认',
        },
        resetLabel: {
            type: [ String, Boolean ],
            default: '重置',
        },
        cancelLabel: {
            type: [ String, Boolean ],
            default: '取消',
        },
        labelPosition: { // left, right, center, top
            type: String,
            default: 'right',
        },
    },
    data() {
        return {
            fields: {},
            firstModel: this.$otUtils.extend(true, {}, this.model),
        };
    },
    methods: {
        addField(name, field) {
            this.fields[name] = field;
        },
        removeField(name) {
            delete this.fields[name];
        },
        getRules(name) {
            return this.rules[name];
        },
        getTriggers(name) {
            let triggers = [];
            const rules = this.getRules(name);
            if (rules) {
                if (Array.isArray(rules)) {
                    for (let i = 0; i < rules.length; i++) {
                        const rule = rules[i];
                        // trigger
                        if (rule.trigger) {
                            triggers = triggers.concat(rule.trigger);
                        }
                    }
                }
                triggers.push('blur'); // 一定加入 失去焦点验证, 需要去注册事件监听
            }
            return _uniq(triggers);
        },
        validateField(name, trigger) {
            const rules = this.getRules(name);
            return new Promise((resolve, reject) => {
                const validators = [];
                const fieldValue = this.model[name];
                if (rules) {
                    const triggers = this.getTriggers(name);
                    // { required: true, message: '请输入活动名称', trigger: 'blur' },
                    // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    if (Array.isArray(rules)) {
                        for (let i = 0; i < rules.length; i++) {
                            const rule = rules[i];
                            // trigger
                            if (trigger && !triggers.includes(trigger)) {
                                continue;
                            }

                            for (const key in $validator) {
                                if ($validator.hasOwnProperty(key)) {
                                    const args = rule[key];
                                    if (args !== undefined) {
                                        const [ valid, msg ] = $validator[key](fieldValue, args);
                                        if (!valid) {
                                            return reject(rule.message || msg);
                                        }
                                    }
                                }
                            }

                            // 自定义异步验证
                            if (rule.validator && _isFunction(rule.validator)) {
                                validators.push(rule.validator);
                                continue;
                            }
                        }
                    }
                }
                if (validators.length) {
                    // 验证自定义校验
                    (function digui(j) {
                        const validator = validators[j];
                        if (validator) {
                            validator(fieldValue, msg => {
                                if (msg) {
                                    reject(msg);
                                } else {
                                    digui(j + 1);
                                }
                            });
                        } else {
                            resolve();
                        }
                    })(0);
                } else {
                    resolve();
                }
            });
        },
        validate() {
            const promises = [];
            const keys = Object.keys(this.fields);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const field = this.fields[key];
                if (field && field.validate) {
                    const promise = field.validate();
                    promises.push(promise.then(valid => {
                        if (!valid) {
                            return field;
                        }
                    }));
                }
            }
            return Promise.all(promises).then(fields => {
                const invalids = fields.filter(field => !!field);
                if (invalids.length) {
                    invalids[0].focus();
                    return false;
                }
                // this._focusForm();
                this._updateModel();
                return true;
            });
        },
        resetFields() {
            Object.keys(this.fields).forEach(key => {
                const field = this.fields[key];
                if (field && field.reset) {
                    field.reset();
                }
            });
            Object.keys(this.model).forEach(name => {
                if (Array.isArray(this.model[name])) {
                    this.model[name] = this.$otUtils.extend(true, [], this.firstModel[name]);
                } else if (typeof this.model[name] === 'object') {
                    this.model[name] = this.$otUtils.extend(true, {}, this.firstModel[name]);
                } else {
                    this.model[name] = this.firstModel[name];
                }
            });
            // this._updateModel();
            this._focusForm();
        },
        _focusForm() { // 聚焦
            const $el = this.$el;
            $el.focus();
            // 定位到这里
            const targetY = this.$otUtils.getOffsetTop($el) - window.innerHeight * 0.2;
            const currentY = this.$otUtils.getScrollTop();
            this.$otUtils.scrollAnimation(currentY, targetY);
        },
        _updateModel() {
            this.$emit('update', this.model);
        },
        handleClick(action) {
            switch (action) {
                case 'submit': {
                    const promise = this.validate();
                    promise.then(valid => {
                        if (valid) {
                            console.log('submit...');
                            this.$emit('event', action, this.model);
                        }
                    }); }
                    break;
                case 'reset':
                    this.resetFields();
                    this.$emit('event', action);
                    break;
                case 'cancel':
                default:
                    this.$emit('event', action);
            }
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: flex;
    position: relative;
    box-sizing: border-box;
    flex-direction: column;

    &[horizontal] {
        flex-direction: row;
    }

    @include __ot_size__;

    .btn {
        margin-right: 2em;
    }
}
</style>

