<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-loading :theme="$otTheme" type="spinner" size="mini"></ot-loading>
            <ot-loading :theme="$otTheme" type="spinner" size="small"></ot-loading>
            <ot-loading :theme="$otTheme" type="spinner" size="normal"></ot-loading>
            <ot-loading :theme="$otTheme" type="spinner" size="big"></ot-loading>
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
