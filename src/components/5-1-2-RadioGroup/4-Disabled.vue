<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-radio-group v-model="radioGroupValue" border round>
                <ot-radio :theme="$otTheme" value="1">
                    <span>Radio A</span>
                </ot-radio>
                <ot-radio :theme="$otTheme" value="2" disabled>
                    <span>2O3T</span>
                </ot-radio>
                <ot-radio :theme="$otTheme" value="3">
                    <span>OT</span>
                </ot-radio>
                <ot-radio :theme="$otTheme" value="4" disabledx>
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
            radioGroupValue: '1',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
