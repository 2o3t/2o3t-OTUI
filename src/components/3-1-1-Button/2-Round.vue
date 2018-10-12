<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" size="mini" round>MINI</ot-button>
            <ot-button :theme="$otTheme" size="small" round>SMALL</ot-button>
            <ot-button :theme="$otTheme" size="normal" round>NORMAL</ot-button>
            <ot-button :theme="$otTheme" size="big" round>BIG</ot-button>
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
