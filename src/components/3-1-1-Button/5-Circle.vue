<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" circle>Default</ot-button>
            <ot-button :theme="$otTheme" color="primary" circle>Primary</ot-button>
            <ot-button :theme="$otTheme" color="success" circle>Success</ot-button>
            <ot-button :theme="$otTheme" color="warning" circle>Warning</ot-button>
            <ot-button :theme="$otTheme" color="danger" circle>Danger</ot-button>
            <ot-button :theme="$otTheme" color="info" circle>Info</ot-button>
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
