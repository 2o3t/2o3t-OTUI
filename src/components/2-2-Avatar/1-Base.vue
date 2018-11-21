<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-avatar>U</ot-avatar>
            <ot-avatar round>U</ot-avatar>
            <ot-avatar circle>U</ot-avatar>
            <ot-avatar icon="logo"></ot-avatar>
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
