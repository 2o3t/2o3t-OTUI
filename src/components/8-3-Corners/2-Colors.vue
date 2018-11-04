<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-corners color="primary"></ot-corners>
            <ot-corners color="success"></ot-corners>
            <ot-corners color="warning"></ot-corners>
            <ot-corners color="danger"></ot-corners>
            <ot-corners color="info"></ot-corners>
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
