<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tag :theme="$otTheme" size="mini" round>Mini</ot-tag>
            <ot-tag :theme="$otTheme" size="small" round> Small</ot-tag>
            <ot-tag :theme="$otTheme" size="normal" round>Normal</ot-tag>
            <ot-tag :theme="$otTheme" size="big" round>Big</ot-tag>
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
