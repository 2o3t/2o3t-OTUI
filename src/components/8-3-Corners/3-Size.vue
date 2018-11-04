<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-corners size="mini"></ot-corners>
            <ot-corners size="small"></ot-corners>
            <ot-corners size="normal"></ot-corners>
            <ot-corners size="big"></ot-corners>
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
