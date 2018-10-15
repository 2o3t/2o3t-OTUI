<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-link size="mini" :theme="$otTheme" line>Mini</ot-link>
            <ot-link size="small" :theme="$otTheme" line>Small</ot-link>
            <ot-link size="normal" :theme="$otTheme" line>Normal</ot-link>
            <ot-link size="big" :theme="$otTheme" line>Big</ot-link>
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
