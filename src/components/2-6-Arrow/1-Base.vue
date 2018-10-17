<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-arrow :theme="$otTheme" placement="up"></ot-arrow>
            <ot-arrow :theme="$otTheme" placement="down"></ot-arrow>
            <ot-arrow :theme="$otTheme" placement="left"></ot-arrow>
            <ot-arrow :theme="$otTheme" placement="right"></ot-arrow>
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
