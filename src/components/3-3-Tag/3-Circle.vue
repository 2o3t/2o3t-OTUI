<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tag :theme="$otTheme" color="default" circle>Default</ot-tag>
            <ot-tag :theme="$otTheme" color="primary" circle>Primary</ot-tag>
            <ot-tag :theme="$otTheme" color="success" circle>Success</ot-tag>
            <ot-tag :theme="$otTheme" color="warning" circle>Warning</ot-tag>
            <ot-tag :theme="$otTheme" color="danger" circle>Danger</ot-tag>
            <ot-tag :theme="$otTheme" color="info" circle>Info</ot-tag>
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
