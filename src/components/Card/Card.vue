<template>
    <ot-section :theme="$otTheme" label="Card 卡片" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-card :theme="$otTheme"></ot-card>
            <ot-card :theme="$otTheme"></ot-card>
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
