<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-corners></ot-corners>
            <ot-corners position="left"></ot-corners>
            <ot-corners position="bottom-right"></ot-corners>
            <ot-corners position="bottom-left"></ot-corners>
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
