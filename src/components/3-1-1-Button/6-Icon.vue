<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" icon="search" circle>Default</ot-button>
            <ot-button :theme="$otTheme" icon="location" color="primary" circle>Primary</ot-button>
            <ot-button :theme="$otTheme" icon="link" color="success" circle>Success</ot-button>
            <ot-button :theme="$otTheme" icon="reload" color="warning" circle>Warning</ot-button>
            <ot-button :theme="$otTheme" icon="setting" color="danger" circle>Danger</ot-button>
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
