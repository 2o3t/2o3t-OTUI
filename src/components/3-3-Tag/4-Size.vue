<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tag :theme="$otTheme" size="mini" circle>Mini</ot-tag>
            <ot-tag :theme="$otTheme" size="small" circle> Small</ot-tag>
            <ot-tag :theme="$otTheme" size="normal" circle>Normal</ot-tag>
            <ot-tag :theme="$otTheme" size="big" circle>Big</ot-tag>
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
