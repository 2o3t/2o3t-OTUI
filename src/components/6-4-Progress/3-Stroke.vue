<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-progress :percentage="70" :stroke-width="38" :text-inside="true"></ot-progress>
            <ot-progress :percentage="30" :stroke-width="68" :text-inside="true" style="width: 300px;"></ot-progress>
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
