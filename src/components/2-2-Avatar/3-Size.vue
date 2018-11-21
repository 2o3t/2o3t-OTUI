<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-avatar size="mini">U</ot-avatar>
            <ot-avatar size="small" round>U</ot-avatar>
            <ot-avatar size="normal" circle>U</ot-avatar>
            <ot-avatar size="big" icon="logo"></ot-avatar>
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
