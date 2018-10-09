<template>
    <ot-section :theme="otTheme" label="Radio 单选框 + 边框 + 圆角" prefix="#" section>
        <ot-row-group :theme="otTheme" :code="code">
            <!-- 有边框 + 圆角 -->
            <ot-radio :theme="otTheme" size="mini" v-model="radioValue" value="1" border round>
                <span>label</span>
            </ot-radio>
            <ot-radio :theme="otTheme" size="small" v-model="radioValue" value="2" border round>
                <span>2O3T</span>
            </ot-radio>
            <ot-radio :theme="otTheme" size="normal" v-model="radioValue" value="3" :checked="true" border round>
                <span>OT</span>
            </ot-radio>
            <ot-radio :theme="otTheme" size="big" v-model="radioValue" value="4" border round>
                <span>zyao89.cn</span>
            </ot-radio>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data () {
        return {
            radioValue: 'abc',
            code: decodeURIComponent(`<%=__otSourceCode__=%>`),
        }
    },
    computed: {
        otTheme() {
            return this.otStores.theme;
        },
    }
};
</script>
