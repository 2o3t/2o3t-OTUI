<template>
    <form ot class="ot-form" :class="$style.root" :autocomplete="autocomplete" :enctype="enctype" :method="method"
        :name="name" :target="target" :action="action"
        :vertical="vertical">
        <slot></slot>
    </form>
</template>

<script>
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
        vertical: [ Boolean ],
    },
    data() {
        return {
            fields: {},
        };
    },
    methods: {
        addField(name, field) {
            console.log('addField: ', name);
            this.fields[name] = field;
        },
        removeField(name) {
            console.log('removeField: ', name);
            delete this.fields[name];
        },
        getRules(name) {
            return this.rules[name];
        },
        getRuleTriggers(name) {
            let triggers = [];
            const rules = this.getRules(name);
            if (rules) {
                if (Array.isArray(rules)) {
                    for (let i = 0; i < rules.length; i++) {
                        const rule = rules[i];
                        // trigger
                        if (rule.trigger) {
                            triggers = triggers.concat(rule.trigger);
                        } else {
                            triggers.push('blur');
                        }
                    }
                }
            }
            return triggers;
        },
        validateField(name, trigger) {
            const rules = this.getRules(name);
            const triggers = this.getRuleTriggers(name);
            if (rules) {

                const fieldValue = this.model[name];
                // { required: true, message: '请输入活动名称', trigger: 'blur' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                if (Array.isArray(rules)) {
                    const validator = this.$otUtils.$validator;
                    for (let i = 0; i < rules.length; i++) {
                        const rule = rules[i];
                        // trigger
                        if (trigger && !triggers.includes(trigger)) {
                            continue;
                        }

                        for (const key in validator) {
                            if (validator.hasOwnProperty(key)) {
                                const args = rule[key];
                                if (args !== undefined) {
                                    const [ valid, msg ] = validator[key](fieldValue, args);
                                    if (!valid) {
                                        return rule.message || msg;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return true;
        },
        validate() {
            Object.keys(this.fields).forEach(key => {
                const field = this.fields[key];
                if (field && field.validate) {
                    field.validate();
                }
            });
            this._updateModel();
            this._focusForm();
        },
        resetFields() {
            Object.keys(this.fields).forEach(key => {
                const field = this.fields[key];
                if (field && field.reset) {
                    field.reset();
                }
            });
            this._updateModel();
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
    },
};
</script>

<style lang="scss" module>
.root {

}
</style>

