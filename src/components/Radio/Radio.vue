<template>
    <ot-section :theme="otTheme" label="Radio 单选框" prefix="#" section>
        <ot-row-group :theme="otTheme" :code="code">
            <ot-radio :theme="otTheme" size="mini" v-model="radioValue" value="1">
                <span>label</span>
            </ot-radio>
            <ot-radio :theme="otTheme" size="small" v-model="radioValue" value="2">
                <span>2O3T</span>
            </ot-radio>
            <ot-radio :theme="otTheme" size="normal" v-model="radioValue" value="3" :checked="true">
                <span>OT</span>
            </ot-radio>
            <ot-radio :theme="otTheme" size="big" v-model="radioValue" value="4">
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
