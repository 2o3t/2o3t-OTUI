<template>
    <ot-section :theme="$otTheme" label="RadioGroup 单选框组 + 边框" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-radio-group v-model="radioGroupValue" size="mini" checked="2" border>
                <ot-radio :theme="$otTheme" value="1">
                    <span>label</span>
                </ot-radio>
                <ot-radio :theme="$otTheme" value="2">
                    <span>2O3T</span>
                </ot-radio>
                <ot-radio :theme="$otTheme" value="3">
                    <span>OT</span>
                </ot-radio>
                <ot-radio :theme="$otTheme" value="4">
                    <span>zyao89.cn</span>
                </ot-radio>
            </ot-radio-group>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioGroupValue: '2',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
