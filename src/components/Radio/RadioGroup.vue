<template>
    <ot-section :theme="otTheme" label="OT-RadioGroup" prefix="#" section>
        <ot-row-group :theme="otTheme" :code="code">
            <ot-radio-group v-model="radioGroupValue">
                <ot-radio :theme="otTheme" size="mini" value="1">
                    <span>label</span>
                </ot-radio>
                <ot-radio :theme="otTheme" size="small" value="2">
                    <span>2O3T</span>
                </ot-radio>
                <ot-radio :theme="otTheme" size="normal" value="3" :checked="true">
                    <span>OT</span>
                </ot-radio>
                <ot-radio :theme="otTheme" size="big" value="4">
                    <span>zyao89.cn</span>
                </ot-radio>
            </ot-radio-group>

            <ot-radio-group v-model="radioGroupValue" size="mini" checked="1" round border>
                <ot-radio :theme="otTheme" value="1">
                    <span>label</span>
                </ot-radio>
                <ot-radio :theme="otTheme" value="2">
                    <span>2O3T</span>
                </ot-radio>
                <ot-radio :theme="otTheme" value="3">
                    <span>OT</span>
                </ot-radio>
                <ot-radio :theme="otTheme" value="4">
                    <span>zyao89.cn</span>
                </ot-radio>
            </ot-radio-group>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data () {
        return {
            radioGroupValue: 'A',
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
