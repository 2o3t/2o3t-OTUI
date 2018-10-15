<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tag :theme="$otTheme" color="default">Default</ot-tag>
            <ot-tag :theme="$otTheme" color="primary">Primary</ot-tag>
            <ot-tag :theme="$otTheme" color="success">Success</ot-tag>
            <ot-tag :theme="$otTheme" color="warning">Warning</ot-tag>
            <ot-tag :theme="$otTheme" color="danger">Danger</ot-tag>
            <ot-tag :theme="$otTheme" color="info">Info</ot-tag>
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
