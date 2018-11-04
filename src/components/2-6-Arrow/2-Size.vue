<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <ot-arrow :theme="$otTheme" size="mini" placement="up" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="mini" placement="down" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="mini" placement="left" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="mini" placement="right" border></ot-arrow>
        </ot-row-group>
        <ot-row-group :theme="$otTheme">
            <ot-arrow :theme="$otTheme" size="small" placement="up" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="small" placement="down" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="small" placement="left" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="small" placement="right" border></ot-arrow>
        </ot-row-group>
        <ot-row-group :theme="$otTheme">
            <ot-arrow :theme="$otTheme" size="normal" placement="up" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="normal" placement="down" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="normal" placement="left" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="normal" placement="right" border></ot-arrow>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-arrow :theme="$otTheme" size="big" placement="up" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="big" placement="down" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="big" placement="left" border></ot-arrow>
            <ot-arrow :theme="$otTheme" size="big" placement="right" border></ot-arrow>
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
