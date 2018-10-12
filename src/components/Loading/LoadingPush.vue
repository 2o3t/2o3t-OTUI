<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="Loading Push" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-loading :theme="$otTheme" type="push" size="mini" :label="label"></ot-loading>
            <ot-loading :theme="$otTheme" type="push" size="small" :label="label"></ot-loading>
            <ot-loading :theme="$otTheme" type="push" size="normal" :label="label"></ot-loading>
            <ot-loading :theme="$otTheme" type="push" size="big" :label="label"></ot-loading>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            label: '2O3T Loading',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
