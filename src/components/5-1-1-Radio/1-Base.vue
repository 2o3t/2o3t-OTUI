<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-radio :theme="$otTheme" v-model="radioValue" value="1">
                <span>Radio 1</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" v-model="radioValue" value="2">
                <span>Radio 2</span>
            </ot-radio>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioValue: '1',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
