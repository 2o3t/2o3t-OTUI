<template>
    <div ot class="ot-date-picker" :class="$style.root">
        <ot-select :class="$style.timer" :placeholder="placeholder" round
            :icon="icon" :clearable="clearable"
            :readonly="readonly"
            v-model="selectValue" custom>
            <div @click="(e) => e.stopPropagation()">
                <ot-date-panel v-model="selectValue" :theme="$otTheme"
                    :weeksLabel="weeksLabel"
                    :week="week"
                    :footer="footer"
                    :format="format" @change="handleOnChange"
                    @ok="handleOK">
                </ot-date-panel>
            </div>
        </ot-select>
    </div>
</template>

<script>
export default {
    name: 'ot-date-picker',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        // 日历中星期Label文字内容
        weeksLabel: {
            type: Array,
            default() {
                return [ '日', '一', '二', '三', '四', '五', '六' ];
            },
        },
        // 选择框提示内容
        placeholder: {
            type: String,
            default: '请选择',
        },
        // 是否为只可读
        readonly: [ Boolean ],
        // 清除内容按钮
        clearable: [ Boolean ],
        // 输出文本格式化
        format: {
            type: String,
            default: 'YYYY-MM-DD',
        },
        // 是否为选择 周 .
        week: [ Boolean ],
        // 是否显示底部面板
        footer: [ Boolean ],
        // 数据源 `v-model`
        model: {
            type: String,
            default: '',
        },
        // 展示的图标
        icon: {
            type: String,
            default: 'clock-o',
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
            console.log(this.selectValue);
            this.$emit('change', value); // 改变事件
        },
        updateModel() {
            this.$emit('update', this.selectValue); // `v-model` 数据更新
        },
        handleOK() {
            document.body.click();
            this.updateModel();
        },
    },
};
</script>

<style lang="scss" module>
.root {

}
</style>

