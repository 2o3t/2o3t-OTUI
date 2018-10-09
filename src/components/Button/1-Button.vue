<template>
    <ot-section :theme="$otTheme" label="Button 按钮" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" size="mini">MINI</ot-button>
            <ot-button :theme="$otTheme" size="small">SMALL</ot-button>
            <ot-button :theme="$otTheme" size="normal">NORMAL</ot-button>
            <ot-button :theme="$otTheme" size="big">BIG</ot-button>
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
