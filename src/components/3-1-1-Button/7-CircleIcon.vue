<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" icon="cog" circle></ot-button>
            <ot-button :theme="$otTheme" icon="refresh" color="primary" circle></ot-button>
            <ot-button :theme="$otTheme" icon="star" color="success" circle></ot-button>
            <ot-button :theme="$otTheme" icon="chain" color="warning" circle></ot-button>
            <ot-button :theme="$otTheme" icon="repeat" color="danger" circle></ot-button>
            <ot-button :theme="$otTheme" icon="search" color="info" circle></ot-button>
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
