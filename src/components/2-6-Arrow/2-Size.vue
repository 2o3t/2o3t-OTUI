<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <ot-arrow :theme="$otTheme" size="mini" placement="up"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="mini" placement="down"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="mini" placement="left"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="mini" placement="right"></ot-arrow>
        </ot-row-group>
        <ot-row-group :theme="$otTheme">
            <ot-arrow :theme="$otTheme" size="small" placement="up"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="small" placement="down"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="small" placement="left"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="small" placement="right"></ot-arrow>
        </ot-row-group>
        <ot-row-group :theme="$otTheme">
            <ot-arrow :theme="$otTheme" size="normal" placement="up"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="normal" placement="down"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="normal" placement="left"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="normal" placement="right"></ot-arrow>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-arrow :theme="$otTheme" size="big" placement="up"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="big" placement="down"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="big" placement="left"></ot-arrow>
            <ot-arrow :theme="$otTheme" size="big" placement="right"></ot-arrow>
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
