<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-progress :percentage="10" color="primary"></ot-progress>
            <ot-progress :percentage="20" color="success"></ot-progress>
            <ot-progress :percentage="30" color="warning"></ot-progress>
            <ot-progress :percentage="40" color="danger"></ot-progress>
            <ot-progress :percentage="50" color="info"></ot-progress>
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
