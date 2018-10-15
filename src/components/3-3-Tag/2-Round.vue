<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tag :theme="$otTheme" color="default" round>Default</ot-tag>
            <ot-tag :theme="$otTheme" color="primary" round>Primary</ot-tag>
            <ot-tag :theme="$otTheme" color="success" round>Success</ot-tag>
            <ot-tag :theme="$otTheme" color="warning" round>Warning</ot-tag>
            <ot-tag :theme="$otTheme" color="danger" round>Danger</ot-tag>
            <ot-tag :theme="$otTheme" color="info" round>Info</ot-tag>
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
