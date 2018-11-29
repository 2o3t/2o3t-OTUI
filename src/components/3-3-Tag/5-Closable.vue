<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tag :theme="$otTheme" color="default" closable>Default</ot-tag>
            <ot-tag :theme="$otTheme" color="primary" closable>Primary</ot-tag>
            <ot-tag :theme="$otTheme" color="success" closable>Success</ot-tag>
            <ot-tag :theme="$otTheme" color="warning" closable>Warning</ot-tag>
            <ot-tag :theme="$otTheme" color="danger" closable>Danger</ot-tag>
            <ot-tag :theme="$otTheme" color="info" closable>Info</ot-tag>
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
