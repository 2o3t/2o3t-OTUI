<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-color-rule-table name="light" shuxing="font" v-ot-loading="loading" :ot-loading-text="label" :ot-loading-spinner="spinner">
            </ot-color-rule-table>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            spinner: 'logo',
            label: '2O3T Loading',
            loading: true,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
