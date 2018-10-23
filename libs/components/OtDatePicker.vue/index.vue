<template>
    <div ot class="ot-date-picker" :class="$style.root">
        <ot-select :class="$style.timer" :placeholder="placeholder" round
            icon="clock-o" :clearable="clearable"
            :readonly="readonly"
            v-model="selectValue" custom>
            <div @click="(e) => e.stopPropagation()">
                <ot-date-panel v-model="selectValue" :theme="$otTheme"
                    :weeksLabel="weeksLabel"
                    :week="week"
                    :footer="footer"
                    :format="format" @change="handleOnChange">
                </ot-date-panel>
            </div>
        </ot-select>
    </div>
</template>

<script>
import OtDatePanel from './OtDatePanel.vue';
export default {
    name: 'ot-date-picker',
    components: {
        OtDatePanel,
    },
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        weeksLabel: {
            type: Array,
            default() {
                return [ '日', '一', '二', '三', '四', '五', '六' ];
            },
        },
        placeholder: {
            type: String,
            default: '请选择',
        },
        readonly: [ Boolean ],
        clearable: [ Boolean ],
        format: {
            type: String,
            default: 'YYYY-MM-DD',
        },
        week: [ Boolean ],
        footer: [ Boolean ],
        model: {
            type: String,
            default: '',
        },
    },
    watch: {
        model(nv, ov) {
            if (nv !== ov) {
                this.selectValue = nv;
            }
        },
        selectValue(nv, ov) {
            if (nv !== ov) {
                this.updateModel();
            }
        },
    },
    data() {
        return {
            selectValue: '',
        };
    },
    methods: {
        handleOnChange(value) {
            this.$emit('change', value);
        },
        updateModel() {
            this.$emit('update', this.selectValue);
        },
    },
};
</script>

<style lang="scss" module>
.root {

}
</style>

