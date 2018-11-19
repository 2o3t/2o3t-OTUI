<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="Loading" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-loading :theme="$otTheme" size="mini" label="Loading"></ot-loading>
            <ot-loading :theme="$otTheme" size="small" label="Loading"></ot-loading>
            <ot-loading :theme="$otTheme" size="normal" label="Loading"></ot-loading>
            <ot-loading :theme="$otTheme" size="big" label="Loading"></ot-loading>
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
