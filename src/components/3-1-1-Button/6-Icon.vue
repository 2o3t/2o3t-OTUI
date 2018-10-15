<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" icon="search" circle>Default</ot-button>
            <ot-button :theme="$otTheme" icon="repeat" color="primary" circle>Primary</ot-button>
            <ot-button :theme="$otTheme" icon="chain" color="success" circle>Success</ot-button>
            <ot-button :theme="$otTheme" icon="refresh" color="warning" circle>Warning</ot-button>
            <ot-button :theme="$otTheme" icon="cog" color="danger" circle>Danger</ot-button>
            <ot-button :theme="$otTheme" icon="star" color="info" circle>Info</ot-button>
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
