<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-pagination :theme="$otTheme" :total="total" show-jumper></ot-pagination>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            total: 100,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
