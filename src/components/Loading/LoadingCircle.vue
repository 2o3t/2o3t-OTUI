<template>
    <ot-section :theme="$otTheme" label="Loading Circle" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-loading :theme="$otTheme" type="circle" size="mini"></ot-loading>
            <ot-loading :theme="$otTheme" type="circle" size="small"></ot-loading>
            <ot-loading :theme="$otTheme" type="circle" size="normal"></ot-loading>
            <ot-loading :theme="$otTheme" type="circle" size="big"></ot-loading>
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
