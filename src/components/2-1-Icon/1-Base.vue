<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-icon :theme="$otTheme" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" icon="android"></ot-icon>
            <ot-icon :theme="$otTheme" icon="flag"></ot-icon>
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
