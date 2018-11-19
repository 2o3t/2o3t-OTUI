<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
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
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
