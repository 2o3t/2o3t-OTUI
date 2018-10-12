<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" size="mini" disabled>MINI</ot-button>
            <ot-button :theme="$otTheme" size="small" disabled>SMALL</ot-button>
            <ot-button :theme="$otTheme" size="normal" disabled>NORMAL</ot-button>
            <ot-button :theme="$otTheme" size="big" disabled>BIG</ot-button>
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
