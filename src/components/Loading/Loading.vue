<template>
    <ot-section :theme="$otTheme" label="Loading" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-loading :theme="$otTheme" size="mini"></ot-loading>
            <ot-loading :theme="$otTheme" size="small"></ot-loading>
            <ot-loading :theme="$otTheme" size="normal"></ot-loading>
            <ot-loading :theme="$otTheme" size="big"></ot-loading>
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
