<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-loading :theme="$otTheme" type="spinner" size="mini" label="Loading"></ot-loading>
            <ot-loading :theme="$otTheme" type="spinner" size="small" label="Loading"></ot-loading>
            <ot-loading :theme="$otTheme" type="spinner" size="normal" label="Loading"></ot-loading>
            <ot-loading :theme="$otTheme" type="spinner" size="big" label="Loading"></ot-loading>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
