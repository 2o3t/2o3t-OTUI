<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="Loading" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-color-rule-table name="light" shuxing="font" v-ot-loading="loading" ot-loading-text="Loading">
            </ot-color-rule-table>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
