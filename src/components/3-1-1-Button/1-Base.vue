<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme">Default</ot-button>
            <ot-button :theme="$otTheme" color="primary">Primary</ot-button>
            <ot-button :theme="$otTheme" color="success">Success</ot-button>
            <ot-button :theme="$otTheme" color="warning">Warning</ot-button>
            <ot-button :theme="$otTheme" color="danger">Danger</ot-button>
            <ot-button :theme="$otTheme" color="info">Info</ot-button>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioSelect: 'A',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
