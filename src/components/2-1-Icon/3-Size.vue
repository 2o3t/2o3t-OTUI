<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-icon :theme="$otTheme" size="mini" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="small" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="normal" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="big" icon="apple"></ot-icon>
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
